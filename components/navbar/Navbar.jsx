'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useSession, signIn, signOut } from "next-auth/react"

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/',
        pathname1: '/',
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio',
        pathname1: '/portfolio',
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog',
        pathname1: '/blog',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
        pathname1: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
        pathname1: '/contact',
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard',
        pathname1: '/dashboard',
    },
]

const Navbar = () => {
    const pathname = usePathname();
    const activeNav = "border-b-4 border-[#0F1D3B]";
    const session = useSession();
    return (
        <header className=" px-6 md:px-24 py-6 border-b-2 border-yellow-500">
            <div className="flex justify-between align-items-center">
                <h2 className="flex align-items-center" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"
                }}>
                    <span className="font-black text-[25px] tracking-wider">Gabb<span className="text-yellow-500">y</span></span>
                </h2>
                <div className=" gap-3 items-center hidden md:flex" >
                    <DarkModeToggle />
                    {links.map(link => (
                        <Link className={pathname === link.pathname1 && activeNav} key={link.id} href={link.url} >
                            {link.title}
                        </Link>
                        //08088347692 fridge repairer number
                    ))}
                </div>
                {session.status === "authenticated" && (
                    <button className="" onClick={signOut} >Sign Out</button>
                )}
            </div>
        </header>
    )
}

export default Navbar;