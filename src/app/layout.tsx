import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SideMenu } from "@/components/SideMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devraj Gallery🔎",
  description: "Browse your gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>    
       <div className=" border-b">
          <div className=" flex h-16 items-center px-4">
            <div className="flex justify-center">
              <Image src={'/album.png'} height='60' width='50' alt="logo"/>
              <span className="m-3">Devraj Gallery</span>
            </div>
            <div className=" ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className=" flex">
          <SideMenu />
          <Toaster position="top-center" />
          <div className=" w-full px-4 pt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
