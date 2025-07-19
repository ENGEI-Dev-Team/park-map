'use client';

import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen max-h-[100vh]">
      <video
        autoPlay
        muted
        loop
        
        className="w-full h-full object-cover"
        src="/videos/Park-Intro.mp4" // 圧縮版動画
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">浜町公園へようこそ</h1>
        <p className="text-xl mt-2">自然と歴史が交差する憩いの場</p>
      </div>
    </section>
  )
}

export default HeroSection