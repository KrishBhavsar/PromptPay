// import { useRef, useState } from "react";
// import { Star, Eye, Lock, X, Upload, Zap, ImageIcon, AlertCircle } from "lucide-react";

// interface PromptCardProps {
//   id: number;
//   title: string;
//   price: number;
//   creator: string;
//   creatorAvatar: string;
//   image: string;
//   description?: string;
//   rating?: number;
//   isPrivate?: boolean;
//   onBuyRun?: () => void;
// }

// export default function PromptCard({
//   id,
//   title,
//   price,
//   creator,
//   creatorAvatar,
//   image,
//   description,
//   rating,
//   isPrivate,
//   onBuyRun,
// }: PromptCardProps) {
//   console.log("Image URL:", image);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//   const [uploadedImage, setUploadedImage] = useState<string | null>(null);
//   const [uploadError, setUploadError] = useState<string>("");
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   // Convert price from wei to a more readable format
//   const displayPrice = (price / 1000000).toFixed(2);

//     const handleBuyRunClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setUploadedImage(null);
//     setUploadError("");
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     setUploadError("");
    
//     if (file) {
//       // Check if file is PNG
//       if (file.type !== 'image/png') {
//         setUploadError("Please select a PNG image file only.");
//         return;
//       }
      
//       // Check file size (10MB limit)
//       if (file.size > 10 * 1024 * 1024) {
//         setUploadError("File size must be less than 10MB.");
//         return;
//       }

//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setUploadedImage(e.target?.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleUploadAreaClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleGenerate = () => {
//     if (uploadedImage && onBuyRun) {
//       onBuyRun();
//     }
//     handleCloseModal();
//   };

//   const ImageUploadArea = () => (
//     <div className="space-y-4">
//       <input
//         ref={fileInputRef}
//         type="file"
//         accept=".png"
//         onChange={handleFileChange}
//         className="hidden"
//       />
      
//       {uploadedImage ? (
//         <div className="relative group">
//           <img
//             src={uploadedImage}
//             alt="Uploaded preview"
//             className="w-full h-80 object-contain rounded-xl border border-slate-600/60 bg-slate-800/40 backdrop-blur-sm"
//           />
//           <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl flex items-center justify-center">
//             <button
//               type="button"
//               onClick={handleUploadAreaClick}
//               className="px-6 py-3 bg-slate-700/80 backdrop-blur-sm border border-slate-600/60 rounded-lg text-slate-200 font-medium hover:bg-slate-600/80 hover:border-slate-500/60 transition-all duration-200 flex items-center space-x-2"
//             >
//               <Upload className="w-4 h-4" />
//               <span>Change Image</span>
//             </button>
//           </div>
//         </div>
//       ) : (
//         <button
//           type="button"
//           onClick={handleUploadAreaClick}
//           className="w-full h-80 bg-slate-800/40 backdrop-blur-sm border-2 border-dashed border-slate-600/50 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:text-slate-300 hover:bg-slate-800/60 hover:border-slate-500/60 transition-all duration-300 group"
//         >
//           <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
//             <ImageIcon className="w-10 h-10 text-blue-400" />
//           </div>
//           <p className="font-semibold text-lg mb-2">Upload PNG Image</p>
//           <p className="text-slate-500 text-center max-w-sm">
//             Drop your PNG image here or click to browse. Only PNG format supported, max 10MB.
//           </p>
//         </button>
//       )}
      
//       {uploadError && (
//         <div className="flex items-center space-x-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
//           <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
//           <p className="text-red-400 text-sm">{uploadError}</p>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="group cursor-pointer" key={id}>
//       <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all duration-300">
//         <div className="relative aspect-square overflow-hidden">
//           <img
//             src={image.replace("http://", "https://")}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-300"
//           />
//         </div>

//         <div className="p-4 space-y-4">
//           {/* Title Section */}
//           <div className="space-y-2">
//             <h3 className="font-semibold text-white text-lg leading-tight line-clamp-2 break-words">
//               {title}
//             </h3>
//             {description && (
//               <p className="text-white/70 text-sm line-clamp-2 leading-relaxed">
//                 {description}
//               </p>
//             )}
//           </div>

//           {/* Creator and Rating Section */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2 text-sm">
//               <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-medium text-xs">
//                 {creatorAvatar}
//               </div>
//               <span className="text-white/80">{creator}</span>
//               {isPrivate && <Lock className="h-3 w-3 text-white/60" />}
//             </div>

//             {rating && (
//               <div className="flex items-center gap-1 text-white/90">
//                 <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
//                 <span className="text-sm">{rating}</span>
//               </div>
//             )}
//           </div>

//           {/* Price and Buy Button Section */}
//           <div className="space-y-3">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-1 text-white/80 font-medium">
//                 <span className="text-sm">$</span>
//                 <span className="text-xl font-bold text-white">
//                   {displayPrice}
//                 </span>
//               </div>
//             </div>

//             <button onClick={handleBuyRunClick} className="w-full px-4 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-300">
//               Buy & Use
//             </button>
//           </div>
//         </div>
//       </div>

//        {/* Image Upload Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           {/* Backdrop */}
//           <div
//             className="absolute inset-0 bg-black/90 backdrop-blur-md"
//             onClick={handleCloseModal}
//           ></div>

//           {/* Modal */}
//           <div className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-800/95 backdrop-blur-2xl border border-slate-600/50 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
//             {/* Subtle glow effect */}
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

//             {/* Modal Header */}
//             <div className="relative flex items-center justify-between px-6 py-5 border-b border-slate-600/40 bg-gradient-to-r from-slate-800/60 to-gray-800/60">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
//                   <Zap className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-bold text-slate-100">
//                     {title}
//                   </h2>
//                   <p className="text-slate-300/80 text-sm">
//                     Upload PNG image to generate with this prompt
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={handleCloseModal}
//                 className="p-2 hover:bg-slate-700/50 rounded-full transition-colors duration-200 group"
//               >
//                 <X className="w-5 h-5 text-slate-400 group-hover:text-slate-200" />
//               </button>
//             </div>

//             {/* Modal Body */}
//             <div className="relative p-6">
//               {/* Image Upload Area */}
//               <div className="space-y-4">
//                 <ImageUploadArea />
//               </div>

//               {/* Action Buttons */}
//               <div className="flex items-center justify-end space-x-4 mt-8 pt-6 border-t border-slate-600/30">
//                 <button
//                   onClick={handleCloseModal}
//                   className="px-6 py-3 text-slate-300 hover:text-slate-100 font-medium transition-colors duration-200"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleGenerate}
//                   disabled={!uploadedImage}
//                   className={`px-8 py-3 font-medium rounded-xl transition-all duration-300 flex items-center space-x-2 border ${
//                     uploadedImage
//                       ? "bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-600 hover:to-purple-600 text-white hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 border-blue-500/30"
//                       : "bg-slate-700/50 text-slate-400 border-slate-600/40 cursor-not-allowed"
//                   }`}
//                 >
//                   <Zap className="w-5 h-5" />
//                   <span>Generate</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }






// GENERATE MODAL V1
// import { useRef, useState } from "react";
// import { Star, Eye, Lock, X, Upload, Zap, ImageIcon, AlertCircle, Share2, RotateCcw } from "lucide-react";

// interface PromptCardProps {
//   id: number;
//   title: string;
//   price: number;
//   creator: string;
//   creatorAvatar: string;
//   image: string;
//   description?: string;
//   rating?: number;
//   isPrivate?: boolean;
//   onBuyRun?: () => void;
// }

// export default function PromptCard({
//   id,
//   title,
//   price,
//   creator,
//   creatorAvatar,
//   image,
//   description,
//   rating,
//   isPrivate,
//   onBuyRun,
// }: PromptCardProps) {
//   console.log("Image URL:", image);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [uploadedImage, setUploadedImage] = useState<string | null>(null);
//   const [uploadError, setUploadError] = useState<string>("");
//   const [modalState, setModalState] = useState<'upload' | 'loading' | 'result'>('upload');
//   const [generatedImage, setGeneratedImage] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   // Convert price from wei to a more readable format
//   const displayPrice = (price / 1000000).toFixed(2);

//   const handleBuyRunClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setUploadedImage(null);
//     setUploadError("");
//     setModalState('upload');
//     setGeneratedImage(null);
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     setUploadError("");
    
//     if (file) {
//       // Check if file is PNG
//       if (file.type !== 'image/png') {
//         setUploadError("Please select a PNG image file only.");
//         return;
//       }
      
//       // Check file size (10MB limit)
//       if (file.size > 10 * 1024 * 1024) {
//         setUploadError("File size must be less than 10MB.");
//         return;
//       }

//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setUploadedImage(e.target?.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleUploadAreaClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleGenerate = async () => {
//     if (!uploadedImage) return;
    
//     setModalState('loading');
    
//     // Simulate API call delay
//     setTimeout(() => {
//       // Use a placeholder image for demo (in real app, this would be the API response)
//       setGeneratedImage("https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=800&fit=crop");
//       setModalState('result');
//     }, 3000);
//   };

//   const handleGenerateAnother = () => {
//     setModalState('upload');
//     setUploadedImage(null);
//     setGeneratedImage(null);
//     setUploadError("");
//   };

//   const handleShareImage = () => {
//     // In a real app, this would handle sharing functionality
//     console.log("Sharing image...", generatedImage);
//     // You could implement actual sharing logic here
//   };

//   const UploadContent = () => (
//     <div className="space-y-4">
//       <input
//         ref={fileInputRef}
//         type="file"
//         accept=".png"
//         onChange={handleFileChange}
//         className="hidden"
//       />
      
//       {uploadedImage ? (
//         <div className="relative group">
//           <img
//             src={uploadedImage}
//             alt="Uploaded preview"
//             className="w-full h-80 object-contain rounded-xl border border-slate-600/60 bg-slate-800/40 backdrop-blur-sm"
//           />
//           <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl flex items-center justify-center">
//             <button
//               type="button"
//               onClick={handleUploadAreaClick}
//               className="px-6 py-3 bg-slate-700/80 backdrop-blur-sm border border-slate-600/60 rounded-lg text-slate-200 font-medium hover:bg-slate-600/80 hover:border-slate-500/60 transition-all duration-200 flex items-center space-x-2"
//             >
//               <Upload className="w-4 h-4" />
//               <span>Change Image</span>
//             </button>
//           </div>
//         </div>
//       ) : (
//         <button
//           type="button"
//           onClick={handleUploadAreaClick}
//           className="w-full h-80 bg-slate-800/40 backdrop-blur-sm border-2 border-dashed border-slate-600/50 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:text-slate-300 hover:bg-slate-800/60 hover:border-slate-500/60 transition-all duration-300 group"
//         >
//           <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
//             <ImageIcon className="w-10 h-10 text-blue-400" />
//           </div>
//           <p className="font-semibold text-lg mb-2">Upload PNG Image</p>
//           <p className="text-slate-500 text-center max-w-sm">
//             Drop your PNG image here or click to browse. Only PNG format supported, max 10MB.
//           </p>
//         </button>
//       )}
      
//       {uploadError && (
//         <div className="flex items-center space-x-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
//           <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
//           <p className="text-red-400 text-sm">{uploadError}</p>
//         </div>
//       )}
//     </div>
//   );

//   const LoadingContent = () => (
//     <div className="flex flex-col items-center justify-center h-80 space-y-6">
//       <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
//         <Zap className="w-10 h-10 text-blue-400 animate-pulse" />
//       </div>
//       <div className="text-center">
//         <div className="w-16 h-16 border-4 border-slate-600/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
//         <h3 className="text-xl font-semibold text-slate-100 mb-2">Generating Image</h3>
//         <p className="text-slate-400">Processing your image with AI magic...</p>
//       </div>
//     </div>
//   );

//   const ResultContent = () => (
//     <div className="space-y-4">
//       <div className="relative">
//         <img
//           src={generatedImage!}
//           alt="Generated result"
//           className="w-full h-80 object-contain rounded-xl border border-slate-600/60 bg-slate-800/40 backdrop-blur-sm"
//         />
//         <div className="absolute top-4 left-4 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
//           <span className="text-green-400 text-sm font-medium">✨ Generated</span>
//         </div>
//       </div>
      
//       <div className="p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-600/40 rounded-xl">
//         <h4 className="text-slate-200 font-medium text-sm mb-2">Generation Complete</h4>
//         <p className="text-slate-400 text-xs">
//           Your image has been successfully processed using the "{title}" prompt.
//         </p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="group cursor-pointer" key={id}>
//       <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all duration-300">
//         <div className="relative aspect-square overflow-hidden">
//           <img
//             src={image.replace("http://", "https://")}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-300"
//           />
//         </div>

//         <div className="p-4 space-y-4">
//           {/* Title Section */}
//           <div className="space-y-2">
//             <h3 className="font-semibold text-white text-lg leading-tight line-clamp-2 break-words">
//               {title}
//             </h3>
//             {description && (
//               <p className="text-white/70 text-sm line-clamp-2 leading-relaxed">
//                 {description}
//               </p>
//             )}
//           </div>

//           {/* Creator and Rating Section */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2 text-sm">
//               <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-medium text-xs">
//                 {creatorAvatar}
//               </div>
//               <span className="text-white/80">{creator}</span>
//               {isPrivate && <Lock className="h-3 w-3 text-white/60" />}
//             </div>

//             {rating && (
//               <div className="flex items-center gap-1 text-white/90">
//                 <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
//                 <span className="text-sm">{rating}</span>
//               </div>
//             )}
//           </div>

//           {/* Price and Buy Button Section */}
//           <div className="space-y-3">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-1 text-white/80 font-medium">
//                 <span className="text-sm">$</span>
//                 <span className="text-xl font-bold text-white">
//                   {displayPrice}
//                 </span>
//               </div>
//             </div>

//             <button onClick={handleBuyRunClick} className="w-full px-4 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-300">
//               Buy & Use
//             </button>
//           </div>
//         </div>
//       </div>

//        {/* Multi-State Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           {/* Backdrop */}
//           <div
//             className="absolute inset-0 bg-black/90 backdrop-blur-md"
//             onClick={handleCloseModal}
//           ></div>

//           {/* Modal */}
//           <div className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-800/95 backdrop-blur-2xl border border-slate-600/50 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
//             {/* Subtle glow effect */}
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

//             {/* Dynamic Modal Header */}
//             <div className="relative flex items-center justify-between px-6 py-5 border-b border-slate-600/40 bg-gradient-to-r from-slate-800/60 to-gray-800/60">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
//                   {modalState === 'loading' ? (
//                     <Zap className="w-5 h-5 text-blue-400 animate-pulse" />
//                   ) : modalState === 'result' ? (
//                     <Star className="w-5 h-5 text-yellow-400" />
//                   ) : (
//                     <ImageIcon className="w-5 h-5 text-blue-400" />
//                   )}
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-bold text-slate-100">
//                     {modalState === 'loading' 
//                       ? 'Generating...' 
//                       : modalState === 'result' 
//                         ? 'Generation Complete' 
//                         : title
//                     }
//                   </h2>
//                   <p className="text-slate-300/80 text-sm">
//                     {modalState === 'loading'
//                       ? 'AI is processing your image...'
//                       : modalState === 'result'
//                         ? 'Your generated image is ready!'
//                         : 'Upload PNG image to generate with this prompt'
//                     }
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={handleCloseModal}
//                 className="p-2 hover:bg-slate-700/50 rounded-full transition-colors duration-200 group"
//               >
//                 <X className="w-5 h-5 text-slate-400 group-hover:text-slate-200" />
//               </button>
//             </div>

//             {/* Modal Body */}
//             <div className="relative p-6">
//               {/* Dynamic Content Based on State */}
//               <div className="space-y-4">
//                 {modalState === 'upload' && <UploadContent />}
//                 {modalState === 'loading' && <LoadingContent />}
//                 {modalState === 'result' && <ResultContent />}
//               </div>

//               {/* Dynamic Action Buttons */}
//               <div className="flex items-center justify-end space-x-4 mt-8 pt-6 border-t border-slate-600/30">
//                 {modalState === 'upload' && (
//                   <>
//                     <button
//                       onClick={handleCloseModal}
//                       className="px-6 py-3 text-slate-300 hover:text-slate-100 font-medium transition-colors duration-200"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       onClick={handleGenerate}
//                       disabled={!uploadedImage}
//                       className={`px-8 py-3 font-medium rounded-xl transition-all duration-300 flex items-center space-x-2 border ${
//                         uploadedImage
//                           ? "bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-600 hover:to-purple-600 text-white hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 border-blue-500/30"
//                           : "bg-slate-700/50 text-slate-400 border-slate-600/40 cursor-not-allowed"
//                       }`}
//                     >
//                       <Zap className="w-5 h-5" />
//                       <span>Generate</span>
//                     </button>
//                   </>
//                 )}

//                 {modalState === 'loading' && (
//                   <div className="flex items-center space-x-3">
//                     <div className="flex items-center space-x-2 text-slate-400">
//                       <div className="w-4 h-4 border-2 border-slate-400/30 border-t-slate-400 rounded-full animate-spin"></div>
//                       <span className="text-sm">Processing...</span>
//                     </div>
//                   </div>
//                 )}

//                 {modalState === 'result' && (
//                   <>
//                     <button
//                       onClick={handleCloseModal}
//                       className="px-6 py-3 text-slate-300 hover:text-slate-100 font-medium transition-colors duration-200 border border-slate-600/40 rounded-xl hover:bg-slate-700/30"
//                     >
//                       Close Modal
//                     </button>
//                     <button
//                       onClick={handleShareImage}
//                       className="px-6 py-3 bg-gradient-to-r from-emerald-600/90 to-teal-600/90 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 flex items-center space-x-2 border border-emerald-500/30"
//                     >
//                       <Share2 className="w-4 h-4" />
//                       <span>Share Image</span>
//                     </button>
//                     <button
//                       onClick={handleGenerateAnother}
//                       className="px-6 py-3 bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center space-x-2 border border-blue-500/30"
//                     >
//                       <RotateCcw className="w-4 h-4" />
//                       <span>Generate Another</span>
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }














import { useRef, useState } from "react";
import { Star, Eye, Lock, X, Upload, Zap, ImageIcon, AlertCircle, Share2, RotateCcw } from "lucide-react";

interface PromptCardProps {
  id: number;
  title: string;
  price: number;
  creator: string;
  creatorAvatar: string;
  image: string;
  description?: string;
  rating?: number;
  isPrivate?: boolean;
  onBuyRun?: () => void;
}

export default function PromptCard({
  id,
  title,
  price,
  creator,
  creatorAvatar,
  image,
  description,
  rating,
  isPrivate,
  onBuyRun,
}: PromptCardProps) {
  console.log("Image URL:", image);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string>("");
  const [modalState, setModalState] = useState<'upload' | 'loading' | 'result'>('upload');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Convert price from wei to a more readable format
  const displayPrice = (price / 1000000).toFixed(2);

  const handleBuyRunClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUploadedImage(null);
    setUploadError("");
    setModalState('upload');
    setGeneratedImage(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setUploadError("");
    
    if (file) {
      // Check if file is PNG
      if (file.type !== 'image/png') {
        setUploadError("Please select a PNG image file only.");
        return;
      }
      
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        setUploadError("File size must be less than 10MB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleGenerate = async () => {
    if (!uploadedImage) return;
    
    setModalState('loading');
    
    // Simulate API call delay
    setTimeout(() => {
      // Use a placeholder image for demo (in real app, this would be the API response)
      setGeneratedImage("https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=800&fit=crop");
      setModalState('result');
    }, 3000);
  };

  const handleGenerateAnother = () => {
    setModalState('upload');
    setUploadedImage(null);
    setGeneratedImage(null);
    setUploadError("");
  };

  const handleShareImage = () => {
    // In a real app, this would handle sharing functionality
    console.log("Sharing image...", generatedImage);
    // You could implement actual sharing logic here
  };

  const UploadContent = () => (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        accept=".png"
        onChange={handleFileChange}
        className="hidden"
      />
      
      {uploadedImage ? (
        <div className="relative group">
          <img
            src={uploadedImage}
            alt="Uploaded preview"
            className="w-full h-80 object-contain rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
            <button
              type="button"
              onClick={handleUploadAreaClick}
              className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium hover:bg-white/30 transition-all duration-300 flex items-center space-x-2"
            >
              <Upload className="w-4 h-4" />
              <span>Change Image</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleUploadAreaClick}
          className="w-full h-80 bg-white/5 backdrop-blur-sm border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
        >
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
            <ImageIcon className="w-10 h-10 text-white" />
          </div>
          <p className="font-semibold text-lg mb-2 text-white">Upload PNG Image</p>
          <p className="text-white/70 text-center max-w-sm text-sm">
            Drop your PNG image here or click to browse. Only PNG format supported, max 10MB.
          </p>
        </button>
      )}
      
      {uploadError && (
        <div className="flex items-center space-x-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
          <p className="text-red-400 text-sm">{uploadError}</p>
        </div>
      )}
    </div>
  );

  const LoadingContent = () => (
    <div className="flex flex-col items-center justify-center h-80 space-y-6">
      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
        <Zap className="w-10 h-10 text-white animate-pulse" />
      </div>
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
        <h3 className="text-xl font-semibold text-white mb-2">Generating Image</h3>
        <p className="text-white/70">Processing your image with AI magic...</p>
      </div>
    </div>
  );

  const ResultContent = () => (
    <div className="space-y-4">
      <div className="relative">
        <img
          src={generatedImage!}
          alt="Generated result"
          className="w-full h-80 object-contain rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
          <span className="text-green-400 text-sm font-medium">✨ Generated</span>
        </div>
      </div>
      
      <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
        <h4 className="text-white font-medium text-sm mb-2">Generation Complete</h4>
        <p className="text-white/70 text-xs">
          Your image has been successfully processed using the "{title}" prompt.
        </p>
      </div>
    </div>
  );

  return (
    <div className="group cursor-pointer" key={id}>
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all duration-300">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image.replace("http://", "https://")}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </div>

        <div className="p-4 space-y-4">
          {/* Title Section */}
          <div className="space-y-2">
            <h3 className="font-semibold text-white text-lg leading-tight line-clamp-2 break-words">
              {title}
            </h3>
            {description && (
              <p className="text-white/70 text-sm line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Creator and Rating Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-medium text-xs">
                {creatorAvatar}
              </div>
              <span className="text-white/80">{creator}</span>
              {isPrivate && <Lock className="h-3 w-3 text-white/60" />}
            </div>

            {rating && (
              <div className="flex items-center gap-1 text-white/90">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{rating}</span>
              </div>
            )}
          </div>

          {/* Price and Buy Button Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-white/80 font-medium">
                <span className="text-sm">$</span>
                <span className="text-xl font-bold text-white">
                  {displayPrice}
                </span>
              </div>
            </div>

            <button onClick={handleBuyRunClick} className="w-full px-4 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-300">
              Buy & Use
            </button>
          </div>
        </div>
      </div>

       {/* Multi-State Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>

          {/* Modal */}
          <div className="relative w-full max-w-2xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all duration-300">
            {/* Dynamic Modal Header */}
            <div className="relative flex items-center justify-between px-6 py-4 border-b border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  {modalState === 'loading' ? (
                    <Zap className="w-4 h-4 text-white animate-pulse" />
                  ) : modalState === 'result' ? (
                    <Star className="w-4 h-4 text-white" />
                  ) : (
                    <ImageIcon className="w-4 h-4 text-white" />
                  )}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {modalState === 'loading' 
                      ? 'Generating...' 
                      : modalState === 'result' 
                        ? 'Generation Complete' 
                        : title
                    }
                  </h2>
                  <p className="text-white/70 text-sm">
                    {modalState === 'loading'
                      ? 'AI is processing your image...'
                      : modalState === 'result'
                        ? 'Your generated image is ready!'
                        : 'Upload PNG image to generate with this prompt'
                    }
                  </p>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <X className="w-5 h-5 text-white/80 hover:text-white" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="relative p-6">
              {/* Dynamic Content Based on State */}
              <div className="space-y-4">
                {modalState === 'upload' && <UploadContent />}
                {modalState === 'loading' && <LoadingContent />}
                {modalState === 'result' && <ResultContent />}
              </div>

              {/* Dynamic Action Buttons */}
              <div className="flex items-center justify-end space-x-4 mt-6 pt-6 border-t border-white/20">
                {modalState === 'upload' && (
                  <>
                    <button
                      onClick={handleCloseModal}
                      className="px-6 py-3 text-white/80 hover:text-white font-medium transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleGenerate}
                      disabled={!uploadedImage}
                      className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                        uploadedImage
                          ? "bg-white text-black hover:bg-white/90"
                          : "bg-white/30 text-white/50 cursor-not-allowed"
                      }`}
                    >
                      <Zap className="w-4 h-4" />
                      <span>Generate</span>
                    </button>
                  </>
                )}

                {modalState === 'loading' && (
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 text-white/70">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="text-sm">Processing...</span>
                    </div>
                  </div>
                )}

                {modalState === 'result' && (
                  <>
                    <button
                      onClick={handleCloseModal}
                      className="px-4 py-3 text-white/80 hover:text-white font-medium transition-all duration-300"
                    >
                      Close Modal
                    </button>
                    <button
                      onClick={handleShareImage}
                      className="px-4 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center space-x-2"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Share Image</span>
                    </button>
                    <button
                      onClick={handleGenerateAnother}
                      className="px-4 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center space-x-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Generate Another</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}