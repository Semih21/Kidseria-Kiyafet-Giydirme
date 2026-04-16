'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, User, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';

export function TopNav() {
  const path = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/catalog', label: 'Katalog', active: path === '/catalog' },
    { href: '/photo-studio', label: 'Fotoğraf Stüdyosu', active: path === '/photo-studio' },
    { href: '/video-studio', label: 'Video Stüdyosu', active: path === '/video-studio' || path === '/' },
    { href: '/gallery', label: 'Galeri', active: path === '/gallery' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-outline-variant/10 transition-all duration-300">
      <div className="flex justify-between items-center px-4 sm:px-8 py-2 sm:py-4 w-full max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 sm:gap-8">
          <Link href="/" className="flex items-center">
            <img src="/kidseria-logo-Photoroom.png" alt="Kidseria" className="h-16 sm:h-28 w-auto" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-manrope text-sm tracking-tight font-bold transition-colors duration-300",
                  link.active
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          {path === '/catalog' ? (
            <button className="hidden sm:block bg-primary text-on-primary px-5 py-2 rounded-xl text-sm font-semibold hover:bg-primary-dim transition-all active:scale-95">
              Kıyafet Ekle
            </button>
          ) : path === '/gallery' ? (
            <div className="hidden lg:flex items-center bg-surface-container rounded-full px-4 py-2 border border-outline-variant/15">
              <Search className="w-4 h-4 text-outline mr-2" />
              <input
                type="text"
                placeholder="Görsellerde ara..."
                className="bg-transparent border-none focus:ring-0 text-sm w-48 outline-none"
              />
            </div>
          ) : null}
          <div className="hidden sm:flex gap-2">
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors text-primary">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors text-primary">
              <User className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-surface-container-high transition-colors text-primary"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-outline-variant/10 bg-white/95 backdrop-blur-xl">
          <div className="flex flex-col px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "py-3 px-4 rounded-xl font-bold text-sm transition-all",
                  link.active
                    ? "bg-primary-container/30 text-primary"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-3 border-t border-outline-variant/10 mt-2">
              <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors text-primary">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors text-primary">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
