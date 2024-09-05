"use client"

import { CldImage, CldUploadWidget} from 'next-cloudinary'
import { useState } from 'react';

export type UploadResult = {
  info: {
    public_id: string;
  }
}
export default function Home() {

  const [imageId , setImageId] = useState("")

  const handleUploadSuccess = (result: any) => {
    console.log(result);
    if(result.event === 'success'){
      console.log(result.info.public_id)
      setImageId(result.info.public_id)
    }
  };
  return (
    <main className=" flex min-h-screen flex-col items-center justify-center ">
      <CldUploadWidget uploadPreset='gallery_app'
        onSuccess={handleUploadSuccess}
        >
          {({ open }) => (
          <button onClick={() => open()}>Upload</button>
        )}
      </CldUploadWidget>

      {imageId && (
        <CldImage 
        width='400'
        height='300'
        src={imageId}
        sizes='100vw'
        alt='My Post'
      />
      )}
    </main>
  );
}
