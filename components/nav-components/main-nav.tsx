"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { CategoryGroup } from "@/config/categories";
import { Button } from "../ui/button";
import { CatDropdownMenu } from "./cat-dropdown-menu";
import { Input } from "../ui/input";
import { Search, LogIn } from "lucide-react";

export const MainNav = () => {
  const pathname = usePathname();
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
              pathname?.startsWith("/dashboard")
                ? "text-forground/50"
                : "text-foreground"
            )}
          >
            Dashboard
          </Link>
          <CatDropdownMenu />
          <Link
            href="/Accounts"
            className={cn(
              "transition-colors hover:text-foreground/50",
              pathname?.startsWith("/accounts")
                ? "text-forground/50"
                : "text-foreground"
            )}
          >
            Account
          </Link>
        </nav>
      </div>
      <div className="flex justify-stretch items-center grow-[1]">
        <div className="flex justify-center grow items-center bg-stone-50 rounded-md shadow-sm px-2 sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
          <Input
            className={cn(
              "mr-2 lg:max-w-sm sm:max-w-xs bg-transparent border-none h-7 focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-0"
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
        <div className="hidden md:flex ml-6 md:justify-center md:items-center">
          <Button
            variant={"ghost"}
            title="Sign In"
            className="bg-transparent hover:rounded-xl"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};
