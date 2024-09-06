
import {Button} from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

import React, { useState } from 'react'
import Menu from './icons/menu'

type Props = {}

export default function ImageMenu({}: Props) {
    
    const [open , setOpen] = useState(false)
  
    return (
    <div className=' top-2 right-2'>
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger>
                <Button variant="ghost">
                    <Menu/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=' w-40'>
                <DropdownMenuItem asChild>
                    <Button
                     className=' cursor-pointer flex justify-start pl-4'
                     asChild
                     variant="ghost"
                    >
                        Edit
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>

                </DropdownMenuItem>
                <DropdownMenuItem>

                </DropdownMenuItem>
                <DropdownMenuItem>

                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    </div>
  )
}