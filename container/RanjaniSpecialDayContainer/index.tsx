"use client";

import React, { useState, useRef, useEffect } from "react";
import "@/components/ranjani-special-day/ranjani.css";
import FloatingHearts from "@/components/ranjani-special-day/FloatingHearts";

import ButterscotchCake from "@/components/ranjani-special-day/ButterscotchCake";
import CartoonStickers from "@/components/ranjani-special-day/CartoonStickers";
import { Heart, Sparkles, Volume2, X, AlertTriangle } from "lucide-react";
import confetti from "canvas-confetti";

export default function RanjaniSpecialDayContainer() {
  const [isPlayingLoveSound, setIsPlayingLoveSound] = useState(false);
  const [showLoveModal, setShowLoveModal] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/sms-quiz";
  const tunePath = `${basePath}/tunes/happy-happy-happy-song.mp3`;
  const imagePath = `${basePath}/drawing.jpg`;



  const handleSendLove = () => {
    setIsPlayingLoveSound(true);
    setShowLoveModal(true);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(tunePath);
    audioRef.current = audio;

    audio.play().catch(() => {
      // Fallback if audio fails
    });

    audio.onended = () => {
      setIsPlayingLoveSound(false);
    };

    try {
      confetti({
        particleCount: 90,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#ec4899", "#f472b6", "#f59e0b", "#e11d48"],
      });
    } catch {
      // fallback
    }
  };

  const handleCloseModal = () => {
    setShowLoveModal(false);
    setIsPlayingLoveSound(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-rose-100 via-amber-50 to-pink-100 text-gray-900 font-sans overflow-x-hidden selection:bg-none select-none pb-20">
      {/* Floating Background Particles */}
      <FloatingHearts />

      {/* Main Birthday Celebration Content */}
      <>
        {/* Hero Header Section */}
        <header className="relative pt-16 pb-10 px-4 text-center z-10 max-w-5xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-pink-200 shadow-md backdrop-blur-md mb-6 animate-float">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
            <span className="text-xs sm:text-sm font-bold text-pink-700 font-outfit uppercase tracking-wider">
              A Special Birthday Celebration For Ranju ma ✨
            </span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-outfit text-gray-900 leading-tight">
            Happy Birthday,{" "}
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 bg-clip-text text-transparent text-glow-gold">
              Ranjani! ❤️
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-2xl text-gray-700 max-w-2xl mx-auto font-handwriting font-semibold">
            To my wonderful would-be partner* — May your birthday be filled with endless smiles, sweet memories, and unlimited butterscotch treats! 🍯✨
          </p>

          {/* Highlighted Surprise Button */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3">
            <button
              onClick={handleSendLove}
              className="relative px-9 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-extrabold text-lg sm:text-xl shadow-2xl hover:shadow-pink-500/50 hover:scale-110 active:scale-95 transition-all flex items-center gap-3 ring-4 ring-pink-400/40 animate-pulse cursor-pointer"
            >
              <Sparkles className={`w-7 h-7 text-amber-200 ${isPlayingLoveSound ? "animate-bounce" : "animate-spin"}`} />
              <span>{isPlayingLoveSound ? "Playing Birthday Surprise... ✨" : "Special Birthday Surprise 🎁"}</span>
              {isPlayingLoveSound && <Volume2 className="w-6 h-6 text-amber-200 animate-spin" />}
            </button>

            <p className="mt-4 text-lg sm:text-2xl text-gray-700 max-w-2xl mx-auto font-handwriting font-semibold">
              * ...but first, click the above button to view what I want to say to you, then enjoy the butterscotch cake!
            </p>
          </div>
        </header>

        {/* Main Content Sections */}
        <div className="space-y-12">
          <div id="cake-section">
            <ButterscotchCake />
          </div>

          <div id="cartoons-section">
            <CartoonStickers />
          </div>


        </div>

        {/* Special Birthday Surprise Modal Popup */}
        {showLoveModal && (
          <div
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
            onClick={handleCloseModal}
          >
            <div
              className="relative bg-gradient-to-b from-amber-50 via-white to-pink-50 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border-4 border-pink-300 text-center transform transition-transform animate-scaleUp"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute -top-3 -right-3 bg-rose-500 text-white p-2 rounded-full shadow-lg hover:bg-rose-600 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 font-bold text-xs uppercase mb-4 border border-pink-200">
                <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
                Special Birthday Surprise
                <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
              </div>

              {/* Custom Image Display with Anti-Save Transparent Overlay Shield */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl mb-4 border-2 border-amber-200 bg-gray-100 select-none">
                {/* Invisible Overlay Shield */}
                <div
                  className="absolute inset-0 z-20 bg-transparent"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imagePath}
                  alt="Ranjani Special Birthday"
                  className="w-full h-full object-cover pointer-events-none select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>

              <div className="space-y-2 pt-1">
                <h3 className="text-3xl font-extrabold text-gray-900 font-handwriting">
                  Happy Birthday, Ranjani! 🎉
                </h3>
                <p className="text-sm sm:text-base text-rose-700 font-semibold flex items-center justify-center gap-2 leading-relaxed px-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500 animate-bounce flex-shrink-0" />
                  <span>You know it's AI generated but still I planned to draw sometime back and even started it with one of the photo which you gave couldn't complete on time...</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 text-center py-8 px-4 border-t border-pink-200/60 max-w-4xl mx-auto z-10 relative">
          <div className="flex justify-center items-center gap-2 text-rose-600 font-bold text-lg font-outfit mb-2">
            <span>Made With Infinite Love For Ranjani</span>
            <Heart className="w-5 h-5 fill-rose-600 animate-bounce" />
          </div>
          <p className="text-xs text-gray-500 font-medium">
            Happy Birthday • Wishing you health, peace, happiness & sweet butterscotch adventures always!
          </p>
        </footer>
      </>
    </main>
  );
}
