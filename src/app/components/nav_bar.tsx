'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar bg-white shadow-sm z-50">
      <div className="nav-container flex justify-between items-center px-6 py-4 relative">
        {/* Logo */}
        <div className="img flex items-center gap-3">
          <Image
            alt="Mini Digital Media Logo"
            width={60}
            height={40}
            className="h-8 w-auto logo-image"
            src="/asset/logo.svg"
            priority
          />
          <h2>Mini Digital Media</h2>
        </div>

        {/* Nav Links */}
        <div className="nav-links flex items-center gap-7 text-sm font-medium text-gray-800">
          <Link
            href="/pages/aboutus"
            className={`hover:text-black transition ${pathname === '/about' ? 'text-black font-semibold active' : ''}`}
          >
            About Us
          </Link>

          <Link
            href="/whatwedo"
            className={`hover:text-black transition ${pathname === '/whatwedo' ? 'text-black font-semibold active' : ''}`}
          >
            What We Do
          </Link>
          <Link href="\pages\contact">contact</Link>

          {/* Colaborators Dropdown */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 text-white hover:text-white">
              <span className={`${pathname.startsWith('/colaborators') ? 'font-semibold active' : ''}`}>
                Colaborators
              </span>
              <ChevronDown className="w-4 h-4 mt-[1px]" />
            </div>

            <ul className="dropdown-menu">
              <li>
                <Link
                  href="/colaborators/partners"
                  className="block py-2 px-4 hover:bg-white hover:text-black transition rounded"
                >
                  Publishers
                </Link>
              </li>
              <li>
                <Link
                  href="/colaborators/team"
                  className="block py-2 px-4 hover:bg-white hover:text-black transition rounded"
                >
                  Advertisers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Dropdown */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 text-white hover:text-white">
              <span className={`${pathname.startsWith('/services') ? 'font-semibold active' : ''}`}>
                Services
              </span>
              <ChevronDown className="w-4 h-4 mt-[1px]" />
            </div>

            <ul className="dropdown-menu">
              <li>
                <Link
                  href="/services/dev"
                  className="block py-2 px-4 hover:bg-white hover:text-black transition rounded"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="block py-2 px-4 hover:bg-white hover:text-black transition rounded"
                >
                  SEO
                </Link>
              </li>
            </ul>
          </div>
       </div>
      </div>
    </nav>
  );
}
