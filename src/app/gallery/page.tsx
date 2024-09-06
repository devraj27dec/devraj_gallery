import React from "react";
import UploadButton from "./UploadButton";
import GalleryGrid from "./gallery-grid";

import cloudinary from '@/utils/cloudinaryConfig'


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
        
        <GalleryGrid images={results.resources}/>

      </div>
    </section>
  )
}
