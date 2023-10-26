'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import path from "path"
export const MainNav = () => {
    const pathname = usePathname()
    return(
        <div className="mr-4 hidden md:flex">
            <Link href='/' className="mr-6">
                <span className="font-bold">wuDeal</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link href='/' className={cn("transition-colors hover:text-foreground/80",
                pathname?.startsWith('/dashboard') ? 'text-forground' : 'text-foreground/60')}>
                    Dashboard
                </Link>
                <Link href='/Accounts' className={cn("transition-colors hover:text-foreground/80",
                pathname?.startsWith('/accounts') ? 'text-forground' : 'text-foreground/60')}>
                    Account
                </Link>
            </nav>
        </div>
    )
}