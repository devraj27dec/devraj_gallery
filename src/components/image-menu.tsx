
import {Button} from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
  
import React, { useState } from 'react'
import Menu from './icons/menu'
import { SearchResult } from '@/app/gallery/page'
import AddToAlbumDialog from './add-to-album-dialog'
import { Pencil } from 'lucide-react'
import Link from 'next/link'

export default function ImageMenu({image} : {image: SearchResult}) {
    
    const [open , setOpen] = useState(false)
  
    return (
    <div className='absolute top-2 right-2'>
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className=' w-8 h-8 p-0'>
                    <Menu/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=' w-40'>
                <DropdownMenuItem asChild>
                    <AddToAlbumDialog image={image} onClose={() => setOpen(false)}/>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Button 
                     variant='ghost'
                     className=' cursor-pointer flex justify-start pl-4'
                    >
                        <Link href={`/transformation?publicId=${encodeURIComponent(image.public_id)}`}>
                            <Pencil className=' mr-2 w-4 h-4'/>
                            Edit
                        </Link>
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    </div>
  )
}