'use client';

import { usePathname } from 'next/navigation'; // or your router library
import Link from 'next/link'; // or your router library
import Image from "next/image";
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="img">
          <Image
            alt="Mini Digital Media Logo"
            width={60}
            height={40}
            className="h-8 w-auto"
            style={{ color: 'transparent', filter: 'invert(1)' }}
            src="/asset/logo.svg"
            priority
          />
          <h2>Mini Digital Media</h2>
        </div>
        <div className="nav-links">
          <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link href="/whatwedo" className={pathname === '/whatwedo' ? 'active' : ''}>What We Do</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
          
        </div>
      </div>
    </nav>
  );
}