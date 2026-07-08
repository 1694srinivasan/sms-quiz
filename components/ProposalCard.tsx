"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function ProposalCard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isMoved, setIsMoved] = useState(false);
  const [noScale, setNoScale] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const steps = [
    {
      title: "En Chellam ...",
      description: "walked into my life when I needed you the most and suddenly everything became brighter. You are the most beautiful and kind person I ever know. Do you know you have my whole heart?"
    },
    {
      title: "En Pattu kutty...",
      description: "is my favorite person to annoy and my absolute safe place. I will stand between you and the world—I won't let a single thing happen to you. I would lay my life down to do everything in my power just to make you happy. Aren't we supposed to be doing this together by now? Didn't God already write our story?"
    },
    {
      title: "Nee bun butter jam ...",
      description: "Nan Irani Chai we just go together perfectly. You bring the sweetness, and I bring... well, I bring you! You make every single ordinary day feel like an absolute treat. Are you ready to be stuck with me forever?"
    },
    {
      title: "My azhagana ratchasiyae...",
      description: "You rule my world with that beautiful smile and that wonderfully fiery attitude. I am completely, helplessly wrapped around your finger, and I wouldn't trade it for anything. Ready for our biggest step yet?"
    },
    {
      title: "I never knew what my soul was looking for until I found you",
      description: "Loving you is the easiest and most natural thing I have ever done. I want to hold your hand through every high and low, today, tomorrow, and for all the days to come. Will you be my friend, love, partner, wife, everything... for life?"
    }
  ];

  const basePath = "/sms-quiz";

  const noTunes = [
    `${basePath}/tunes/no.mp3`,
    `${basePath}/tunes/no1.mp3`,
    `${basePath}/tunes/no2.mp3`,
    `${basePath}/tunes/no3.mp3`,
    `${basePath}/tunes/no4.mp3`,
    `${basePath}/tunes/no5.mp3`,
    `${basePath}/tunes/no6.mp3`,
    `${basePath}/tunes/no7.mp3`,
    `${basePath}/tunes/no8.mp3`,
    `${basePath}/tunes/no9.mp3`,
  ];

  const moveButton = (playSound = true, shrink = true) => {
    if (playSound) {
      // Stop currently playing audio if any
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.currentTime = 0;
      }

      // Play random audio
      const randomAudio = noTunes[Math.floor(Math.random() * noTunes.length)];
      const audio = new Audio(randomAudio);
      currentAudioRef.current = audio;
      setIsPlaying(true);
      setHasAudio(true);
      audio.onended = () => setIsPlaying(false);
      audio.play().catch((err) => {
        console.log("Audio play failed:", err);
        setIsPlaying(false);
      });
    }

    // Calculate boundaries so the button stays within the viewport (with safety padding)
    const buttonWidth = 100;
    const buttonHeight = 50;
    const padding = 20;

    const maxX = Math.max(padding, window.innerWidth - buttonWidth - padding);
    const maxY = Math.max(padding, window.innerHeight - buttonHeight - padding);

    const newX = padding + Math.random() * (maxX - padding);
    const newY = padding + Math.random() * (maxY - padding);

    setNoPosition({ x: newX, y: newY });
    setIsMoved(true);

    if (shrink) {
      setNoScale((prev) => Math.max(0.2, prev - 0.1));
    }
  };

  const handleNoInteraction = (type: "hover" | "click") => {
    if (currentStep < 4) {
      // First 4 steps: runs away on both hover and click, no sound, no shrinking
      moveButton(false, false);
    } else {
      // Final step: only triggers on click, plays sound and shrinks
      if (type === "click") {
        moveButton(true, true);
      }
    }
  };

  const handleYesClick = () => {
    // Stop currently playing audio if any
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      setIsPlaying(false);
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setIsMoved(false);
      setNoScale(1);
    } else {
      // 5th Yes: Transition to success slide
      setCurrentStep(steps.length);
      setIsMoved(false);
      setNoScale(1);

      // Play yes song
      const audio = new Audio(`${basePath}/tunes/yes.mp3`);
      currentAudioRef.current = audio;
      setIsPlaying(true);
      setHasAudio(true);
      audio.onended = () => setIsPlaying(false);
      audio.play().catch((err) => {
        console.log("Audio play failed:", err);
        setIsPlaying(false);
      });
    }
  };

  const toggleAudio = () => {
    if (currentAudioRef.current) {
      if (isPlaying) {
        currentAudioRef.current.pause();
        setIsPlaying(false);
      } else {
        currentAudioRef.current.play().catch((err) => {
          console.log("Audio resume failed:", err);
        });
        setIsPlaying(true);
      }
    }
  };

  const resetQuiz = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    setCurrentStep(0);
    setIsMoved(false);
    setNoScale(1);
    setIsPlaying(false);
    setHasAudio(false);
  };

  const currentQuestion = currentStep < steps.length ? steps[currentStep] : null;

  return (
    <div className="min-h-screen w-full bg-yellow-300 flex items-center justify-center relative overflow-hidden">
      {/* Floating Hearts Animation */}
      {currentStep === 5 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes floatUp {
              0% {
                transform: translateY(110vh) rotate(0deg);
                opacity: 0;
              }
              10% {
                opacity: 0.8;
              }
              90% {
                opacity: 0.8;
              }
              100% {
                transform: translateY(-20vh) rotate(360deg);
                opacity: 0;
              }
            }
            .floating-heart {
              position: absolute;
              bottom: -50px;
              animation: floatUp linear infinite;
              color: #ff3366;
              user-select: none;
              pointer-events: none;
            }
          ` }} />
          {[...Array(30)].map((_, i) => {
            const left = Math.random() * 100;
            const size = 15 + Math.random() * 25;
            const delay = Math.random() * 8;
            const duration = 6 + Math.random() * 7;
            return (
              <span
                key={i}
                className="floating-heart"
                style={{
                  left: `${left}%`,
                  fontSize: `${size}px`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              >
                ❤️
              </span>
            );
          })}
        </div>
      )}

      {/* Reset Button at Top Center */}
      <button
        onClick={resetQuiz}
        className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white hover:bg-zinc-100 text-black font-bold py-2 px-6 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer z-30 flex items-center gap-2 transition-all duration-200"
      >
        🔄 Reset
      </button>

      {/* Wrapper to bind card and images together */}
      <div className="relative w-full max-w-sm sm:max-w-md mx-4 z-10 flex flex-col gap-4">

        {/* Warning Banner inside the flex wrapper above the card */}
        {currentStep === 4 && (
          <div className="bg-red-500 text-white font-bold py-4 px-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center text-xs sm:text-sm tracking-wide animate-pulse flex flex-col gap-2 z-20">
            <div className="text-sm sm:text-base border-b border-white pb-1">
              ⚠️ Warning: Final Confirmation of the Deal.
            </div>
            <div className="text-[10px] sm:text-xs leading-relaxed font-medium">
              "By accepting this proposal, you agree that the husband provided is non-refundable and comes without a return policy. Lifetime maintenance is required. Do you accept the terms?"
            </div>
            <div className="text-[11px] sm:text-sm mt-1 uppercase">
              [ Deal Accepted. No Take-Backs! ]
            </div>
          </div>
        )}

        {/* Shinchan Top Right */}
        <div className="absolute -top-16 right-2 w-24 h-24 sm:w-32 sm:h-32 md:-top-20 md:-right-50 md:w-56 md:h-56 pointer-events-none z-20">
          <Image
            src={`${basePath}/shinchan.png`}
            alt="Shinchan"
            width={224}
            height={224}
            className="object-contain"
            priority
          />
        </div>

        {/* Ninja Bottom Left */}
        {currentStep < 5 && (
          <div className="absolute -bottom-16 left-2 w-32 h-32 sm:w-36 sm:h-36 md:-bottom-24 md:-left-24 md:w-56 md:h-56 pointer-events-none z-20">
            <Image
              src={`${basePath}/ninja.png`}
              alt="Ninja"
              width={224}
              height={224}
              className="object-contain"
              priority
            />
          </div>
        )}

        {/* The Card Element */}
        {currentStep === 5 ? (
          /* Love Acceptance Final Vow Card */
          <div className="relative bg-white p-6 pb-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black text-center z-10 flex flex-col items-center">
            <div className="text-5xl mb-3 animate-bounce">💖</div>
            <h1 className="text-lg font-bold mb-3 text-black border-b-4 border-black pb-2 w-full uppercase tracking-wider">
              My Vow To You
            </h1>
            <div className="max-h-[45vh] overflow-y-auto px-1 text-left">
              <p className="text-md sm:text-sm leading-relaxed text-gray-800 font-medium font-sans">
                You are the one who finally gave my life purpose. Honestly, I am alive only because of you. September 27, 2024—the day we first met and talked—will forever be etched in my heart. Even though that first time didn't go the way I wanted, I always held onto the hope that I would see you again one day just to explain how I truly felt. Even my friends knew how deeply I loved you. Then came July 20, 2025. I thought that might finally be our day, but again, things didn't go right, and I missed you so terribly during that time apart. Finally, on January 24, 2026, the universe aligned for us to truly get to know each other. I know I have been a complete idiot and a betrayer to you for the things I've done, but through it all, all I ever wanted was a peaceful life with you. I never cared about anything else. I won't make unrealistic promises like saying I will never make you cry, get angry, or feel disappointed. I know I can be stupid, and I'll probably still do stupid things. But I promise you this: I will never, ever cheat on you, and I will never leave your side for anything or anyone. I know the immense sacrifices you have made, and continue to make, just to get us to this stage of marriage. I know I haven't come close to matching them yet, but I love you with everything I have and I live only for you. I make this vow to you today: I will take responsibility, I will lead our family life better, and I will never stop improving myself for you. I am so sorry for everything I have done wrong, and I thank you from the bottom of my soul for everything you have done for us.
                <span className="mt-5 block font-extrabold text-rose-600 text-lg sm:text-base tracking-wide border-t border-dashed border-rose-300 pt-3 text-center">
                  I love you so much, from here to the extent of the universe, My Pondati.
                </span>
              </p>
            </div>

            {/* Success Bottom Progress Loader (100%) */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-zinc-100 border-t-4 border-black rounded-b-[12px] overflow-hidden">
              <div className="h-full bg-blue-500 border-r-4 border-black w-full" />
            </div>
          </div>
        ) : (
          /* Main Card Questions (Steps 1 to 5) */
          <div className="relative bg-white p-8 pb-12 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black text-center z-10 overflow-hidden">
            <h1 className="text-md font-bold mb-4 text-black">{currentQuestion?.title}</h1>
            <p className="text-sm mb-8 text-gray-700">{currentQuestion?.description}</p>

            <div className="flex justify-center gap-4 mb-4">
              <button
                onClick={handleYesClick}
                className="bg-yellow-400 hover:bg-green-500 text-black font-bold py-3 px-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                Yesss!
              </button>

              <button
                onClick={() => handleNoInteraction("click")}
                onMouseEnter={() => handleNoInteraction("hover")}
                style={{
                  transform: `scale(${noScale})`,
                  visibility: isMoved ? "hidden" : "visible"
                }}
                className="bg-red-800 text-white font-bold py-3 px-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 cursor-pointer"
              >
                No
              </button>
            </div>

            {/* Progress bar loader at bottom of card */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-zinc-100 border-t-4 border-black rounded-b-[12px] overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-500 border-r-4 border-black"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Moved No Button at Viewport Level to avoid parent cropping/offset issues */}
      {
        isMoved && currentStep < steps.length && (
          <button
            onClick={() => handleNoInteraction("click")}
            onMouseEnter={() => handleNoInteraction("hover")}
            style={{
              position: "absolute",
              left: noPosition.x,
              top: noPosition.y,
              transform: `scale(${noScale})`,
              zIndex: 50
            }}
            className="bg-red-800 text-white font-bold py-3 px-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 cursor-pointer"
          >
            No
          </button>
        )
      }

      {/* Ninja Bottom Center on Success */}
      {
        currentStep === 5 && (
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-32 pointer-events-none z-20 animate-bounce">
            <Image
              src={`${basePath}/ninja.png`}
              alt="Ninja"
              width={224}
              height={224}
              className="object-contain"
              priority
            />
          </div>
        )
      }

      {/* Play/Pause Button at Bottom Center */}
      {
        hasAudio && (
          <button
            onClick={toggleAudio}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white hover:bg-zinc-100 text-black font-bold py-2 px-6 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer z-30 flex items-center gap-2 transition-all duration-200"
          >
            {isPlaying ? "⏸️ Pause Music" : "▶️ Play Music"}
          </button>
        )
      }
    </div >
  );
}
