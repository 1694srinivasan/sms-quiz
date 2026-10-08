"use client";

import React, { useState } from "react";
import { Camera, X } from "lucide-react";

interface PhotoCard {
  id: string;
  url: string;
  caption: string;
  date: string;
  rotateDeg: number;
}

const DEFAULT_PHOTOS: PhotoCard[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
    caption: "Our Sweet Laughs & Forever Hugs ❤️",
    date: "Memory #1",
    rotateDeg: -3,
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
    caption: "Romantic Candlelight Dinners ✨",
    date: "Memory #2",
    rotateDeg: 4,
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    caption: "Hand in Hand, Wherever We Go 🌅",
    date: "Memory #3",
    rotateDeg: -2,
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=800&q=80",
    caption: "My Favorite Smile in the Universe 🌸",
    date: "Memory #4",
    rotateDeg: 3,
  },
];

export default function PhotoPolaroids() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoCard | null>(null);

  return (
    <section className="relative w-full max-w-6xl mx-auto my-14 px-4 select-none">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-extrabold text-gray-900 font-outfit inline-flex items-center gap-2.5">
          <Camera className="w-6 h-6 text-pink-500" />
          <span>Instant Photo Cards & Memories</span>
        </h3>
        <p className="text-sm text-gray-600 font-medium mt-1">
          Reminders of our favorite journeys together — Tap any polaroid to zoom!
        </p>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-4 pb-8">
        {DEFAULT_PHOTOS.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="polaroid-card group relative bg-white p-4 pb-6 rounded shadow-lg cursor-pointer transform transition-transform select-none"
            style={{
              transform: `rotate(${photo.rotateDeg}deg)`,
            }}
          >
            {/* Washi Tape Accent */}
            <div className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 z-10 rounded-sm" />

            {/* Photo Image Box with Anti-Download Shield Overlay */}
            <div className="relative aspect-square w-full overflow-hidden rounded bg-gray-100 mb-3 border border-gray-100">
              {/* Invisible Overlay Shield */}
              <div
                className="absolute inset-0 z-20 bg-transparent"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
            </div>

            {/* Polaroid Caption */}
            <div className="text-center font-handwriting">
              <p className="text-lg text-gray-800 font-semibold leading-tight line-clamp-2">
                {photo.caption}
              </p>
              <span className="text-xs text-pink-500 font-sans font-medium mt-1 block">
                {photo.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative bg-white p-6 pb-8 rounded-lg max-w-lg w-full shadow-2xl transform transition-transform animate-scaleUp select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-3 -right-3 bg-rose-500 text-white p-2 rounded-full shadow-lg hover:bg-rose-600 transition-colors z-30"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 z-10 rounded-sm" />

            <div className="relative aspect-square w-full rounded overflow-hidden mb-4 bg-gray-100 border border-gray-200">
              {/* Invisible Overlay Shield */}
              <div
                className="absolute inset-0 z-20 bg-transparent"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="w-full h-full object-cover pointer-events-none select-none"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>

            <div className="text-center font-handwriting space-y-1">
              <h4 className="text-2xl text-gray-900 font-bold">
                {selectedPhoto.caption}
              </h4>
              <p className="text-sm font-sans text-pink-600 font-medium">
                Forever In My Heart 💕 • {selectedPhoto.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
