"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

import { CategoryGroup, categories } from "@/config/categories";

export const CatDropdownMenu = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const [isOpen, setOpen] = useState(false);
  const onClick = () => {
    isOpen ? setOpen(false) : setOpen(true);
  };
  return (
    <div className=" relative overflow-visible">
      <div className="flex item-center">
        {isOpen ? (
          <ChevronUp className="w-5 h-5 p-0 self-center bg-accent rounded-sm" />
        ) : (
          <ChevronDown className="w-5 h-5 p-0 self-center bg-accent rounded-sm" />
        )}
        <Button
          variant="secondary"
          className="ml-0 px-0 bg-transparent hover:bg-transparent \
          transition-colors hover:text-foreground/50 text-foreground"
          onClick={onClick}
        >
          Categories
        </Button>
      </div>
      <div
        className={cn(
          "absolute z-20 -left-6 grid gap-8 mt-1\
          md:w-[600px] lg:w-[800px] grid-cols-[1fr_1fr_1fr_1fr] \
          lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] \
           p-6 shadow-sm border-2  rounded-lg bg-secondary",
          isOpen ? "" : "hidden"
        )}
      >
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center \
            p-4 rounded-lg bg-card"
          >
            <Link href={item.href}>
              <span className="text-foreground">{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
      <div
        className={cn(
          "fixed top-0 z-10 left-0 w-screen h-screen",
          isOpen ? "" : "hidden"
        )}
        onClick={onClick}
      ></div>
    </div>
  );
};
