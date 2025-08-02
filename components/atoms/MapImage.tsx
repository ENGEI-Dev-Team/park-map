import React from "react";

import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  pdfLink: string;
};

const MapImage = ({ src, alt, pdfLink }: Props) => (
  <a
    href={pdfLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="PDFで公園マップを見る"
    className="inline-block transition hover:opacity-90"
  >
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      className="mx-auto rounded-lg shadow-md"
    />
  </a>
);

export default MapImage;
