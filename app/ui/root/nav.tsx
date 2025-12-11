'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLinks } from "@/app/lib/definitions";
import clsx from 'clsx';



export default function Nav() {
    const pathname = usePathname();
    const navLinks: NavLinks[] = [
        {
            href: "/dashboard",
            name: "dashboard",

        },

        {
            href: "/about",
            name: "about",

        },
    ]

    return (
        <div className='flex p-3.5 gap-8.5'>
            {
                navLinks.map(link => (
                    <Link key={link.href} href={link.href} className={clsx(
                        pathname === link.href ? "text-blue-400" : "text-white",
                    )}
                    >
                        {link.name}
                    </Link>
                )

                )
            }
        </div>
    )
}
