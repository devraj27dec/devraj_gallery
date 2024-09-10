"use client";

import Heart from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import React, { useState, useTransition } from "react";
import { setAsFavoriteAction } from "../app/gallery/action";
import { SearchResult } from "../app/gallery/page";
import FullHeart from "@/components/icons/full-heart";
import ImageMenu from "./image-menu";

export default function CloudinaryImage(
  props: {
    imageData: SearchResult;
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, "src">
  
) {
  const [transition, setTransition] = useTransition();

  const { imageData , onUnheart} = props;

  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes("favorite")
  );

  return (
    <div className=" relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          onClick={() => {
            onUnheart?.(imageData);
            setIsFavorited(false);
            setTransition(() => {
              setAsFavoriteAction(imageData.public_id, false);
            });
          }}
          className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavorited(true);
            setTransition(() => {
              setAsFavoriteAction(imageData.public_id, true);
            });
          }}
          className=" absolute top-2 lef-2 hover:text-red-500 cursor-pointer"
        />
      )}

      <ImageMenu image={imageData}/>
    </div>
  );
}
