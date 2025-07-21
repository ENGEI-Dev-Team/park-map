import React from "react";
import Image from "next/image";

/**
 * FacilityDescription
 * 施設の説明文と画像を横並びで表示する部品
 */
interface FacilityDescriptionProps {
  description: string;
  image: string;
  alt: string;
}

export const FacilityDescription: React.FC<FacilityDescriptionProps> = ({
  description,
  image,
  alt,
}) => (
  <div className="pb-6 px-2 sm:px-4">
    <div className="sm:flex sm:gap-6">
      <div className="sm:flex-1 mb-2 sm:mb-0">
        <p className="text-sm sm:text-base">{description}</p>
      </div>
      <div className="sm:w-[400px] sm:shrink-0">
        <Image
          src={image}
          alt={alt}
          width={400}
          height={250}
          className="rounded"
        />
      </div>
    </div>
  </div>
);
