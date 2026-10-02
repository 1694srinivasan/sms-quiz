"use client";

import React, { useState } from "react";
import { Sparkles, Star } from "lucide-react";

interface CartoonCharacter {
  id: string;
  name: string;
  role: string;
  bgColor: string;
  borderColor: string;
  speech: string;
  avatarSvg: React.ReactNode;
}

export default function CartoonStickers() {
  const [activeCharacterId, setActiveCharacterId] = useState<string | null>("shinchan");
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/sms-quiz";

  const characters: CartoonCharacter[] = [
    {
      id: "shinchan",
      name: "Shin-chan 👦🏻",
      role: "Action Kamen Fan #1",
      bgColor: "bg-red-50",
      borderColor: "border-red-300",
      speech: "Action Kamen says: Wishing Ranjani the happiest, sweetest birthday ever! Party time! 🚀🎉",
      avatarSvg: (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${basePath}/shinchan.png`}
          alt="Shinchan"
          className="w-16 h-16 object-contain drop-shadow-md"
        />
      ),
    },
    {
      id: "minion",
      name: "Minion Stuart 💛",
      role: "Banana & Cake Expert",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
      speech: "Bello Ranjani! Tulaliloo ti amo! Happy Birthday & Lots of Butterscotch Bananas! 🍌💛",
      avatarSvg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-md">
          {/* Minion Yellow Body */}
          <rect x="25" y="15" width="50" height="70" rx="25" fill="#FBBF24" />
          {/* Goggles Strap */}
          <rect x="20" y="36" width="60" height="10" fill="#374151" />
          {/* Goggle Lens */}
          <circle cx="50" cy="41" r="16" fill="#9CA3AF" />
          <circle cx="50" cy="41" r="12" fill="#FFFFFF" />
          <circle cx="50" cy="41" r="5" fill="#8B5CF6" />
          <circle cx="52" cy="39" r="2" fill="#FFFFFF" />
          {/* Minion Smile */}
          <path d="M40 58 Q50 66 60 58" fill="none" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
          {/* Overalls */}
          <path d="M28 68 L72 68 L72 85 L28 85 Z" fill="#2563EB" />
          <rect x="34" y="58" width="8" height="15" fill="#2563EB" />
          <rect x="58" y="58" width="8" height="15" fill="#2563EB" />
        </svg>
      ),
    },
    {
      id: "hattori",
      name: "Ninja Hattori 🥷",
      role: "Secret Birthday Ninja",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      speech: "Ding Ding! Ninja Secret Technique: Infinite Joy & Happiness for Ranjani! 🥷✨",
      avatarSvg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-md">
          {/* Blue Ninja Hood */}
          <circle cx="50" cy="45" r="32" fill="#2563EB" />
          {/* Face Area */}
          <ellipse cx="50" cy="47" rx="22" ry="16" fill="#FED7AA" />
          {/* Ninja Eyes */}
          <ellipse cx="40" cy="44" rx="4" ry="5" fill="#1E293B" />
          <ellipse cx="60" cy="44" rx="4" ry="5" fill="#1E293B" />
          <circle cx="41" cy="42" r="1.5" fill="#FFFFFF" />
          <circle cx="61" cy="42" r="1.5" fill="#FFFFFF" />
          {/* Swirl Cheeks */}
          <circle cx="34" cy="50" r="4.5" fill="#EF4444" opacity="0.7" />
          <circle cx="66" cy="50" r="4.5" fill="#EF4444" opacity="0.7" />
          {/* Ninja Smile */}
          <path d="M43 54 Q50 59 57 54" fill="none" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Headband Star */}
          <rect x="40" y="16" width="20" height="12" fill="#FBBF24" rx="3" />
          <polygon points="50,18 52,22 56,22 53,25 54,29 50,26 46,29 47,25 44,22 48,22" fill="#1E293B" />
          {/* Ninja Blue Body */}
          <path d="M22 74 Q50 66 78 74 L78 95 L22 95 Z" fill="#1D4ED8" />
          {/* Red Ninja Scarf */}
          <path d="M35 72 L65 72 L60 80 L40 80 Z" fill="#EF4444" />
        </svg>
      ),
    },
    {
      id: "shinko",
      name: "Shinko & Shinzo 💖",
      role: "Little Ninja Companions",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-300",
      speech: "Yay! Shinko sends lots of star power, hugs, and butterscotch cake wishes to Ranjani! 🌟🌸",
      avatarSvg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-md">
          {/* Pink Ninja Hood */}
          <circle cx="50" cy="45" r="32" fill="#EC4899" />
          {/* Face Area */}
          <ellipse cx="50" cy="47" rx="22" ry="16" fill="#FED7AA" />
          {/* Sparkling Cute Eyes */}
          <ellipse cx="40" cy="44" rx="4" ry="5" fill="#831843" />
          <ellipse cx="60" cy="44" rx="4" ry="5" fill="#831843" />
          <circle cx="41" cy="42" r="1.5" fill="#FFFFFF" />
          <circle cx="61" cy="42" r="1.5" fill="#FFFFFF" />
          {/* Cute Pink Cheeks */}
          <circle cx="34" cy="50" r="4.5" fill="#F472B6" opacity="0.8" />
          <circle cx="66" cy="50" r="4.5" fill="#F472B6" opacity="0.8" />
          {/* Cute Smile */}
          <path d="M43 54 Q50 60 57 54" fill="none" stroke="#831843" strokeWidth="2.5" strokeLinecap="round" />
          {/* Gold Headband Star */}
          <rect x="40" y="16" width="20" height="12" fill="#FBBF24" rx="3" />
          <polygon points="50,18 52,22 56,22 53,25 54,29 50,26 46,29 47,25 44,22 48,22" fill="#BE185D" />
          {/* Pink Ninja Outfit */}
          <path d="M22 74 Q50 66 78 74 L78 95 L22 95 Z" fill="#DB2777" />
          <path d="M35 72 L65 72 L60 80 L40 80 Z" fill="#F472B6" />
        </svg>
      ),
    },
  ];

  const activeChar = characters.find((c) => c.id === activeCharacterId) || characters[0];

  return (
    <section className="relative w-full max-w-5xl mx-auto my-14 px-4">
      <div className="text-center mb-8">
        <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider border border-amber-300 shadow-sm inline-flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
          Ranjani&apos;s Cartoon Squad Wishes 🥳
        </span>
        <h3 className="mt-2 text-3xl font-extrabold text-gray-900 font-outfit">
          Tap Shinchan, Minion & Ninja Friends!
        </h3>
        <p className="text-sm text-gray-600 font-medium">
          Click any character below to hear their special funny birthday message!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {characters.map((char) => {
          const isSelected = activeCharacterId === char.id;
          return (
            <div
              key={char.id}
              onClick={() => setActiveCharacterId(char.id)}
              className={`p-4 rounded-2xl cursor-pointer border-2 transition-all duration-300 flex flex-col items-center text-center ${
                char.bgColor
              } ${char.borderColor} ${
                isSelected
                  ? "scale-105 shadow-xl ring-4 ring-pink-400/40"
                  : "opacity-80 hover:opacity-100 hover:scale-102"
              }`}
            >
              <div className="transition-transform duration-300 hover:scale-110 mb-2 flex items-center justify-center h-16 w-16">
                {char.avatarSvg}
              </div>
              <h4 className="font-bold text-gray-900 text-sm font-outfit">
                {char.name}
              </h4>
              <p className="text-[11px] text-gray-500 font-medium">
                {char.role}
              </p>
            </div>
          );
        })}
      </div>

      {activeChar && (
        <div className="glass-card max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 border border-pink-200/80 shadow-2xl relative animate-fadeIn flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-shrink-0 animate-bounce flex items-center justify-center">
            {activeChar.avatarSvg}
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-bold text-pink-700 text-base font-outfit">
                {activeChar.name}
              </span>
              <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
            </div>

            <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed font-handwriting">
              &ldquo;{activeChar.speech}&rdquo;
            </p>

            <div className="text-xs text-pink-500 font-semibold pt-1">
              ✨ Tap other characters above to switch wishes!
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
