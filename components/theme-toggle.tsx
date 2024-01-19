"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const [isMounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log("aaasdfsafds");
    setMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className={className} onClick={toggleTheme}>
      <Button
        variant="outline"
        title="Dark/Light Mode"
        className="rounded-full w-10 h-10 p-0 bg-transparent"
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};
