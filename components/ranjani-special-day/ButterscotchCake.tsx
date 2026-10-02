"use client";

import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart } from "lucide-react";

export default function ButterscotchCake() {
  const [isLit, setIsLit] = useState(true);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/sms-quiz";
  const birthdayTunePath = `${basePath}/tunes/happy_birthday.mp3`;

  const handleBlowCandles = () => {
    if (isLit) {
      setIsLit(false);
      setIsSongPlaying(true);

      // Play happy_birthday.mp3 tune once
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      const audio = new Audio(birthdayTunePath);
      audioRef.current = audio;

      // Automatically relight candles when song finishes
      audio.onended = () => {
        setIsSongPlaying(false);
        setIsLit(true);
      };

      audio.onerror = () => {
        setIsSongPlaying(false);
        setIsLit(true);
      };

      audio.play().catch(() => {
        setIsSongPlaying(false);
        // Fallback: auto relight after 10s if audio fails to play
        setTimeout(() => setIsLit(true), 10000);
      });

      try {
        confetti({
          particleCount: 120,
          spread: 100,
          origin: { y: 0.6 },
          colors: ["#f59e0b", "#fbbf24", "#d97706", "#ec4899", "#f472b6"],
        });

        setTimeout(() => {
          confetti({
            particleCount: 60,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ["#f59e0b", "#ec4899", "#ffffff"],
          });
          confetti({
            particleCount: 60,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ["#f59e0b", "#ec4899", "#ffffff"],
          });
        }, 250);
      } catch {
        // fallback
      }
    }
  };

  return (
    <section className="relative w-full max-w-4xl mx-auto my-14 px-4 text-center">
      <div className="mb-6">
        <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider border border-amber-300 shadow-sm inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Ranjani&apos;s Favorite Butterscotch Cake 🎂
        </span>
        <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 font-outfit">
          Make a Wish & Blow Out The Candles! ✨
        </h3>
        <p className="mt-1 text-sm text-gray-600 font-medium max-w-lg mx-auto">
          {isLit
            ? "Tap the candles or click the button below to blow out the birthday candles!"
            : "Yay! Wish granted! All your dreams will come true today ❤️"}
        </p>
      </div>

      <div className="relative max-w-md mx-auto bg-gradient-to-b from-amber-500/10 via-pink-500/5 to-transparent rounded-3xl p-8 border border-amber-200/50 shadow-xl backdrop-blur-sm">
        <div
          onClick={handleBlowCandles}
          className="cursor-pointer group relative flex flex-col items-center justify-center py-4 transition-transform hover:scale-105"
        >
          <div className="flex justify-center gap-8 mb-[-8px] z-20">
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative flex flex-col items-center">
                {isLit ? (
                  <div className="w-4 h-7 bg-gradient-to-t from-amber-500 via-yellow-300 to-white rounded-full animate-flame shadow-amber-300/80 shadow-lg" />
                ) : (
                  <div className="w-3 h-6 text-gray-400 font-bold text-xs animate-smoke select-none">
                    💨
                  </div>
                )}
                <div className="w-3 h-14 bg-gradient-to-b from-pink-300 via-amber-200 to-pink-400 rounded-t-sm border-x border-pink-400/40 shadow-sm" />
              </div>
            ))}
          </div>

          <div className="w-72 sm:w-80 relative flex flex-col items-center">
            <div className="w-full h-8 bg-amber-100 rounded-t-2xl border-b-4 border-amber-300/60 flex items-center justify-around px-2 shadow-inner">
              <span className="w-4 h-4 rounded-full bg-amber-400 shadow-sm" />
              <span className="w-4 h-4 rounded-full bg-amber-300 shadow-sm" />
              <span className="w-4 h-4 rounded-full bg-amber-500 shadow-sm" />
              <span className="w-4 h-4 rounded-full bg-amber-400 shadow-sm" />
              <span className="w-4 h-4 rounded-full bg-amber-300 shadow-sm" />
            </div>

            <div className="w-[88%] h-16 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 border-x-2 border-amber-700/30 flex items-center justify-center relative overflow-hidden shadow-md">
              <div className="absolute inset-x-0 top-0 h-4 bg-amber-300/40 rounded-b-full" />
              <span className="font-handwriting text-2xl font-bold text-amber-50 drop-shadow-md">
                Happy Birthday Ranjani 🎉
              </span>
            </div>

            <div className="w-[94%] h-4 bg-amber-100 border-x-2 border-amber-300 shadow-inner" />

            <div className="w-full h-24 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 rounded-b-2xl border-x-2 border-b-2 border-amber-800/40 relative flex items-center justify-around px-4 shadow-2xl">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-300/80 animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-200/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
              </div>
              <Heart className="w-8 h-8 text-pink-300/80 fill-pink-300/50 animate-bounce" />
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-300/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-200/80 animate-pulse" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
              </div>
            </div>

            <div className="w-[110%] h-5 bg-gradient-to-r from-gray-200 via-white to-gray-300 rounded-full shadow-2xl border border-gray-300 -mt-1" />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {isLit ? (
            <button
              onClick={handleBlowCandles}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all text-sm flex items-center gap-2 cursor-pointer"
            >
              💨 Make a wish and blow the candles!
            </button>
          ) : (
            <div className="px-6 py-2.5 rounded-full bg-pink-100 text-pink-700 font-semibold text-xs sm:text-sm border border-pink-200 animate-pulse flex items-center gap-2">
              <span>🎵 Playing Happy Birthday Song...</span>
            </div>
          )}
        </div>

        {!isLit ? (
          <p className="mt-5 text-base sm:text-lg font-bold text-rose-700 font-handwriting leading-relaxed px-2 animate-fadeIn">
            ✨ May whatever you wish come true, and may you live the rest of your life just as you dreamed! ❤️
          </p>
        ) : (
          <p className="mt-4 text-xs font-semibold text-amber-800/80 italic font-serif">
            Click the button above to blow out the candles and make your wish ✨
          </p>
        )}
      </div>
    </section>
  );
}
