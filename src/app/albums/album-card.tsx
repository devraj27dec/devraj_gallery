import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Folder } from "./page";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AlbumCard({folder}:{folder: Folder}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>All your {folder.name}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className=" flex justify-between">
        <Button asChild variant={"outline"}>
          <Link  href={`/albums/${folder.path}`}>View Album</Link>
        </Button>
        <Button>
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
}
