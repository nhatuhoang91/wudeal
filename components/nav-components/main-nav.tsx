"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

import { CategoryGroup } from "@/config/categories";
import { Button } from "../ui/button";
import { CatDropdownMenu } from "./cat-dropdown-menu";
import { Input } from "../ui/input";
import { Search, LogIn } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { PlusSquare } from "lucide-react";
import { useEffect, useState } from "react";

export const MainNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex w-full justify-center">
      <div className="mr-4 hidden md:flex grow-[3] justify-start items-center">
        <Link href="/" className="mr-6">
          <span className="font-bold">wuDeal</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className={cn(
              "transition-colors hover:text-foreground/50",
              pathname === "/"
                ? "bg-active_link text-foreground/80 px-4 py-2 rounded-md"
                : "bg-transparent px-4 py-2 rounded-md"
            )}
          >
            Dashboard
          </Link>
          <CatDropdownMenu />
        </nav>
      </div>
      <div className="flex justify-stretch items-center grow-[1]">
        <div className="flex justify-center grow items-center bg-stone-50 rounded-md shadow-sm px-2 sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px]">
          <Input
            className={cn(
              "mr-2 lg:max-w-sm sm:max-w-xs bg-transparent dark:bg-white dark:text-black border-none h-7 focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-0"
            )}
            type="search"
            placeholder="Search..."
          />
          <Button
            variant={"secondary"}
            className="bg-transparent border-none hover:border-none hover:bg-transparent"
          >
            <Search />
          </Button>
        </div>
        <div className="hidden md:flex md:ml-6 md:justify-center md:items-center ">
          <Button
            variant="outline"
            className="rounded-full w-10 h-10 p-0 bg-transparent"
            title="Add Product"
            onClick={() => {
              router.push("/new-product");
            }}
          >
            <PlusSquare />
          </Button>
          <div className="ml-6">
            <UserButton afterSignOutUrl="/" />
          </div>
          <ThemeToggle className="ml-6" />
        </div>
      </div>
    </div>
  );
};
