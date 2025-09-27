"use client";

import { useState, useRef } from "react";
import { Search, ChevronDown, X, Upload, ImageIcon } from "lucide-react";
import { UserPill } from "@privy-io/react-auth/ui";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import PromptCard from "@/components/ui/PromptCard";
import { useRouter } from "next/navigation";

interface PromptCardData {
  id: number;
  title: string;
  price: number;
  creator: string;
  creatorAvatar: string;
  image: string;
  description?: string;
  rating?: number;
  isPrivate?: boolean;
}

const prompts: PromptCardData[] = [
  {
    id: 1,
    title: "Cyberpunk Cityscape",
    price: 25.0,
    creator: "Midjourney",
    creatorAvatar: "MJ",
    image: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg",
    description:
      "A stunning futuristic cityscape with neon lights and towering skyscrapers",
  },
  {
    id: 2,
    title: "Fantasy Landscape",
    price: 25.0,
    creator: "Midjourney",
    creatorAvatar: "MJ",
    image: "https://images.pexels.com/photos/1719669/pexels-photo-1719669.jpeg",
    description: "Epic fantasy mountain landscape with magical elements",
  },
  {
    id: 3,
    title: "Ocean Adventure",
    price: 25.0,
    creator: "Midjourney",
    creatorAvatar: "MJ",
    image: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg",
    description: "Serene ocean scene with mystical atmosphere",
  },
  {
    id: 4,
    title: "Anime Character",
    price: 25.0,
    creator: "Encrypted",
    creatorAvatar: "EN",
    image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
    description: "Beautifully crafted anime character portrait",
  },
  {
    id: 5,
    title: "Nature Vista",
    price: 25.0,
    creator: "Midjourney",
    creatorAvatar: "MJ",
    image: "https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg",
    description: "Breathtaking natural landscape with perfect lighting",
  },
  {
    id: 6,
    title: "Space Explorer",
    price: 25.0,
    creator: "DALL-E",
    creatorAvatar: "DE",
    image: "https://images.pexels.com/photos/2159066/pexels-photo-2159066.jpeg",
    description: "Cosmic adventure scene with detailed character design",
  },
  {
    id: 7,
    title: "Crystal Cave",
    price: 25.0,
    creator: "Midjourney",
    creatorAvatar: "MJ",
    image: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
    description: "Magical underground crystal formation",
    rating: 4.9,
  },
  {
    id: 8,
    title: "Portrait Study",
    price: 25.0,
    creator: "CreatorHandle",
    creatorAvatar: "CH",
    image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
    description: "Professional portrait with artistic flair",
  },
];

export default function Marketplace() {
  const { ready, authenticated } = usePrivy();
  const [activeTab, setActiveTab] = useState("Model");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: "",
    description: "",
    price: "",
    thumbnail: null as File | null,
  });
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const handleUploadClick = () => {
    if (ready && authenticated) {
      router.push("/upload");
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const tabs = ["Model", "Filters", "Price Range", "Sort By", "License"];

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadForm((prev) => ({ ...prev, thumbnail: file }));
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Uploading prompt:", uploadForm);
    // Reset form and close modal
    setUploadForm({ title: "", description: "", price: "", thumbnail: null });
    setThumbnailPreview("");
    setIsUploadModalOpen(false);
  };

  const resetModal = () => {
    setUploadForm({ title: "", description: "", price: "", thumbnail: null });
    setThumbnailPreview("");
    setIsUploadModalOpen(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white">
      <div className="absolute inset-0 overflow-hidden">
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

        <div className="absolute top-96 left-20 w-12 h-12 border border-white/15 transform rotate-45">
          <div
            className="w-full h-full bg-transparent border border-white/10"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          ></div>
        </div>

        <div className="absolute top-72 right-24 w-10 h-10 border border-white/16 transform rotate-45 bg-white/5"></div>
        <div className="absolute bottom-96 left-60 w-14 h-14 border border-white/12 transform rotate-30 bg-white/3"></div>

        <div className="absolute top-16 right-16 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute top-80 right-80 w-1 h-1 bg-white/25 rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-2 h-2 bg-white/20 rounded-full"></div>

        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-slate-500/25 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-gray-700/15 to-transparent rounded-full blur-2xl"></div>
      </div>

      <header className="relative border-b border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full text-white"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                MARKETPLACE
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              {/* Upload Prompt Button - only show if authenticated */}
              {ready && authenticated && (
                <button
                  onClick={() => handleUploadClick()}
                  className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  Upload Prompt
                </button>
              )}

              {/* Privy UserPill Component */}
              <div className="[&>*]:!bg-white/10 [&>*]:!backdrop-blur-sm [&>*]:!border [&>*]:!border-white/30 [&>*]:!rounded-full [&>*]:!text-white [&>*]:hover:!bg-white/20 [&>*]:!transition-all [&>*]:!duration-300">
                <UserPill
                  action={{
                    type: "login",
                    options: {
                      loginMethods: ["email", "wallet", "google"],
                    },
                  }}
                  size={40}
                />
              </div>

              {/* Loading state for when Privy is not ready */}
              {!ready && (
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="text-white/60 text-sm">Loading...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Upload Modal - only show if authenticated */}
      {isUploadModalOpen && ready && authenticated && (
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={resetModal}
          ></div>

          {/* Modal */}
          <div className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-800/95 backdrop-blur-2xl border border-slate-600/50 rounded-2xl shadow-2xl overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

            {/* Modal Header */}
            <div className="relative flex items-center justify-between px-8 py-6 border-b border-slate-600/40 bg-gradient-to-r from-slate-800/60 to-gray-800/60">
              <div>
                <h2 className="text-2xl font-bold text-slate-100">
                  Upload Prompt
                </h2>
                <p className="text-slate-300/80 text-sm mt-1">
                  Share your creative prompt with the community
                </p>
              </div>
              <button
                onClick={resetModal}
                className="p-2 hover:bg-slate-700/50 rounded-full transition-colors duration-200 group"
              >
                <X className="w-6 h-6 text-slate-400 group-hover:text-slate-200" />
              </button>
            </div>

            {/* Modal Body */}
            <form
              onSubmit={handleSubmitPrompt}
              className="relative p-8 space-y-6"
            >
              {/* Title Input */}
              <div className="space-y-2">
                <label className="text-slate-200 font-medium text-sm">
                  Prompt Title
                </label>
                <input
                  type="text"
                  placeholder="Enter a catchy title for your prompt..."
                  value={uploadForm.title}
                  onChange={(e) =>
                    setUploadForm((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-600/60 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 focus:bg-slate-800/80 transition-all duration-300"
                  required
                />
              </div>

              {/* Description Input */}
              <div className="space-y-2">
                <label className="text-slate-200 font-medium text-sm">
                  Description
                </label>
                <textarea
                  placeholder="Describe your prompt in detail..."
                  value={uploadForm.description}
                  onChange={(e) =>
                    setUploadForm((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-600/60 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 focus:bg-slate-800/80 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Thumbnail Upload */}
              <div className="space-y-2">
                <label className="text-slate-200 font-medium text-sm">
                  Thumbnail
                </label>
                <div className="relative">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="hidden"
                  />

                  {thumbnailPreview ? (
                    <div className="relative group">
                      <img
                        src={thumbnailPreview}
                        alt="Thumbnail preview"
                        className="w-full h-48 object-cover rounded-xl border border-slate-600/60"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-4 py-2 bg-slate-700/80 backdrop-blur-sm border border-slate-600/60 rounded-lg text-slate-200 font-medium hover:bg-slate-600/80 hover:border-slate-500/60 transition-all duration-200"
                        >
                          Change Image
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-48 bg-slate-800/40 backdrop-blur-sm border-2 border-dashed border-slate-600/50 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:text-slate-300 hover:bg-slate-800/60 hover:border-slate-500/60 transition-all duration-300 group"
                    >
                      <ImageIcon className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-200" />
                      <p className="font-medium">Click to upload thumbnail</p>
                      <p className="text-sm text-slate-500 mt-1">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </button>
                  )}
                </div>
              </div>

              {/* Price Input */}
              <div className="space-y-2">
                <label className="text-slate-200 font-medium text-sm">
                  Price (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 font-medium">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    value={uploadForm.price}
                    onChange={(e) =>
                      setUploadForm((prev) => ({
                        ...prev,
                        price: e.target.value,
                      }))
                    }
                    className="w-full pl-8 pr-4 py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-600/60 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 focus:bg-slate-800/80 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={resetModal}
                  className="px-6 py-3 text-slate-300 hover:text-slate-100 font-medium transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center space-x-2 border border-blue-500/30"
                >
                  <Upload className="w-5 h-5" />
                  <span>Upload Prompt</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <main className="relative container mx-auto px-6 py-6">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
          <input
            placeholder="Search prompts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/15 transition-all duration-300"
          />
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 mb-8 border-b border-white/20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-1 text-sm font-medium transition-all duration-300 relative ${
                activeTab === tab
                  ? "text-white border-b-2 border-white"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              {tab}
              {tab === "License" && (
                <ChevronDown className="inline-block ml-1 h-3 w-3" />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {prompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              id={prompt.id}
              title={prompt.title}
              price={prompt.price}
              creator={prompt.creator}
              creatorAvatar={prompt.creatorAvatar}
              image={prompt.image}
              description={prompt.description}
              rating={prompt.rating}
              isPrivate={prompt.isPrivate}
            />
          ))}

          {/* Load More Placeholder Cards */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="aspect-square bg-white/5 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-dashed border-white/20 rounded-lg"></div>
              </div>
              <div className="p-4 space-y-2">
                <div className="h-4 bg-white/10 rounded"></div>
                <div className="h-3 bg-white/5 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/20">
            Load More
          </button>
        </div>
      </main>
    </div>
  );
}
