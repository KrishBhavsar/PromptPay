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
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="w-44 h-34 absolute top-0 overflow-hidden ml-5">
          <Image
            src="/logo.png"
            alt="logo"
            fill
            style={{ objectFit: "contain" }}
            className="object-contain"
          />
        </div>
        <nav className="hidden md:flex space-x-8 absolute top-10 right-8">
          <a
            href="#marketplace"
            className="text-white/80 hover:text-white transition-colors"
          >
            Marketplace
          </a>
          <a
            href="#creators"
            className="text-white/80 hover:text-white transition-colors"
          >
            For Creators
          </a>
          <a
            href="#buyers"
            className="text-white/80 hover:text-white transition-colors"
          >
            For Buyers
          </a>
        </nav>
      </header>

      {/* Hero Section - Enhanced */}
      <main className="relative z-10 mt-20 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-6">
        {/* Main title with enhanced styling */}
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 mb-4 tracking-tight leading-tight">
            PROMPT PAY
          </h1>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full blur-sm"></div>
        </div>

        {/* Enhanced tagline */}
        <div className="relative mb-12">
          <p className="text-2xl md:text-3xl text-white/95 mb-2 font-medium tracking-wide">
            Unlock Creativity. Monetize Ideas.
          </p>
          <p className="text-lg md:text-xl text-blue-200/80 font-light">
            The Future of Prompt Commerce
          </p>
        </div>

        {/* Enhanced description */}
        <div className="max-w-4xl mb-16">
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
            Transform your AI prompts into profit. Whether you're creating
            stunning images, generating code, or crafting compelling copy - your
            expertise has value. Join the revolution where creativity meets
            commerce.
          </p>

          {/* Enhanced CTA Button */}
          <div className="mb-16">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r rounded-2xl blur opacity-75"></div>
              <AuthButton />
            </div>
          </div>

          {/* Hero cards with equal height and width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group cursor-pointer">
              <div className="relative h-full">
                {/* Card glow effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div> */}

                {/* Main card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transition-all duration-500">
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl blur opacity-20 transition-all duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center transition-transform duration-500 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-200 transition-colors duration-300">
                    Zero Fees
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    Upload and sell without any upfront costs or hidden charges
                  </p>

                  {/* Subtle bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-full">
                {/* Card glow effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div> */}

                {/* Main card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transition-all duration-500">
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur opacity-20 transition-all duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center transition-transform duration-500 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                    Instant Payouts
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    Get paid immediately <br></br> after each sale, no waiting
                    periods
                  </p>

                  {/* Subtle bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-full">
                {/* Card glow effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div> */}

                {/* Main card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transition-all duration-500">
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl blur opacity-20  transition-all duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center  transition-transform duration-500 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-200 transition-colors duration-300">
                    Global Reach
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    Connect with customers worldwide through our platform
                  </p>

                  {/* Subtle bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section - Enhanced with equal card heights */}
      <section id="marketplace" className="relative z-10 py-32 px-6">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 transform rotate-45 bg-white/5"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-white/15 transform -rotate-30">
            <div
              className="w-full h-full bg-transparent border border-white/10"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            ></div>
          </div>
          <div className="absolute bottom-10 left-1/3 w-20 h-20 border border-white/12 transform rotate-60 bg-white/3"></div>
          <div className="absolute bottom-20 right-1/4 w-28 h-28 border border-white/8 transform -rotate-15">
            <div
              className="w-full h-full bg-transparent border border-white/8"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            ></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Where Ideas Meet Innovation
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="group h-80">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 transition-all duration-500 scale-110"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transition-all duration-500  h-full flex flex-col justify-between">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur opacity-20 transition-all duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center transition-transform duration-500 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                      Instant Marketplace
                    </h3>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      Browse high-quality prompts across categories. From
                      creative writing to code generation, find exactly what you
                      need in seconds.
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            <div className="group h-80">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-600/20 rounded-2xl blur-xl opacity-0 transition-all duration-500 scale-110"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transition-all duration-500 h-full flex flex-col justify-between">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur opacity-20 transition-all duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center transition-transform duration-500 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-200 transition-colors duration-300">
                      Earn Instantly
                    </h3>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      Turn your creativity into income. Upload your best prompts
                      and start earning from every purchase. No complicated
                      setup, just pure monetization.
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Creators Section - Enhanced with gradients */}
      <section id="creators" className="relative z-10 py-32 px-6">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-16 right-16 w-40 h-40 border border-white/8 transform rotate-30 bg-white/3"></div>
          <div className="absolute top-40 left-20 w-24 h-24 border border-white/12 transform -rotate-45">
            <div
              className="w-full h-full bg-transparent border border-white/8"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            ></div>
          </div>
          <div className="absolute bottom-20 right-1/3 w-36 h-36 border border-white/6 transform rotate-60 bg-white/2"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-white/10 transform -rotate-30">
            <div
              className="w-full h-full bg-transparent border border-white/8"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            ></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Built for Creators
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Your expertise has value. Whether you're a prompt engineer,
                creative writer, or AI enthusiast, transform your knowledge into
                a sustainable income stream.
              </p>

              <div className="space-y-6">
                <div className="group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-xl blur opacity-0 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6  transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2  transition-colors duration-300">
                            Upload & Earn
                          </h4>
                          <p className="text-white/70 transition-colors duration-300">
                            Simple upload process with instant monetization
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-xl blur opacity-0 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2 transition-colors duration-300">
                            Set Your Price
                          </h4>
                          <p className="text-white/70 transition-colors duration-300">
                            Full control over pricing and licensing terms
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-8 transform rotate-3 transition-transform duration-700 shadow-2xl">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="font-mono text-sm text-green-400">
                      <div className="mb-2">
                        $ prompt upload --category "creative"
                      </div>
                      <div className="mb-2 text-white/60">
                        # Uploading: "Epic Fantasy Story Generator"
                      </div>
                      <div className="text-green-400">
                        ✓ Upload complete! Now earning...
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      $247
                    </div>
                    <div className="text-white/60">
                      Monthly earnings potential
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Buyers Section - Enhanced styling */}
      <section id="buyers" className="relative z-10 py-32 px-6">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 transform rotate-45 bg-white/4"></div>
          <div className="absolute top-32 right-20 w-28 h-28 border border-white/8 transform -rotate-60">
            <div
              className="w-full h-full bg-transparent border border-white/6"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            ></div>
          </div>
          <div className="absolute bottom-32 left-1/3 w-24 h-24 border border-white/12 transform rotate-30 bg-white/3"></div>
          <div className="absolute bottom-16 right-16 w-36 h-36 border border-white/6 transform -rotate-45">
            <div
              className="w-full h-full bg-transparent border border-white/8"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            ></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-pink-600/20 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-8 transform -rotate-3 transition-transform duration-700 shadow-2xl">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-xl blur opacity-50"></div>
                      <div className="relative bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-400/30 backdrop-blur-sm">
                        <div className="text-orange-300 text-sm font-semibold mb-2">
                          IMAGE GENERATION
                        </div>
                        <div className="text-white font-medium">
                          "Create photorealistic portraits with specific
                          lighting..."
                        </div>
                        <div className="text-white/60 text-sm mt-2">
                          ⭐ 4.9 • $15
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Perfect for Buyers
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Skip the trial and error. Get proven prompts that deliver
                consistent results, tested by real users and backed by our
                community.
              </p>

              <div className="space-y-6">
                <div className="group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-xl blur opacity-0 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6  transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2 transition-colors duration-300">
                            Instant Download
                          </h4>
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                            Get your prompts immediately after purchase, no
                            waiting
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-xl blur opacity-0 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2 transition-colors duration-300">
                            Tested & Rated
                          </h4>
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                            Community reviews ensure quality and effectiveness
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-xl blur opacity-0 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2 transition-colors duration-300">
                            All Categories
                          </h4>
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                            From creative writing to technical documentation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with gradients */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-12 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl"></div>
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Ideas into Income?
                </h2>
                <p className="text-xl text-white/80 mb-10 leading-relaxed">
                  Join creators already earning from their expertise. Your next
                  breakthrough prompt could be someone's perfect solution.
                </p>

                <div className="flex items-center justify-center space-x-8 mt-12 text-white/60">
                  <div className="group flex items-center space-x-2 hover:text-white/90 transition-colors duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <svg
                        className="relative w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Instant Setup</span>
                  </div>

                  <div className="group flex items-center space-x-2 hover:text-white/90 transition-colors duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <svg
                        className="relative w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>No Monthly Fees</span>
                  </div>

                  <div className="group flex items-center space-x-2 hover:text-white/90 transition-colors duration-300">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <svg
                        className="relative w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Secure Payments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromptExchange;
