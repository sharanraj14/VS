'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black p-4 text-white">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </nav>
    </header>
  );
}

