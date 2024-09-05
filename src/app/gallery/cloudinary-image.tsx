"use client";

import Heart from "@/components/ui/icons/heart";
import { CldImage } from "next-cloudinary";
import React, { useState, useTransition } from "react";
import { setAsFavoriteAction } from "./action";
import { SearchResult } from "./page";
import FullHeart from "@/components/ui/icons/full-heart";

export default function CloudinaryImage(props:any & { imageData: SearchResult }) {
  const [transition, setTransition] = useTransition();

  const { imageData } = props;

  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes("favorite")
  );
  return (
    <div className=" relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          onClick={() => {
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
    </div>
  );
}
