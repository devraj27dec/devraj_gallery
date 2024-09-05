"use client";

import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import React from "react";
import { UploadResult } from "../page";
import UploadButton from "./UploadButton";
import GalleryGrid from "./gallery-grid";

export default function GalleryPage() {
  return (
    <section>
      <div className=" flex flex-col gap-8">
        <div className=" flex justify-between">
          <h1 className=" text-4xl font-bold">Gallery</h1>
         
         <UploadButton />
        </div>
        <GalleryGrid />
      </div>
    </section>
  );
}
