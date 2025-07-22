import React, { useState } from "react";
import Image from "next/image";

/**
 * FacilityDescription
 * 施設の説明文と画像を横並びで表示する部品
 */
interface FacilityDescriptionProps {
  description: string;
  images: string[];
  alt: string;
}

export const FacilityDescription: React.FC<FacilityDescriptionProps> = ({
  description,
  images,
  alt,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="pb-6 px-2 sm:px-4">
        <div className="sm:flex sm:gap-6">
          <div className="sm:flex-1 mb-2 sm:mb-0">
            <p className="text-sm sm:text-base">{description}</p>
          </div>
          <div className="sm:w-[400px] sm:shrink-0">
            <div className="w-full h-[250px] bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm">画像なし</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="pb-6 px-2 sm:px-4">
      <div className="sm:flex sm:gap-6">
        <div className="sm:flex-1 mb-2 sm:mb-0">
          <p className="text-sm sm:text-base">{description}</p>
        </div>
        <div className="sm:w-[400px] sm:shrink-0">
          <div className="relative group">
            <Image
              src={images[currentIndex]}
              alt={`${alt} - ${currentIndex + 1}`}
              width={400}
              height={250}
              className="rounded w-full h-[250px] object-cover"
            />
            {images.length > 1 && (
              <>
                <div
                  onClick={prevImage}
                  className="absolute left-0 top-0 w-1/2 h-full cursor-pointer group/left"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover/left:opacity-100 transition-opacity duration-200" />
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-xl font-bold opacity-0 group-hover/left:opacity-100 transition-opacity duration-200 drop-shadow-lg">
                    ←
                  </div>
                </div>
                <div
                  onClick={nextImage}
                  className="absolute right-0 top-0 w-1/2 h-full cursor-pointer group/right"
                >
                  <div className="absolute inset-0 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover/right:opacity-100 transition-opacity duration-200" />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xl font-bold opacity-0 group-hover/right:opacity-100 transition-opacity duration-200 drop-shadow-lg">
                    →
                  </div>
                </div>
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className="flex justify-center mt-2 gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-blue-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};