import React from "react";

import VideoBackground from "../atoms/VideoBackground";
import TitleText from "../atoms/TitleText";
import SubTitleText from "../atoms/SubTitleText";

const HeroVisual = () => (
  <section className="relative w-full h-[70vh] md:h-[100vh] overflow-hidden">
    <VideoBackground />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">
      <TitleText text="浜町公園へようこそ" />
      <SubTitleText text="自然と歴史が交差する憩いの場" />
    </div>
  </section>
);
export default HeroVisual;
