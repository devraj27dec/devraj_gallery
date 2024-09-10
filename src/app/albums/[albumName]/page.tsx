

import { SearchResult } from '@/app/gallery/page';
import { ForceRefresh } from '@/components/force-refresh'
import cloudinary from '@/utils/cloudinaryConfig';
import React from 'react'
import AlbumGrid from './album-grid';


export default async function GalleryPage(
    {params : {albumName} ,}: {
        params: {
            albumName: string
        }
    }
) {
  
    const results = (await cloudinary.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by('created_at','desc')
    .with_field("tags")
    .max_results(20)
    .execute()) as { resources: SearchResult[]};
        
    console.log("results" , results);
  
  return (
    <section>
        <ForceRefresh/>
        <div className=' flex flex-col gap-8'>
            <div className=' flex justify-between'>
                <h1 className=' text-4xl font-bold'>Album {albumName}</h1>
            </div>
            <AlbumGrid images={results.resources}/>
        </div>
    </section>
  )
}