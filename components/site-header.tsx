import { MainNav } from "@/components/main-nav";
import { MobileNav } from "./mobile-nav";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-ful bg-background/50 backdrop-blur">
      <div className="container flex h-20 items-center bg-orange-100">
        <MobileNav />
        <MainNav />
      </div>
    </header>
  );
};
