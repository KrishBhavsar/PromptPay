import { useState } from "react";
import { Star, Lock } from "lucide-react";

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
}: PromptCardProps) {
  console.log("Image URL:", image);

  // Convert price from wei to a more readable format
  const displayPrice = (price / 1000000).toFixed(2);

  return (
    <div className="group cursor-pointer">
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

            <button className="w-full px-4 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-300">
              Buy & Use
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
