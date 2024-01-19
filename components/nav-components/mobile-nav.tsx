"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Menu, PlusSquare } from "lucide-react";

import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { categories } from "@/config/categories";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme-toggle";

export const MobileNav = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent
                        focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0
                        md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink href="/" onOpenChange={setOpen}>
          <span className="font-bold">wuDeal</span>
        </MobileLink>
        <div className="flex flex-col justify-center items-start my-2 pl-6">
          <MobileLink
            className="mb-2 hover:text-foreground/50"
            href="/"
            onOpenChange={setOpen}
          >
            <span>Dashboard</span>
          </MobileLink>
        </div>
        <Separator className="mb-2" />
        <div className="flex flex-col">
          <span className="font-bold mb-2">Categories</span>
          <div className="flex flex-col pl-6">
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-start mb-2"
              >
                <Link href={item.href} className="hover:text-foreground/50">
                  <span>{item.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Separator className="mb-2" />
        <div className="flex place-content-evenly items-center pt-10 ">
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
          <UserButton afterSignOutUrl="/" />
          <ThemeToggle className="" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
