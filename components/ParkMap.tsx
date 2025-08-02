"use client";

import Image from "next/image";
import React from "react";

const ParkMap = () => {
  return (
    <section className="py-10 bg-[#fdfcf7] text-center">
      <h2 className="text-2xl font-semibold mb-6">公園マップ</h2>
      <a href="/pdfs/park-map.pdf" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/park-map.png"
          alt="公園マップ"
          width={800} // 実際の画像の幅に合わせて調整
          height={600} // 実際の画像の高さに合わせて調整
          layout="responsive" // または fill も可（下記参照）
          objectFit="cover"
          className="rounded-lg"
        />
      </a>
    </section>
  );
};

export default ParkMap;
