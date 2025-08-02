import React from "react";

import MapImage from "../atoms/MapImage";

const MapSection = () => (
  <div className="text-center">
    <h2 className="text-2xl font-semibold mb-6 text-green-900">公園マップ</h2>
    <div
      id="map"
      className="pt-24 max-w-xl mx-auto hover:opacity-90 transition scroll-mt-40"
    >
      <MapImage
        src="/images/Park-Map.png"
        alt="公園マップ"
        pdfLink="/docs/Park-Map.pdf"
      />
    </div>
  </div>
);

export default MapSection;
