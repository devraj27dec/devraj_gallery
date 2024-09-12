"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

export default function SearchForm({
  initialSearch,
}: {
  initialSearch: string;
}) {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.replace(`/gallery/?search=${encodeURIComponent(tagName)}`);
    router.refresh();
  };
  useEffect(() => {
    setTagName(initialSearch);
  }, [initialSearch]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-3 items-center">
        <Input
          onChange={(e) => setTagName(e.currentTarget.value)}
          id="tag-name"
          value={tagName}
          className=" w-[400px] border-2 bg-transparent"
          placeholder="Search By Tag"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
