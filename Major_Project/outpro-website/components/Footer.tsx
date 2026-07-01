"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar-box">
      <Link href="/" className="brand-logo">OUTPRO<span className="brand-blue">.INDIA</span></Link>
      <div className="menu-group">
        <Link href="/" className={`menu-link ${pathname === '/' ? 'active-link' : ''}`}>Home</Link>
        <Link href="/about" className={`menu-link ${pathname === '/about' ? 'active-link' : ''}`}>About Us</Link>
      </div>
      <button className="cta-button">Contact Us</button>
    </nav>
  );
}