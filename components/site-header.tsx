import { MainNav } from "@/components/main-nav"

export const SiteHeader = () => {
    return (
        <header className="sticky top-0 z-50 w-ful bg-background/50 backdrop-blur">
            <div className="container flex h-14 items-center bg-purple-100"> 
                <MainNav/>
            </div>
        </header>
    )
}