import { Link, useLocation } from 'react-router-dom';
import { Camera, Video, Baby, Mountain, Plus, HelpCircle, LogOut } from 'lucide-react';
import { cn } from './TopNav';

export function Sidebar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <aside className="h-[calc(100vh-5rem)] w-72 sticky top-20 flex flex-col bg-surface-container-low border-r border-outline-variant/15">
      <div className="p-8">
        <h2 className="font-inter text-xs uppercase tracking-widest text-primary font-bold">
          Stüdyo Araçları
        </h2>
        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
          AI Yapılandırması
        </p>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        <Link
          to="/photo-studio"
          className={cn(
            "flex items-center gap-3 py-4 px-6 rounded-r-full transition-all scale-95 active:scale-90",
            path === '/photo-studio'
              ? "bg-surface-container-lowest text-primary font-bold shadow-sm"
              : "text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
          )}
        >
          <Camera className="w-5 h-5" />
          <span className="font-inter text-xs uppercase tracking-widest">Fotoğraf Modu</span>
        </Link>
        <Link
          to="/video-studio"
          className={cn(
            "flex items-center gap-3 py-4 px-6 rounded-r-full transition-all scale-95 active:scale-90",
            path === '/video-studio' || path === '/'
              ? "bg-surface-container-lowest text-primary font-bold shadow-sm"
              : "text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
          )}
        >
          <Video className="w-5 h-5" />
          <span className="font-inter text-xs uppercase tracking-widest">Video Modu</span>
        </Link>
        <button
          className="w-full flex items-center gap-3 text-on-surface-variant py-4 px-6 hover:text-primary hover:bg-surface-container-high rounded-r-full transition-all scale-95 active:scale-90"
        >
          <Baby className="w-5 h-5" />
          <span className="font-inter text-xs uppercase tracking-widest">Çocuk Profilleri</span>
        </button>
        <button
          className="w-full flex items-center gap-3 text-on-surface-variant py-4 px-6 hover:text-primary hover:bg-surface-container-high rounded-r-full transition-all scale-95 active:scale-90"
        >
          <Mountain className="w-5 h-5" />
          <span className="font-inter text-xs uppercase tracking-widest">Ortamlar</span>
        </button>
      </nav>
      <div className="p-4">
        <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold font-headline tracking-tight hover:bg-primary-dim transition-all flex items-center justify-center gap-2">
          <Plus className="w-5 h-5" />
          Yeni Oluştur
        </button>
      </div>
      <div className="mt-auto p-4 border-t border-outline-variant/15 space-y-1">
        <button className="w-full flex items-center gap-3 text-on-surface-variant py-3 px-6 hover:text-primary transition-all">
          <HelpCircle className="w-5 h-5" />
          <span className="font-inter text-xs uppercase tracking-widest">Destek</span>
        </button>
        <button className="w-full flex items-center gap-3 text-on-surface-variant py-3 px-6 hover:text-error transition-all">
          <LogOut className="w-5 h-5" />
          <span className="font-inter text-xs uppercase tracking-widest">Çıkış Yap</span>
        </button>
      </div>
    </aside>
  );
}
