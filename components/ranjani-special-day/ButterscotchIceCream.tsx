"use client";

import React, { useState } from "react";
import { Sparkles, Heart, Check } from "lucide-react";

interface Topping {
  id: string;
  name: string;
  icon: string;
  color: string;
}

const TOPPINGS: Topping[] = [
  { id: "caramel", name: "Warm Butterscotch Drizzle", icon: "🍯", color: "bg-amber-500" },
  { id: "crunch", name: "Golden Praline Crunch", icon: "✨", color: "bg-amber-400" },
  { id: "sprinkles", name: "Rainbow Heart Sprinkles", icon: "💖", color: "bg-pink-400" },
  { id: "cherry", name: "Fresh Maraschino Cherry", icon: "🍒", color: "bg-red-500" },
];

export default function ButterscotchIceCream() {
  const [activeToppings, setActiveToppings] = useState<string[]>(["caramel", "crunch", "cherry"]);

  const toggleTopping = (id: string) => {
    if (activeToppings.includes(id)) {
      setActiveToppings(activeToppings.filter((t) => t !== id));
    } else {
      setActiveToppings([...activeToppings, id]);
    }
  };

  return (
    <section className="relative w-full max-w-4xl mx-auto my-14 px-4">
      <div className="bg-gradient-to-br from-amber-500/10 via-pink-500/10 to-rose-500/10 rounded-3xl p-8 border border-amber-200/60 shadow-xl backdrop-blur-md">
        <div className="text-center mb-8">
          <span className="px-3.5 py-1 rounded-full bg-pink-100 text-pink-700 font-bold text-xs uppercase tracking-wider border border-pink-200 shadow-sm inline-flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            Ranjani&apos;s Favorite Treat 🍦
          </span>
          <h3 className="mt-2 text-3xl font-extrabold text-gray-900 font-outfit">
            Custom Butterscotch Sundae Bar
          </h3>
          <p className="text-sm text-gray-600 font-medium">
            Customize your birthday butterscotch ice cream sundae with extra toppings!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative flex flex-col items-center justify-center p-6 bg-white/60 rounded-2xl border border-white shadow-inner">
            {activeToppings.includes("cherry") && (
              <div className="text-4xl animate-bounce mb-[-12px] z-30 select-none drop-shadow-md">
                🍒
              </div>
            )}

            <div className="relative w-48 h-48 flex flex-col items-center">
              {activeToppings.includes("caramel") && (
                <div className="absolute top-2 inset-x-4 h-8 bg-amber-500/40 rounded-full blur-sm z-20 pointer-events-none" />
              )}

              {activeToppings.includes("sprinkles") && (
                <div className="absolute top-4 inset-x-2 flex justify-around text-xs z-20 pointer-events-none animate-pulse">
                  <span>💖</span>
                  <span>✨</span>
                  <span>💖</span>
                  <span>✨</span>
                </div>
              )}

              <div className="w-40 h-24 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400 rounded-t-full border-2 border-amber-400/50 shadow-md relative overflow-hidden flex items-center justify-center">
                <span className="text-xs font-bold text-amber-900/40 uppercase tracking-widest font-mono">
                  BUTTERSCOTCH
                </span>
                {activeToppings.includes("crunch") && (
                  <div className="absolute inset-0 bg-amber-600/20 mix-blend-overlay" />
                )}
              </div>

              <div className="w-44 h-20 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 rounded-t-full -mt-6 border-2 border-amber-500/40 shadow-inner relative flex items-center justify-center">
                <span className="text-xs font-bold text-amber-900/30 uppercase tracking-widest font-mono">
                  EXTRA CREAM
                </span>
              </div>

              <div className="w-48 h-20 bg-gradient-to-b from-blue-100/70 via-white/80 to-blue-200/60 rounded-b-3xl border-2 border-white/80 shadow-2xl backdrop-blur-md -mt-4 relative flex items-center justify-center">
                <div className="w-3/4 h-2 bg-pink-300/40 rounded-full" />
              </div>
              <div className="w-8 h-8 bg-white/60 border-x border-gray-200" />
              <div className="w-24 h-4 bg-white/80 rounded-full border border-gray-200 shadow-md" />
            </div>

            <p className="mt-6 text-sm font-bold text-amber-900 font-handwriting text-xl">
              Fresh & Delicious Butterscotch Delight for Ranjani ✨
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" /> Select Sundae Toppings:
            </h4>

            <div className="space-y-3">
              {TOPPINGS.map((topping) => {
                const isActive = activeToppings.includes(topping.id);
                return (
                  <button
                    key={topping.id}
                    onClick={() => toggleTopping(topping.id)}
                    className={`w-full p-4 rounded-xl font-semibold flex items-center justify-between border transition-all duration-300 ${
                      isActive
                        ? "bg-white border-amber-400 shadow-md text-gray-900"
                        : "bg-white/50 border-gray-200 text-gray-500 hover:bg-white/80"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{topping.icon}</span>
                      <span className="text-sm font-medium">{topping.name}</span>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs transition-colors ${
                        isActive ? "bg-amber-500" : "bg-gray-200"
                      }`}
                    >
                      {isActive && <Check className="w-4 h-4" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-amber-100/70 border border-amber-200 text-amber-900 text-xs font-medium leading-relaxed">
              💡 Butterscotch sweetness overload: Loaded with double golden butterscotch scoops, creamy vanilla swirls, and lots of love!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
