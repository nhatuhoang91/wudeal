"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
interface AlertDialogProps {
  isOpen: boolean;
  children: ReactNode;
}
export const AlertDialog = ({ isOpen, children }: AlertDialogProps) => {
  return (
    <div
      className={cn(
        "fixed top-0 z-10 left-0 w-screen h-screen flex justify-center items-center bg-background/80",
        isOpen ? "" : "hidden"
      )}
    >
      {children}
    </div>
  );
};

//<div className="flex flex-col p-5">{children}</div>
