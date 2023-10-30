"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { CategoryGroup } from "@/config/categories";
import { Button } from "./ui/button";
import { DropdownMenu } from "./dropdown-menu";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

export const MainNav = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full justify-center">
      <div className="mr-4 hidden md:flex grow justify-start items-center bg-slate-100">
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
          <DropdownMenu />
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
      <div className="flex justify-center grow bg-transparent border-2 border-foreground/10 rounded-md">
        <Input
          className="mr-2 lg:max-w-sm sm:max-w-xs bg-transparent \
          border-none focus:ouline-none"
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
    </div>
  );
};
