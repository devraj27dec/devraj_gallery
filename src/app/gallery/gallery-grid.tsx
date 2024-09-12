"use client";

import { ImageGrid } from "@/components/image-grid";
import React from "react";
import { SearchResult } from "./page";
import CloudinaryImage from "../../components/cloudinary-image";


export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(ImageData: SearchResult) => (
        <CloudinaryImage
          key={ImageData.public_id}
          imagedata={ImageData}
          width="400"
          height="300"
          alt="an image of something"
        />
      )}
    />
  );
}







