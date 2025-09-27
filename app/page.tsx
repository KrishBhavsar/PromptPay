// import React from "react";
// import AuthButton from "@/components/AuthButton";
// import Image from "next/image";

// const PromptExchange = () => {
//   return (
//     <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-black">
//       {/* Background geometric elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Hexagonal shapes - More of them */}
//         <div className="absolute top-20 left-20 w-16 h-16 border border-white/20 transform rotate-12">
//           <div
//             className="w-full h-full bg-transparent border border-white/10"
//             style={{
//               clipPath:
//                 "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//             }}
//           ></div>
//         </div>

//         <div className="absolute top-32 right-32 w-12 h-12 border border-white/15 transform -rotate-45">
//           <div
//             className="w-full h-full bg-transparent border border-white/10"
//             style={{
//               clipPath:
//                 "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//             }}
//           ></div>
//         </div>

//         <div className="absolute bottom-40 left-16 w-20 h-20 border border-white/10 transform rotate-30">
//           <div
//             className="w-full h-full bg-transparent border border-white/10"
//             style={{
//               clipPath:
//                 "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//             }}
//           ></div>
//         </div>

//         <div className="absolute bottom-60 right-20 w-14 h-14 border border-white/15 transform -rotate-12">
//           <div
//             className="w-full h-full bg-transparent border border-white/10"
//             style={{
//               clipPath:
//                 "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//             }}
//           ></div>
//         </div>

//         {/* Additional Hexagonal shapes */}
//         <div className="absolute top-80 left-80 w-18 h-18 border border-white/12 transform rotate-60">
//           <div
//             className="w-full h-full bg-transparent border border-white/8"
//             style={{
//               clipPath:
//                 "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//             }}
//           ></div>
//         </div>

//         <div className="absolute top-60 right-60 w-10 h-10 border border-white/18 transform rotate-90">
//           <div
//             className="w-full h-full bg-transparent border border-white/12"
//             style={{
//               clipPath:
//                 "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//             }}
//           ></div>
//         </div>

//         <div className="absolute bottom-20 left-40 w-16 h-16 border border-white/14 transform -rotate-30">
//           <div
//             className="w-full h-full bg-transparent border border-white/10"
//             style={{
//               clipPath:
//                 "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//             }}
//           ></div>
//         </div>

//         <div className="absolute top-40 right-80 w-22 h-22 border border-white/8 transform rotate-15">
//           <div
//             className="w-full h-full bg-transparent border border-white/6"
//             style={{
//               clipPath:
//                 "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//             }}
//           ></div>
//         </div>

//         {/* Triangular shapes */}
//         <div className="absolute top-96 left-20 w-12 h-12 border border-white/15 transform rotate-45">
//           <div
//             className="w-full h-full bg-transparent border border-white/10"
//             style={{
//               clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
//             }}
//           ></div>
//         </div>

//         <div className="absolute bottom-80 right-16 w-16 h-16 border border-white/12 transform -rotate-60">
//           <div
//             className="w-full h-full bg-transparent border border-white/8"
//             style={{
//               clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
//             }}
//           ></div>
//         </div>

//         <div className="absolute top-20 left-60 w-8 h-8 border border-white/20 transform rotate-30">
//           <div
//             className="w-full h-full bg-transparent border border-white/15"
//             style={{
//               clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
//             }}
//           ></div>
//         </div>

//         {/* Diamond/Square shapes */}
//         <div className="absolute top-72 right-24 w-10 h-10 border border-white/16 transform rotate-45 bg-white/5"></div>
//         <div className="absolute bottom-96 left-60 w-14 h-14 border border-white/12 transform rotate-30 bg-white/3"></div>
//         <div className="absolute top-16 left-96 w-6 h-6 border border-white/18 transform rotate-60 bg-white/4"></div>
//         <div className="absolute bottom-32 right-96 w-12 h-12 border border-white/14 transform -rotate-15 bg-white/2"></div>

//         {/* Chain/link icons - More of them */}
//         <div className="absolute top-48 right-40 w-8 h-8 opacity-30">
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             className="w-full h-full text-white"
//           >
//             <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
//             <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
//           </svg>
//         </div>

//         <div className="absolute bottom-72 left-72 w-6 h-6 opacity-25">
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             className="w-full h-full text-white"
//           >
//             <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
//             <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
//           </svg>
//         </div>

//         <div className="absolute top-88 right-88 w-10 h-10 opacity-20">
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             className="w-full h-full text-white"
//           >
//             <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
//             <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
//           </svg>
//         </div>

//         {/* Chat bubble icons - More of them */}
//         <div className="absolute bottom-32 left-32 w-10 h-10 opacity-25">
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             className="w-full h-full text-white"
//           >
//             <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//           </svg>
//         </div>

//         <div className="absolute top-40 left-40 w-6 h-6 opacity-20">
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             className="w-full h-full text-white"
//           >
//             <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//           </svg>
//         </div>

//         <div className="absolute bottom-20 right-60 w-8 h-8 opacity-15">
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             className="w-full h-full text-white"
//           >
//             <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//           </svg>
//         </div>

//         <div className="absolute top-64 right-12 w-7 h-7 opacity-22">
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             className="w-full h-full text-white"
//           >
//             <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//           </svg>
//         </div>

//         <div className="absolute bottom-88 left-88 w-9 h-9 opacity-18">
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             className="w-full h-full text-white"
//           >
//             <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//           </svg>
//         </div>

//         {/* More Currency symbols */}
//         <div className="absolute bottom-80 left-8 w-6 h-6 opacity-25 text-white font-bold text-xl flex items-center justify-center">
//           $
//         </div>

//         <div className="absolute top-60 left-60 w-6 h-6 opacity-20 text-white font-bold text-lg flex items-center justify-center">
//           €
//         </div>

//         <div className="absolute top-24 right-72 w-6 h-6 opacity-18 text-white font-bold text-lg flex items-center justify-center">
//           ¥
//         </div>

//         <div className="absolute bottom-48 right-32 w-6 h-6 opacity-22 text-white font-bold text-lg flex items-center justify-center">
//           £
//         </div>

//         <div className="absolute top-84 left-32 w-6 h-6 opacity-16 text-white font-bold text-lg flex items-center justify-center">
//           ₿
//         </div>

//         {/* More Dots - Various sizes */}
//         <div className="absolute top-16 right-16 w-2 h-2 bg-white/30 rounded-full"></div>
//         <div className="absolute top-80 right-80 w-1 h-1 bg-white/25 rounded-full"></div>
//         <div className="absolute bottom-40 right-40 w-2 h-2 bg-white/20 rounded-full"></div>
//         <div className="absolute top-96 left-80 w-1 h-1 bg-white/30 rounded-full"></div>
//         <div className="absolute bottom-60 left-60 w-2 h-2 bg-white/15 rounded-full"></div>

//         {/* Additional dots */}
//         <div className="absolute top-32 left-72 w-3 h-3 bg-white/18 rounded-full"></div>
//         <div className="absolute bottom-84 right-24 w-1 h-1 bg-white/28 rounded-full"></div>
//         <div className="absolute top-72 right-56 w-2 h-2 bg-white/22 rounded-full"></div>
//         <div className="absolute bottom-24 left-96 w-1 h-1 bg-white/26 rounded-full"></div>
//         <div className="absolute top-56 left-24 w-2 h-2 bg-white/19 rounded-full"></div>
//         <div className="absolute bottom-72 right-72 w-3 h-3 bg-white/14 rounded-full"></div>
//         <div className="absolute top-88 right-32 w-1 h-1 bg-white/24 rounded-full"></div>
//         <div className="absolute bottom-16 left-48 w-2 h-2 bg-white/17 rounded-full"></div>

//         {/* Lines/Connectors */}
//         <div className="absolute top-40 left-16 w-16 h-0.5 bg-white/10 transform rotate-45"></div>
//         <div className="absolute bottom-56 right-48 w-12 h-0.5 bg-white/12 transform -rotate-30"></div>
//         <div className="absolute top-68 right-20 w-20 h-0.5 bg-white/8 transform rotate-60"></div>
//         <div className="absolute bottom-40 left-72 w-14 h-0.5 bg-white/14 transform -rotate-45"></div>

//         {/* Large gradient orbs with darker tones */}
//         <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-600/20 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-slate-500/25 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-gray-700/15 to-transparent rounded-full blur-2xl"></div>
//         <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-slate-600/18 to-transparent rounded-full blur-2xl"></div>
//         <div className="absolute bottom-1/4 left-1/4 w-88 h-88 bg-gradient-to-tr from-gray-500/12 to-transparent rounded-full blur-3xl"></div>
//       </div>

//       {/* Header */}
//       <header className="relative z-10 flex justify-between items-center">
//         <div className="flex items-center">
//           {/* GitHub-like logo */}
//           <div className="w-44 h-44 mr-4 relative overflow-hidden">
//   <Image
//     src="/logo.png"
//     alt="logo"
//     fill
//     style={{ objectFit: "contain" }}
//     className="object-contain"
//   />
// </div>
//         </div>
//       </header>

//       {/* Main content */}
//       <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-6">
//         <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
//           PROMPT PAY
//         </h1>

//         <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed">
//           Unlock Creativity. Monetize Ideas. The Prompt Marketplace
//         </p>

//         <AuthButton />
//       </main>
//     </div>
//   );
// };

// export default PromptExchange;


























"use client";

import Link from "next/link";
import React from "react";
import { Wallet, Upload, Download, Zap, Shield, Globe, Star, ArrowRight, CircleCheck as CheckCircle, TrendingUp, Users, DollarSign, MessageSquare, Sparkles } from "lucide-react";

const PromptPay = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-800 to-orange-400">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagonal shapes */}
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

        {/* Chain/link icons */}
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

        {/* Chat bubble icons */}
        <div className="absolute bottom-32 left-32 w-10 h-10 opacity-25">
          <MessageSquare className="w-full h-full text-white" />
        </div>

        <div className="absolute top-40 left-40 w-6 h-6 opacity-20">
          <MessageSquare className="w-full h-full text-white" />
        </div>

        <div className="absolute bottom-20 right-60 w-8 h-8 opacity-15">
          <MessageSquare className="w-full h-full text-white" />
        </div>

        {/* Currency symbols */}
        <div className="absolute bottom-80 left-8 w-6 h-6 opacity-25 text-white font-bold text-xl flex items-center justify-center">
          ₿
        </div>

        <div className="absolute top-60 left-60 w-6 h-6 opacity-20 text-white font-bold text-lg flex items-center justify-center">
          Ξ
        </div>

        {/* Dots */}
        <div className="absolute top-16 right-16 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute top-80 right-80 w-1 h-1 bg-white/25 rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute top-96 left-80 w-1 h-1 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-60 left-60 w-2 h-2 bg-white/15 rounded-full"></div>

        {/* Large gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-400/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center">
          <div className="w-10 h-10 mr-4">
            {/* <Sparkles className="w-full h-full text-white" /> */}
            <img src={'/logo.png'} alt="logo" className="w-full h-full" />
          </div>
          <span className="text-white text-xl font-bold">PromptPay</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-white/80 hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-white/80 hover:text-white transition-colors">How it Works</Link>
          <Link href="#marketplace" className="text-white/80 hover:text-white transition-colors">Marketplace</Link>
          <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/20 transition-all duration-300">
            Connect Wallet
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-6">
        <div className="mb-6 flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <Shield className="w-4 h-4 text-white" />
          <span className="text-white/90 text-sm">Powered by Web3 & Blockchain</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
          PROMPT<span className="text-orange-300">PAY</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed">
          The World's First Web3 Prompt Marketplace. Buy, Sell & Use AI Prompts with Cryptocurrency
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link href="/marketplace">
            <button className="px-8 py-4 bg-white text-purple-900 rounded-full text-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 flex items-center">
              Explore Marketplace
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white text-lg font-medium hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 flex items-center">
            <Upload className="mr-2 w-5 h-5" />
            Upload Prompt
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-white/70">Active Prompts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">12K+</div>
            <div className="text-white/70">Creators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">$2M+</div>
            <div className="text-white/70">Volume Traded</div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Web3 Payments",
      description: "Secure transactions using cryptocurrency with smart contracts"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Blockchain Security",
      description: "Immutable ownership records and transparent transactions"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Marketplace",
      description: "Access prompts from creators worldwide, 24/7"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Results",
      description: "Use purchased prompts immediately with integrated AI tools"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Creator Royalties",
      description: "Earn ongoing revenue from your prompt creations"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Rate, review and discover the best prompts from the community"
    }
  ];

  return (
    <section id="features" className="relative z-10 py-24 px-6 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose PromptPay?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the future of AI prompt trading with blockchain technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-orange-300 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: <Wallet className="w-12 h-12" />,
      title: "Connect Wallet",
      description: "Link your Web3 wallet to start buying and selling prompts securely"
    },
    {
      step: "02",
      icon: <Download className="w-12 h-12" />,
      title: "Browse & Buy",
      description: "Discover high-quality prompts from our curated marketplace"
    },
    {
      step: "03",
      icon: <Zap className="w-12 h-12" />,
      title: "Generate Results",
      description: "Use your purchased prompts with integrated AI tools instantly"
    },
    {
      step: "04",
      icon: <Upload className="w-12 h-12" />,
      title: "Upload & Earn",
      description: "Create and sell your own prompts to earn cryptocurrency"
    }
  ];

  return (
    <section id="how-it-works" className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How PromptPay Works
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Simple steps to start your AI prompt trading journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{step.icon}</div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-purple-900 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Marketplace Preview Section
const MarketplacePreview = () => {
  const prompts = [
    {
      title: "Professional Logo Design",
      category: "Design",
      price: "0.05 ETH",
      rating: 4.9,
      sales: 234,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Creative Writing Assistant",
      category: "Writing",
      price: "0.03 ETH",
      rating: 4.8,
      sales: 189,
      image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Social Media Content",
      category: "Marketing",
      price: "0.02 ETH",
      rating: 4.7,
      sales: 156,
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Code Documentation",
      category: "Development",
      price: "0.04 ETH",
      rating: 4.9,
      sales: 98,
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="marketplace" className="relative z-10 py-24 px-6 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Prompts
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover top-rated prompts from our community of creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {prompts.map((prompt, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-orange-400/20 flex items-center justify-center">
                <img 
                  src={prompt.image} 
                  alt={prompt.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-300 text-sm font-medium">{prompt.category}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white/70 text-sm ml-1">{prompt.rating}</span>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-3">{prompt.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">{prompt.price}</span>
                  <span className="text-white/50 text-sm">{prompt.sales} sales</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/marketplace">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-orange-400 text-white rounded-full text-lg font-medium hover:from-purple-600 hover:to-orange-500 transition-all duration-300 shadow-2xl hover:scale-105">
              View All Prompts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "AI Artist",
      content: "PromptPay revolutionized how I monetize my creative prompts. The Web3 integration makes payments seamless and secure.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Marcus Rodriguez",
      role: "Content Creator",
      content: "The quality of prompts here is exceptional. I've saved hours of work and improved my content significantly.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Emily Watson",
      role: "Marketing Manager",
      content: "Our team uses PromptPay daily for campaign ideas. The ROI has been incredible, and the blockchain security gives us peace of mind.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of creators and businesses already using PromptPay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 italic">"{testimonial.content}"</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              {/* <Sparkles className="w-8 h-8 text-white mr-3" /> */}
              <img src={'/logo.png'} alt="logo" className="w-full h-full" />
              <span className="text-white text-2xl font-bold">PromptPay</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              The world's first Web3 prompt marketplace. Buy, sell, and use AI prompts with cryptocurrency in a secure, decentralized environment.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">𝕏</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">DC</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">TG</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="/marketplace" className="text-white/70 hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link href="/upload" className="text-white/70 hover:text-white transition-colors">Upload Prompts</Link></li>
              <li><Link href="/dashboard" className="text-white/70 hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="/analytics" className="text-white/70 hover:text-white transition-colors">Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-white/70 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/docs" className="text-white/70 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/status" className="text-white/70 hover:text-white transition-colors">System Status</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 PromptPay. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-white/60 hover:text-white text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main component combining all sections
export default function Home() {
  return (
    <>
      <PromptPay />
      <FeaturesSection />
      <HowItWorksSection />
      <MarketplacePreview />
      <TestimonialsSection />
      <Footer />
    </>
  );
}