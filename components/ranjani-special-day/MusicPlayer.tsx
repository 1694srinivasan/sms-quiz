"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music, Play, Pause, Sparkles } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackName, setCurrentTrackName] = useState("Happy Birthday Melodic Chime ✨");
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  // Synthesize a soothing Happy Birthday melody using Web Audio API
  const playBirthdayTune = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const notes: { note: number; duration: number }[] = [
      { note: 261.63, duration: 0.3 },
      { note: 261.63, duration: 0.3 },
      { note: 293.66, duration: 0.6 },
      { note: 261.63, duration: 0.6 },
      { note: 349.23, duration: 0.6 },
      { note: 329.63, duration: 1.0 },

      { note: 261.63, duration: 0.3 },
      { note: 261.63, duration: 0.3 },
      { note: 293.66, duration: 0.6 },
      { note: 261.63, duration: 0.6 },
      { note: 392.00, duration: 0.6 },
      { note: 349.23, duration: 1.0 },

      { note: 261.63, duration: 0.3 },
      { note: 261.63, duration: 0.3 },
      { note: 523.25, duration: 0.6 },
      { note: 440.00, duration: 0.6 },
      { note: 349.23, duration: 0.6 },
      { note: 329.63, duration: 0.6 },
      { note: 293.66, duration: 1.0 },

      { note: 466.16, duration: 0.3 },
      { note: 466.16, duration: 0.3 },
      { note: 440.00, duration: 0.6 },
      { note: 349.23, duration: 0.6 },
      { note: 392.00, duration: 0.6 },
      { note: 349.23, duration: 1.2 },
    ];

    let currentTime = ctx.currentTime + 0.1;

    notes.forEach(({ note, duration }) => {
      if (!isPlayingRef.current) return;

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(note, currentTime);

      gainNode.gain.setValueAtTime(0.001, currentTime);
      gainNode.gain.exponentialRampToValueAtTime(isMuted ? 0 : 0.15, currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, currentTime + duration - 0.05);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(currentTime);
      osc.stop(currentTime + duration);

      currentTime += duration + 0.08;
    });

    const totalDurationMs = (currentTime - ctx.currentTime) * 1000;
    timeoutIdRef.current = setTimeout(() => {
      if (isPlayingRef.current) {
        playBirthdayTune();
      }
    }, totalDurationMs + 500);
  };

  const togglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    isPlayingRef.current = nextState;

    if (nextState) {
      playBirthdayTune();
    } else {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state === "running") {
        audioCtxRef.current.suspend();
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
      <div className="glass-card shadow-lg rounded-full px-4 py-2.5 flex items-center gap-3 border border-pink-200/60 transition-all duration-300 hover:shadow-pink-200/50">
        <div className={`p-2 rounded-full ${isPlaying ? 'bg-pink-500 text-white animate-spin' : 'bg-pink-100 text-pink-500'}`} style={{ animationDuration: '6s' }}>
          <Music className="w-4 h-4" />
        </div>

        <div className="hidden sm:block text-left pr-1">
          <div className="text-xs font-bold text-gray-800 flex items-center gap-1">
            <span>{currentTrackName}</span>
            {isPlaying && <Sparkles className="w-3 h-3 text-amber-500 animate-bounce" />}
          </div>
          <div className="text-[10px] text-pink-600 font-medium">
            {isPlaying ? "Playing soft birthday melody..." : "Click play for birthday music"}
          </div>
        </div>

        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-amber-500 text-white hover:scale-105 active:scale-95 transition-transform shadow-md"
          title={isPlaying ? "Pause Music" : "Play Birthday Music"}
          aria-label={isPlaying ? "Pause Music" : "Play Birthday Music"}
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
        </button>

        <button
          onClick={toggleMute}
          className="p-2 rounded-full text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors"
          title={isMuted ? "Unmute" : "Mute"}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
