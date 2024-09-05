/* eslint-disable @next/next/no-async-client-component */


import React from "react";
import UploadButton from "./UploadButton";
import GalleryGrid from "./gallery-grid";

import cloudinary from '@/utils/cloudinaryConfig'
import CloudinaryImage from "./cloudinary-image";


export type SearchResult = {
  public_id: string;
  tags: string[]
}

export default async function GalleryPage() {

  const results = (await cloudinary.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(20)
  .execute()) as { resources: SearchResult[]};
  
  console.log("results" , results);

  
  return(
    <section>
      <div className=" flex flex-col gap-8">
        <div className=" flex justify-between">
          <h1 className=" text-4xl font-bold">Gallery</h1> 
         <UploadButton />
        </div>
        <div className=" grid grid-cols-4 gap-4">
        {results.resources.map((result) => (
          <CloudinaryImage 
            key={result.public_id}
            src={result.public_id}
            publicId={result.public_id}
            imageData={result}
            width="400"
            height="300"
            alt="an image of something"
          />
        ))}
        </div>
        <GalleryGrid />
      </div>
    </section>
  )
}
