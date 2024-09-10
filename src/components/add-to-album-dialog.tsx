import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { FolderPlus } from "./icons/folder-plus";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import addImageToAlbum from "./action";
import { SearchResult } from "@/app/gallery/page";

export default function AddToAlbumDialog({
  image,
  onClose,
}: {
  image: SearchResult;
  onClose: () => void;
}) {
  const [albumName, setAlbumName] = useState("");
  const [open, setOpen] = useState(false);


  return (
    <Dialog
      open={open}
      onOpenChange={(newOpenState) => {
        setOpen(newOpenState);
        if(!newOpenState) {
          onClose()
        }
      }}
    >
      <DialogTrigger>
        <Button variant="ghost">
          <FolderPlus />
          <span>Add to Album</span>
        </Button>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>
              Add to Album
            </DialogTitle>
            <DialogDescription>
                Type an album you want to move this image into
              </DialogDescription>
          </DialogHeader>
          <div className=" grid gap-4 py-4">
            <div className=" grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Album
              </Label>
              <Input
                id="album-name"
                value={albumName}
                onChange={(e) => setAlbumName(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={async () => {
                onClose();
                setOpen(false);
                await addImageToAlbum(image, albumName);
              }}
              type="submit"
            >
              Add to Album
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogTrigger>
    </Dialog>
  );
}
