"use client"

import { SearchResult } from '@/app/gallery/page'
import CloudinaryImage from '@/components/cloudinary-image'
import { ImageGrid } from '@/components/image-grid'
import React from 'react'


export default function AlbumGrid({images}: {images: SearchResult[]}) {
  return (
    <ImageGrid 
     images={images}
     getImage={(imageData: SearchResult) => (
      <CloudinaryImage 
        key={imageData.public_id}
        imageData={imageData}
        width='400'
        height='300'
        alt='image'
      />
     )}
    />
  )
}