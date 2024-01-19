import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

import { SiteHeader } from "@/components/nav-components/site-header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="font-sans" suppressHydrationWarning>
        <body
          className="max-w-[1800px] m-auto bg-background text-black selection:bg-teal-300 dark:bg-neutral-900 \
      dark:text-white dark:selection:bg-pink-500 dark:selection:text-white"
        >
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className="">
              <SiteHeader />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
