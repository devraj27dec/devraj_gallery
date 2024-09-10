

import React from 'react'
import AlbumCard from './album-card'
import cloudinary from '@/utils/cloudinaryConfig';

export type Folder = {
  name: string;
  path: string;
}

export default async function AlbumsPage({folder}: {folder: Folder}) {
  
  const {folders} = (await cloudinary.api.root_folders() as {
    folders : Folder[]
  }) 
  
  return (
    <div className=' flex flex-col gap-8'>
      <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Albums</h1>
        </div>
        <div className=' grid grid-cols-3 gap-4'>
          {folders.map((folder) => (
            <AlbumCard key={folder.path} folder={folder}/>
          ))}
        </div>
    </div>
  )
}