import { MainNav } from "@/components/nav-components/main-nav";
import { MobileNav } from "./mobile-nav";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-ful bg-background/50 backdrop-blur">
      <div className="container flex h-20 items-center">
        <MobileNav />
        <MainNav />
      </div>
    </header>
  );
};
