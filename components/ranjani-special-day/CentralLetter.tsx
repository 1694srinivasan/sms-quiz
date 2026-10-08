"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Heart, Edit3, Check, Sparkles, X, MailOpen, Lock } from "lucide-react";

export default function CentralLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [letterContent, setLetterContent] = useState({
    salutation: "My Dearest Ranjani,",
    body: `Happy Birthday to the most beautiful, caring, and radiant woman in my life! ✨

Every single day with you is filled with warmth, laughter, and so much sweetness. You bring endless sunshine into my world and make every ordinary moment feel extraordinary. 

Thank you for being my soulmate, my best friend, and my favorite person to share butterscotch ice cream with! Today is all about celebrating YOU and how deeply loved you are.

I promise to stand by you, make you smile every day, and build our dream life together, hand in hand. Forever & always ❤️`,
    closing: "With all my love & infinite heartbeats,",
    signature: "Yours Always 💕",
  });

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#ec4899", "#f472b6", "#f59e0b", "#fbbf24", "#e11d48"],
        });
      } catch {
        // fallback
      }
    }
  };

  return (
    <section className="relative w-full max-w-3xl mx-auto my-12 px-4 z-10">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 text-pink-700 font-semibold text-sm border border-pink-200 shadow-sm animate-pulse">
          <Sparkles className="w-4 h-4 text-pink-500" />
          A Secret Love Letter For Ranjani
          <Sparkles className="w-4 h-4 text-pink-500" />
        </span>
      </div>

      {!isOpen ? (
        <div
          onClick={handleOpenEnvelope}
          className="group relative cursor-pointer mx-auto w-full max-w-lg bg-gradient-to-br from-amber-100 via-pink-100 to-rose-200 rounded-2xl p-8 shadow-2xl border-2 border-amber-300/60 transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
        >
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-amber-200/80 to-transparent rounded-t-2xl clip-path-envelope pointer-events-none" />

          <div className="relative py-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-600 to-pink-700 text-white flex items-center justify-center shadow-xl border-4 border-amber-200 group-hover:scale-110 transition-transform duration-300 animate-bounce">
              <Heart className="w-10 h-10 fill-white drop-shadow-md" />
            </div>

            <h3 className="mt-6 text-2xl font-extrabold text-gray-800 tracking-wide font-outfit">
              For Ranjani, My Love 💌
            </h3>
            <p className="mt-2 text-sm text-pink-700 font-medium flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" /> Tap the heart seal to open your birthday letter
            </p>
          </div>

          <div className="absolute top-4 right-4 bg-white/80 border border-amber-300 rounded px-2.5 py-1 text-xs font-mono text-amber-800 rotate-6 shadow-sm">
            RANJANI & me ❤️
          </div>
        </div>
      ) : (
        <div className="relative w-full parchment-paper rounded-2xl p-6 sm:p-10 border-2 border-amber-200 shadow-2xl transition-all duration-700 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-amber-200/80 pb-4 mb-6">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
              <MailOpen className="w-5 h-5 text-pink-600" />
              <span>Special Birthday Letter</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors border border-amber-300"
              >
                {isEditing ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" /> Done Editing
                  </>
                ) : (
                  <>
                    <Edit3 className="w-3.5 h-3.5 text-amber-700" /> Edit Message
                  </>
                )}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-amber-700 hover:bg-amber-200/60 transition-colors"
                title="Fold back envelope"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-6 text-gray-800">
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-amber-900 mb-1">Salutation</label>
                  <input
                    type="text"
                    value={letterContent.salutation}
                    onChange={(e) => setLetterContent({ ...letterContent, salutation: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-amber-300 bg-white/90 text-gray-800 focus:ring-2 focus:ring-pink-500 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-900 mb-1">Main Letter Body</label>
                  <textarea
                    rows={8}
                    value={letterContent.body}
                    onChange={(e) => setLetterContent({ ...letterContent, body: e.target.value })}
                    className="w-full p-3 rounded-lg border border-amber-300 bg-white/90 text-gray-800 focus:ring-2 focus:ring-pink-500 leading-relaxed font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-amber-900 mb-1">Closing Phrase</label>
                    <input
                      type="text"
                      value={letterContent.closing}
                      onChange={(e) => setLetterContent({ ...letterContent, closing: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-amber-300 bg-white/90 text-gray-800 focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-amber-900 mb-1">Signature</label>
                    <input
                      type="text"
                      value={letterContent.signature}
                      onChange={(e) => setLetterContent({ ...letterContent, signature: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-amber-300 bg-white/90 text-gray-800 focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="font-handwriting text-gray-900 leading-relaxed">
                <h4 className="text-3xl sm:text-4xl font-bold text-rose-800 mb-4 tracking-wide">
                  {letterContent.salutation}
                </h4>

                <div className="text-xl sm:text-2xl whitespace-pre-line text-gray-800 leading-relaxed font-medium">
                  {letterContent.body}
                </div>

                <div className="mt-8 text-right space-y-1">
                  <p className="text-xl sm:text-2xl text-amber-900 italic font-serif">
                    {letterContent.closing}
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-rose-700">
                    {letterContent.signature}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-4 border-t border-amber-200/80 flex items-center justify-between text-xs text-amber-700 font-serif">
            <span>Sealed with love ❤️</span>
            <span>Happy Birthday Ranjani 🎂</span>
          </div>
        </div>
      )}
    </section>
  );
}
