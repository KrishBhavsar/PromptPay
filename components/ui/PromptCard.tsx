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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Hover Overlay */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300">
              <div className="space-y-3 text-center">
                <h3 className="text-white font-bold text-lg tracking-tight">
                  Preview Mode
                </h3>
                <h4 className="text-white/90 font-medium">{title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {description}
                </p>
                {rating && (
                  <div className="flex items-center justify-center gap-1 text-white/90">
                    <span className="text-sm">by @{creator}</span>
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{rating}</span>
                  </div>
                )}
                <div className="flex gap-2 pt-2 justify-center">
                  <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium hover:bg-white/30 transition-all duration-300">
                    Preview
                  </button>
                  <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    Buy & Run
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-white tracking-tight">{title}</h3>
            <div className="flex items-center gap-1 text-white/80 font-medium">
              <span className="text-sm">$</span>
              <span className="text-lg">{price.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-medium text-xs">
              {creatorAvatar}
            </div>
            <span className="text-white/80">{creator}</span>
            {isPrivate && <Lock className="h-3 w-3 text-white/60" />}
          </div>
        </div>
      </div>
    </div>
  );
}
