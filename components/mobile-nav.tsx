'use client'

import Link, {LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import {Menu} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'


export const MobileNav = () => {
    const [open, setOpen] = React.useState(false)

    return(
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant='ghost'
                    className='mr-2 px-0 text-base hover:bg-transparent
                        focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0
                        md:hidden'
                >
                    <Menu className='h-5 w-5'/>
                    <span className='sr-only'>Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className='pr-0'>
                <MobileLink href='/'
                    onOpenChange={setOpen}>
                    <span className='font-bold'>wuDeal</span>
                </MobileLink>
            </SheetContent>
        </Sheet>
    )
}

interface MobileLinkProps extends LinkProps{
    onOpenChange? : (open : boolean) => void
    children : React.ReactNode
    className? : string
}

function MobileLink ({
    href,
    onOpenChange,
    className,
    children,
    ...props
} : MobileLinkProps){
    const router = useRouter()
    return (
        <Link
            href={href}
            onClick={()=>{
                router.push(href.toString())
                onOpenChange?.(false)
            }}
            className={cn(className)}
            {...props}>
                {children}
        </Link>
    )
}

