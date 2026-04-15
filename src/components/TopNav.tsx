import { Link, useLocation } from 'react-router-dom';
import { Bell, User, Search } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function TopNav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-outline-variant/10 transition-all duration-300">
      <div className="flex justify-between items-center px-8 py-4 w-full max-w-[1440px] mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-extrabold text-primary tracking-tighter font-headline">
            Kidseria AI
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/catalog"
              className={cn(
                "font-manrope text-sm tracking-tight font-bold transition-colors duration-300",
                path === '/catalog'
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              Katalog
            </Link>
            <Link
              to="/photo-studio"
              className={cn(
                "font-manrope text-sm tracking-tight font-bold transition-colors duration-300",
                path === '/photo-studio'
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              Fotoğraf Stüdyosu
            </Link>
            <Link
              to="/video-studio"
              className={cn(
                "font-manrope text-sm tracking-tight font-bold transition-colors duration-300",
                path === '/video-studio' || path === '/'
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              Video Stüdyosu
            </Link>
            <Link
              to="/gallery"
              className={cn(
                "font-manrope text-sm tracking-tight font-bold transition-colors duration-300",
                path === '/gallery'
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              Galeri
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {path === '/catalog' ? (
            <button className="bg-primary text-on-primary px-5 py-2 rounded-xl text-sm font-semibold hover:bg-primary-dim transition-all active:scale-95">
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
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors text-primary">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors text-primary">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
