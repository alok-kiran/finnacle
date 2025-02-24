'use client';
import { useMedia } from 'react-use';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname, useRouter } from "next/navigation";
import NavButton from "./nav-button";
import React from 'react';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';

const routes = [
    {
        href: "/",
        label: "Overview",
      },
      {
        href: "/accounts",
        label: "Accounts",
      },
      {
        href: "/transactions",
        label: "Transactions",
      },
      {
        href: "/categories",
        label: "Categories",
      },
]


export default function Navigation() {
    const [isOpen, setOpen] = React.useState(false);
    const router = useRouter();
    const isMobile = useMedia('(max-width: 1024px)', false);

    const onClick = (href: string) => {
        router.push(href);
        setOpen(false);
    };
    

    const pathname = usePathname();

    if(isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={setOpen}>
                <SheetTrigger>
                    <Button 
                        variant={"outline"}
                        size={"sm"}
                        className=' font-normal bg-white/10 hover:bg-white/20 hover:text-white focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition border-none'
                        >
                            <MenuIcon
                                className=' size-4'
                            />

                    </Button>
                </SheetTrigger>
                <SheetContent side={"left"} className='px-2 w-1/2'>
                    <nav className=' flex flex-col gap-y-2 pt-6'>
                        {
                            routes.map((route) => (
                                <Button 
                                    key={route.href}
                                    variant={route.href === pathname ? 'secondary' : 'ghost'}
                                    onClick={() => onClick(route.href)}
                                    className=' w-full justify-start'>
                                    
                                        {route.label}
                                </Button>
                            ))
                        }
                    </nav>
                </SheetContent>
            </Sheet>
        )
    }
    return (
        <nav className='hidden lg:flex items-center gap-x-2 overflow-x-auto'>
            {
                routes.map((route) => (
                    <NavButton
                        key={route.href}
                        label={route.label}
                        href={route.href}
                        isActive={pathname === route.href}
                        />
                ))
            }
        </nav>
    )
}