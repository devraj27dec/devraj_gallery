"use server";

import { SearchResult } from "@/app/gallery/page";
import cloudinary from "@/utils/cloudinaryConfig";

export default async function addImageToAlbum(
  image: SearchResult,
  album: string
) {
  await cloudinary.api.create_folder(album);

  let parts = image.public_id.split("/");

  if (parts.length > 1) {
    parts = parts.slice(1);
  }

  const publicId = parts.join("/");

  await cloudinary.uploader.rename(image.public_id, `${album}/${publicId}`);
}

export  async function removeAlbum (album:string) {
  
  await cloudinary.api.delete_resources_by_prefix(`${album}/`);
  await cloudinary.api.delete_folder(album)
}