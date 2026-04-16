'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Image as ImageIcon, Download, Share2, Trash2, Play, Plus, X, ZoomIn } from 'lucide-react';

type GalleryItem = {
  id: string;
  title: string;
  type: 'photo' | 'video';
  image: string;
};

const allItems: GalleryItem[] = [];

type SortOption = 'newest' | 'oldest' | 'name';
type FilterTab = 'all' | 'photo' | 'video';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [items, setItems] = useState(allItems);

  // Load generated items from localStorage
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('kidseria_gallery') || '[]');
      if (stored.length > 0) {
        const generated: GalleryItem[] = stored.map((g: { id: string; url: string; prompt: string; type: string; createdAt: string }) => ({
          id: `gen-${g.id}`,
          title: g.prompt?.slice(0, 40) + '...' || 'AI Görsel',
          type: (g.type || 'photo') as 'photo' | 'video',
          image: g.url,
        }));
        setItems(generated);
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  const filteredItems = items.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'name') return a.title.localeCompare(b.title, 'tr');
    if (sortBy === 'oldest') return a.id.localeCompare(b.id);
    return b.id.localeCompare(a.id); // newest
  });

  const sortLabels: Record<SortOption, string> = {
    newest: 'En Yeni',
    oldest: 'En Eski',
    name: 'İsme Göre',
  };

  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const handleDownload = async (item: GalleryItem) => {
    try {
      const res = await fetch(item.image);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `kidseria-${item.id}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open(item.image, '_blank');
    }
  };

  const handleShare = async (item: GalleryItem) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: 'Kidseria ile oluşturuldu',
          url: item.image,
        });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(item.image);
      alert('Görsel bağlantısı panoya kopyalandı!');
    }
  };

  const handleDelete = (id: string) => {
    if (!confirm('Bu görseli silmek istediğinize emin misiniz?')) return;
    setItems((prev) => prev.filter((item) => item.id !== id));
    // Also remove from localStorage if it's a generated item
    if (id.startsWith('gen-')) {
      try {
        const stored = JSON.parse(localStorage.getItem('kidseria_gallery') || '[]');
        const taskId = id.replace('gen-', '');
        const updated = stored.filter((g: { id: string }) => g.id !== taskId);
        localStorage.setItem('kidseria_gallery', JSON.stringify(updated));
      } catch {
        // ignore
      }
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-10 w-full">
      <header className="mb-8 sm:mb-16">
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight mb-4">Galerim</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Ürettiğiniz tüm tasarımlar burada saklanır. Koleksiyonlarınızı yönetin ve en iyi çocuk giyim tasarımlarınızı paylaşın.
        </p>
      </header>

      <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div className="flex bg-surface-container-low p-1 rounded-full border border-outline-variant/15 w-full sm:w-auto">
          {([['all', 'Hepsi'], ['photo', 'Fotoğraflar'], ['video', 'Videolar']] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 sm:flex-none px-4 sm:px-8 py-2 sm:py-2.5 text-sm font-medium transition-colors rounded-full ${
                activeTab === key
                  ? 'bg-surface-container-lowest shadow-sm font-semibold text-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 relative">
          <span className="text-sm font-medium text-on-surface-variant">Sırala:</span>
          <button
            onClick={() => setShowSortMenu(!showSortMenu)}
            className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-xl border border-outline-variant/15 text-sm font-medium"
          >
            {sortLabels[sortBy]}
            <ChevronDown className={`w-5 h-5 transition-transform ${showSortMenu ? 'rotate-180' : ''}`} />
          </button>
          {showSortMenu && (
            <div className="absolute top-full right-0 mt-2 bg-surface-container-lowest rounded-xl border border-outline-variant/15 shadow-xl z-20 overflow-hidden min-w-[160px]">
              {(Object.entries(sortLabels) as [SortOption, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => { setSortBy(key); setShowSortMenu(false); }}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                    sortBy === key
                      ? 'bg-primary-container/30 text-primary font-semibold'
                      : 'hover:bg-surface-container-high text-on-surface'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-8">
        {sortedItems.map((item) => (
          <div key={item.id} className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-[4/5] relative overflow-hidden cursor-pointer" onClick={() => setLightbox(item)}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow-lg" />
              </div>
              <div className="absolute top-2 left-2 bg-surface-container-lowest/70 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1">
                {item.type === 'photo' ? (
                  <ImageIcon className="w-3 h-3 text-teal-600" />
                ) : (
                  <Play className="w-3 h-3 text-teal-600" />
                )}
                <span className="text-[10px] font-medium text-teal-800">
                  {item.type === 'photo' ? 'Foto' : 'Video'}
                </span>
              </div>
            </div>
            <div className="p-3 sm:p-6">
              <h3 className="text-sm sm:text-lg font-bold text-on-surface mb-1 sm:mb-2 truncate">{item.title}</h3>
              <div className="flex items-center justify-between mt-2 sm:mt-4 border-t border-outline-variant/10 pt-2 sm:pt-4">
                <div className="flex gap-1 sm:gap-2">
                  <button
                    onClick={() => handleDownload(item)}
                    className="p-1.5 sm:p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={() => handleShare(item)}
                    className="p-1.5 sm:p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1.5 sm:p-2 rounded-full bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors"
                >
                  <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sortedItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-on-surface-variant text-lg">Bu kategoride henüz içerik bulunmuyor.</p>
        </div>
      )}

      <div className="mt-20 flex justify-center">
        <button className="flex items-center gap-3 bg-primary text-on-primary px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
          <Plus className="w-5 h-5" />
          Daha Fazla Yükle
        </button>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-2 -right-2 z-10 bg-white/90 text-black p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => handleDownload(lightbox)}
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors"
              >
                <Download className="w-4 h-4" />
                İndir
              </button>
              <button
                onClick={() => handleShare(lightbox)}
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Paylaş
              </button>
              <button
                onClick={() => { handleDelete(lightbox.id); setLightbox(null); }}
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Sil
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-slate-50 w-full py-8 sm:py-12 px-4 sm:px-12 mt-12 sm:mt-24 rounded-2xl sm:rounded-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1440px] mx-auto justify-center">
          <div className="text-lg font-bold text-teal-800 md:mb-0 font-headline">Kidseria</div>
        </div>
      </footer>
    </div>
  );
}
