import React from 'react'
import cloudinary from '@/utils/cloudinaryConfig'
import CloudinaryImage from '../gallery/cloudinary-image';
import { ForceRefresh } from '@/components/force-refresh';

export type SearchResult = {
  public_id: string;
  tags: string[]
}


export default async function FavoritesPage() {
  
  const results = (await cloudinary.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at','desc')
    .with_field("tags")
    .max_results(20)
    .execute()) as { resources: SearchResult[]};

  return (
    <section>
      <ForceRefresh />

      <div className=' flex flex-col gap-8'>
      <div className=' flex justify-between'>
        <h1 className=' text-4xl font-bold'>Favorite Images</h1>
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

    </div>
    </section>
  )
}