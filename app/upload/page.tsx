"use client";

import { useState, useRef } from "react";
import { X, Upload, Image, ArrowLeft, Brain, Sparkles, Loader2 } from "lucide-react";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { generatePromptPreview } from "../../lib/utils/generatePromptImage";
import { encryptAndStorePrompt } from "@/lib/utils/encryptAndStorePrompt";
import { uploadBase64ToCloudinary, uploadBase64ToCloudinaryUnsigned } from "@/lib/utils/uploadBase64ToCloudinary";
import { useCreatePrompt } from "@/lib/hooks/useCreatePrompt";

export default function UploadPage() {
  const { ready, authenticated } = usePrivy();
  const router = useRouter();
  const [uploadForm, setUploadForm] = useState({
    title: "",
    description: "",
    price: "",
    thumbnail: null as File | null,
  });
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [showModelModal, setShowModelModal] = useState(false);
  const [showImagePreviewModal, setShowImagePreviewModal] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { createPrompt, hash, } = useCreatePrompt();

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
    // Show the model modal instead of immediate submission
    setShowModelModal(true);
  };

  const handleGenerateImage = async () => {
    if (!uploadForm.thumbnail || !uploadForm.description) {
      setGenerationError("Please provide both a thumbnail image and prompt description");
      return;
    }

    setIsGenerating(true);
    setGenerationError("");
    setShowModelModal(false);

    try {
      const result = await generatePromptPreview(uploadForm.thumbnail, uploadForm.description);
      setGeneratedImage(result.imageBase64);
      setShowImagePreviewModal(true);
    } catch (error) {
      setGenerationError(error instanceof Error ? error.message : "Failed to generate image");
      setShowModelModal(true); // Show modal again with error
    } finally {
      setIsGenerating(false);
    }
  };

  const handleConfirmUpload = async () => {
    // Handle actual form submission here
    console.log("Uploading prompt:", uploadForm);
    console.log("Generated image:", generatedImage);

    const hash = await encryptAndStorePrompt(uploadForm.description);
    console.log("Encrypted and stored prompt with hash:", hash);

    const response = await uploadBase64ToCloudinaryUnsigned(generatedImage);
    console.log("response from cloudinary upload", response);

    const createResponse = await createPrompt({
      title: uploadForm.title,
      description: uploadForm.description,
      model: "gemini-2.5",
      price: BigInt(parseFloat(uploadForm.price) * 1e9), // Convert ETH to wei
      filecoinHash: hash.hash,
      image: response.url
    });

    console.log("createResponse from createPrompt", createResponse, hash);

    // Reset form and redirect back to marketplace
    setUploadForm({ title: "", description: "", price: "", thumbnail: null });
    setThumbnailPreview("");
    setGeneratedImage("");
    setShowImagePreviewModal(false);
    setShowModelModal(false);
    router.push("/marketplace");
  };

  const handleBack = () => {
    router.push("/marketplace");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white">
      {/* Background geometric elements - same as marketplace */}
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

        {/* Diamond/Square shapes */}
        <div className="absolute top-72 right-24 w-10 h-10 border border-white/16 transform rotate-45 bg-white/5"></div>
        <div className="absolute bottom-96 left-60 w-14 h-14 border border-white/12 transform rotate-30 bg-white/3"></div>
        <div className="absolute top-16 left-96 w-6 h-6 border border-white/18 transform rotate-60 bg-white/4"></div>
        <div className="absolute bottom-32 right-96 w-12 h-12 border border-white/14 transform -rotate-15 bg-white/2"></div>

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

        {/* Chat bubble icons */}
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

        {/* Currency symbols */}
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

        {/* Dots - Various sizes */}
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
      <header className="relative border-b border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={handleBack}
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200 mr-4"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
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
                UPLOAD PROMPT
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Upload Form Card */}
          <div className="relative bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-800/95 backdrop-blur-2xl border border-slate-600/50 rounded-2xl shadow-2xl overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

            {/* Form Header */}
            <div className="relative px-8 py-6 border-b border-slate-600/40 bg-gradient-to-r from-slate-800/60 to-gray-800/60">
              <div>
                <h2 className="text-3xl font-bold text-slate-100">
                  Create New Prompt
                </h2>
                <p className="text-slate-300/80 text-lg mt-2">
                  Share your creative prompt with the community and start
                  earning
                </p>
              </div>
            </div>

            {/* Form Body */}
            <div className="relative p-8 space-y-8">
              {/* Title Input */}
              <div className="space-y-3">
                <label className="text-slate-200 font-semibold text-lg">
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
                  className="w-full px-6 py-4 bg-slate-800/60 backdrop-blur-sm border border-slate-600/60 rounded-xl text-slate-100 placeholder-slate-400 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 focus:bg-slate-800/80 transition-all duration-300"
                  required
                />
              </div>

              {/* Description Input */}
              <div className="space-y-3">
                <label className="text-slate-200 font-semibold text-lg">
                  Prompt
                </label>
                <textarea
                  placeholder="Describe your prompt in detail. Include what makes it special, how to use it, and what results to expect..."
                  value={uploadForm.description}
                  onChange={(e) =>
                    setUploadForm((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  rows={6}
                  className="w-full px-6 py-4 bg-slate-800/60 backdrop-blur-sm border border-slate-600/60 rounded-xl text-slate-100 placeholder-slate-400 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 focus:bg-slate-800/80 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Thumbnail Upload */}
              <div className="space-y-3">
                <label className="text-slate-200 font-semibold text-lg">
                  Thumbnail Image
                </label>
                <div className="relative">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png"
                    onChange={handleThumbnailChange}
                    className="hidden"
                  />

                  {thumbnailPreview ? (
                    <div className="relative group">
                      <img
                        src={thumbnailPreview}
                        alt="Thumbnail preview"
                        className="w-full h-64 object-cover rounded-xl border border-slate-600/60"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-6 py-3 bg-slate-700/80 backdrop-blur-sm border border-slate-600/60 rounded-lg text-slate-200 font-medium hover:bg-slate-600/80 hover:border-slate-500/60 transition-all duration-200"
                        >
                          Change Image
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-64 bg-slate-800/40 backdrop-blur-sm border-2 border-dashed border-slate-600/50 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:text-slate-300 hover:bg-slate-800/60 hover:border-slate-500/60 transition-all duration-300 group"
                    >
                      <Image className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-200" />
                      <p className="font-semibold text-xl">
                        Click to upload thumbnail
                      </p>
                      <p className="text-lg text-slate-500 mt-2">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </button>
                  )}
                </div>
              </div>

              {/* Price Input */}
              <div className="space-y-3">
                <label className="text-slate-200 font-semibold text-lg">
                  Price (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 font-bold text-xl">
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
                    className="w-full pl-12 pr-6 py-4 bg-slate-800/60 backdrop-blur-sm border border-slate-600/60 rounded-xl text-slate-100 placeholder-slate-400 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 focus:bg-slate-800/80 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end space-x-6 pt-8">
                <button
                  type="button"
                  onClick={handleSubmitPrompt}
                  className="px-12 py-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-600 hover:to-purple-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center space-x-3 border border-blue-500/30"
                >
                  <Upload className="w-6 h-6" />
                  <span>Upload Prompt</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* AI Model Modal */}
      {showModelModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gradient-to-br from-slate-900/98 via-gray-900/98 to-slate-800/98 backdrop-blur-2xl border border-slate-600/50 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

            {/* Close button */}
            <button
              onClick={() => {
                setShowModelModal(false);
                setGenerationError("");
              }}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-200 z-10"
            >
              <X className="w-5 h-5 text-slate-400 hover:text-white" />
            </button>

            {/* Modal Content */}
            <div className="relative p-8">
              {/* Header with AI icon */}
              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  Current AI Model
                </h3>
                <p className="text-slate-400 text-sm">
                  This prompt will be optimized for the selected model
                </p>
              </div>

              {/* Error Message */}
              {generationError && (
                <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-6">
                  <p className="text-red-300 text-sm">{generationError}</p>
                </div>
              )}

              {/* Model Card */}
              <div className="bg-gradient-to-r from-slate-800/60 to-gray-800/60 border border-slate-600/40 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-100">
                        Gemini 2.5 Flash
                      </h4>
                      <p className="text-slate-400 text-sm">Google's Latest</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Speed:</span>
                    <span className="text-slate-200">Ultra Fast</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Quality:</span>
                    <span className="text-slate-200">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Best for:</span>
                    <span className="text-slate-200">Creative Tasks</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setShowModelModal(false);
                    setGenerationError("");
                  }}
                  className="flex-1 px-6 py-3 text-slate-300 hover:text-slate-100 font-medium transition-colors duration-200 border border-slate-600/40 rounded-lg hover:bg-slate-800/40"
                >
                  Cancel
                </button>
                <button
                  onClick={handleGenerateImage}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Image</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isGenerating && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gradient-to-br from-slate-900/98 via-gray-900/98 to-slate-800/98 backdrop-blur-2xl border border-slate-600/50 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

            {/* Loading Content */}
            <div className="relative p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-2">
                Generating Preview
              </h3>
              <p className="text-slate-400">
                AI is creating your prompt preview image...
              </p>
              <div className="mt-6 bg-slate-800/40 rounded-lg p-4">
                <div className="flex items-center justify-center space-x-2 text-slate-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <p className="text-slate-400 text-sm mt-2">This may take a few seconds...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {showImagePreviewModal && generatedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gradient-to-br from-slate-900/98 via-gray-900/98 to-slate-800/98 backdrop-blur-2xl border border-slate-600/50 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

            {/* Close button */}
            <button
              onClick={() => {
                setShowImagePreviewModal(false);
                setGeneratedImage("");
              }}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-200 z-10"
            >
              <X className="w-5 h-5 text-slate-400 hover:text-white" />
            </button>

            {/* Modal Content */}
            <div className="relative p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  Generated Preview
                </h3>
                <p className="text-slate-400 text-sm">
                  Review your AI-generated prompt preview
                </p>
              </div>

              {/* Generated Image */}
              <div className="relative bg-slate-800/40 rounded-xl p-4 mb-6">
                <img
                  src={`data:image/png;base64,${generatedImage}`}
                  alt="Generated preview"
                  className="w-full max-h-96 object-contain rounded-lg"
                />
              </div>

              {/* Prompt Info */}
              <div className="bg-slate-800/40 rounded-lg p-4 mb-6">
                <h4 className="text-slate-200 font-semibold mb-2">Your Prompt:</h4>
                <p className="text-slate-300 text-sm">{uploadForm.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setShowImagePreviewModal(false);
                    setGeneratedImage("");
                    setShowModelModal(true);
                  }}
                  className="flex-1 px-6 py-3 text-slate-300 hover:text-slate-100 font-medium transition-colors duration-200 border border-slate-600/40 rounded-lg hover:bg-slate-800/40"
                >
                  Regenerate
                </button>
                <button
                  onClick={handleConfirmUpload}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-600/90 to-blue-600/90 hover:from-emerald-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center space-x-2"
                >
                  <Upload className="w-4 h-4" />
                  <span>Confirm Upload</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}