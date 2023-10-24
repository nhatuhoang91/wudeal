'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export const MainNav = () => {
    const pathname = usePathname()
    return(
        <div className="mr-4 hidden md:flex bg-amber-100">
            <Link href='/' className="mr-6">
                <span className="font-bold">wuDeal</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link href=/>
                </Link>
            </nav>
        </div>
    )
}