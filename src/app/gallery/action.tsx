"use server";
import cloudinary from "@/utils/cloudinaryConfig";

export async function setAsFavoriteAction(
  publicId: string,
  isFavorite: boolean
) {
  if (isFavorite) {
    await cloudinary.uploader.add_tag("favorite" , [publicId]);
  } else {
    await cloudinary.uploader.remove_tag("favorite" , [publicId])
  }
}
