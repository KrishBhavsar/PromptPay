import React from "react";
import AuthButton from "@/components/AuthButton";
import Image from "next/image";

const PromptExchange = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-black">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagonal shapes - More of them */}
        <div className="absolute top-20 left-20 w-16 h-16 border border-white/20 transform rotate-12">
          <div
            className="w-full h-full bg-transparent border border-white/10"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>
        </div>

        <div className="absolute top-32 right-32 w-12 h-12 border border-white/15 transform -rotate-45">
          <div
            className="w-full h-full bg-transparent border border-white/10"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>
        </div>

        <div className="absolute bottom-40 left-16 w-20 h-20 border border-white/10 transform rotate-30">
          <div
            className="w-full h-full bg-transparent border border-white/10"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>
        </div>

        <div className="absolute bottom-60 right-20 w-14 h-14 border border-white/15 transform -rotate-12">
          <div
            className="w-full h-full bg-transparent border border-white/10"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>
        </div>

        {/* Additional Hexagonal shapes */}
        <div className="absolute top-80 left-80 w-18 h-18 border border-white/12 transform rotate-60">
          <div
            className="w-full h-full bg-transparent border border-white/8"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>
        </div>

        <div className="absolute top-60 right-60 w-10 h-10 border border-white/18 transform rotate-90">
          <div
            className="w-full h-full bg-transparent border border-white/12"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>
        </div>

        <div className="absolute bottom-20 left-40 w-16 h-16 border border-white/14 transform -rotate-30">
          <div
            className="w-full h-full bg-transparent border border-white/10"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>
        </div>

        <div className="absolute top-40 right-80 w-22 h-22 border border-white/8 transform rotate-15">
          <div
            className="w-full h-full bg-transparent border border-white/6"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>
        </div>

        {/* Triangular shapes */}
        <div className="absolute top-96 left-20 w-12 h-12 border border-white/15 transform rotate-45">
          <div
            className="w-full h-full bg-transparent border border-white/10"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          ></div>
        </div>

        <div className="absolute bottom-80 right-16 w-16 h-16 border border-white/12 transform -rotate-60">
          <div
            className="w-full h-full bg-transparent border border-white/8"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          ></div>
        </div>

        <div className="absolute top-20 left-60 w-8 h-8 border border-white/20 transform rotate-30">
          <div
            className="w-full h-full bg-transparent border border-white/15"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          ></div>
        </div>

        {/* Diamond/Square shapes */}
        <div className="absolute top-72 right-24 w-10 h-10 border border-white/16 transform rotate-45 bg-white/5"></div>
        <div className="absolute bottom-96 left-60 w-14 h-14 border border-white/12 transform rotate-30 bg-white/3"></div>
        <div className="absolute top-16 left-96 w-6 h-6 border border-white/18 transform rotate-60 bg-white/4"></div>
        <div className="absolute bottom-32 right-96 w-12 h-12 border border-white/14 transform -rotate-15 bg-white/2"></div>

        {/* Chain/link icons - More of them */}
        <div className="absolute top-48 right-40 w-8 h-8 opacity-30">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full text-white"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
          </svg>
        </div>

        <div className="absolute bottom-72 left-72 w-6 h-6 opacity-25">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full text-white"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
          </svg>
        </div>

        <div className="absolute top-88 right-88 w-10 h-10 opacity-20">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full text-white"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
          </svg>
        </div>

        {/* Chat bubble icons - More of them */}
        <div className="absolute bottom-32 left-32 w-10 h-10 opacity-25">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full text-white"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        <div className="absolute top-40 left-40 w-6 h-6 opacity-20">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full text-white"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        <div className="absolute bottom-20 right-60 w-8 h-8 opacity-15">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full text-white"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        <div className="absolute top-64 right-12 w-7 h-7 opacity-22">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full text-white"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        <div className="absolute bottom-88 left-88 w-9 h-9 opacity-18">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full text-white"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        {/* More Currency symbols */}
        <div className="absolute bottom-80 left-8 w-6 h-6 opacity-25 text-white font-bold text-xl flex items-center justify-center">
          $
        </div>

        <div className="absolute top-60 left-60 w-6 h-6 opacity-20 text-white font-bold text-lg flex items-center justify-center">
          €
        </div>

        <div className="absolute top-24 right-72 w-6 h-6 opacity-18 text-white font-bold text-lg flex items-center justify-center">
          ¥
        </div>

        <div className="absolute bottom-48 right-32 w-6 h-6 opacity-22 text-white font-bold text-lg flex items-center justify-center">
          £
        </div>

        <div className="absolute top-84 left-32 w-6 h-6 opacity-16 text-white font-bold text-lg flex items-center justify-center">
          ₿
        </div>

        {/* More Dots - Various sizes */}
        <div className="absolute top-16 right-16 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute top-80 right-80 w-1 h-1 bg-white/25 rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute top-96 left-80 w-1 h-1 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-60 left-60 w-2 h-2 bg-white/15 rounded-full"></div>

        {/* Additional dots */}
        <div className="absolute top-32 left-72 w-3 h-3 bg-white/18 rounded-full"></div>
        <div className="absolute bottom-84 right-24 w-1 h-1 bg-white/28 rounded-full"></div>
        <div className="absolute top-72 right-56 w-2 h-2 bg-white/22 rounded-full"></div>
        <div className="absolute bottom-24 left-96 w-1 h-1 bg-white/26 rounded-full"></div>
        <div className="absolute top-56 left-24 w-2 h-2 bg-white/19 rounded-full"></div>
        <div className="absolute bottom-72 right-72 w-3 h-3 bg-white/14 rounded-full"></div>
        <div className="absolute top-88 right-32 w-1 h-1 bg-white/24 rounded-full"></div>
        <div className="absolute bottom-16 left-48 w-2 h-2 bg-white/17 rounded-full"></div>

        {/* Lines/Connectors */}
        <div className="absolute top-40 left-16 w-16 h-0.5 bg-white/10 transform rotate-45"></div>
        <div className="absolute bottom-56 right-48 w-12 h-0.5 bg-white/12 transform -rotate-30"></div>
        <div className="absolute top-68 right-20 w-20 h-0.5 bg-white/8 transform rotate-60"></div>
        <div className="absolute bottom-40 left-72 w-14 h-0.5 bg-white/14 transform -rotate-45"></div>

        {/* Large gradient orbs with darker tones */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-slate-500/25 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-gray-700/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-slate-600/18 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-88 h-88 bg-gradient-to-tr from-gray-500/12 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center">
        <div className="flex items-center">
          {/* GitHub-like logo */}
          <div className="w-44 h-44 mr-4 relative overflow-hidden">
  <Image
    src="/logo.png"
    alt="logo"
    fill
    style={{ objectFit: "contain" }}
    className="object-contain"
  />
</div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-6">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
          PROMPT PAY
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed">
          Unlock Creativity. Monetize Ideas. The Prompt Marketplace
        </p>

        <AuthButton />
      </main>
    </div>
  );
};

export default PromptExchange;
