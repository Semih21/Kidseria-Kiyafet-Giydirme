'use client';

import { useState } from 'react';
import { PlusCircle, UploadCloud, Grid, List, Trash2, X } from 'lucide-react';
import { catalogItems, type CatalogItem } from '@/lib/catalog';

export default function CatalogPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [items, setItems] = useState<CatalogItem[]>(catalogItems);
  const [lightbox, setLightbox] = useState<CatalogItem | null>(null);

  const handleDelete = (code: string) => {
    if (!confirm('Bu kıyafeti silmek istediğinize emin misiniz?')) return;
    setItems((prev) => prev.filter((item) => item.code !== code));
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-6 sm:py-10 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
            PREMIUM TEXTILE AI
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-3 sm:mb-4">
            Kıyafet Kataloğu
          </h1>
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
            Koleksiyonunuzu yönetin. Yeni tasarımlar ekleyebilir ve mevcut kataloğunuzu düzenleyebilirsiniz.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
        <section className="lg:col-span-4 bg-surface-container-low rounded-xl p-4 sm:p-8 lg:sticky lg:top-28">
          <h2 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
            <PlusCircle className="w-6 h-6" />
            Yeni Kıyafet Ekle
          </h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="group relative bg-surface-container-lowest border-2 border-dashed border-outline-variant/30 rounded-xl p-8 text-center transition-all hover:border-primary/50 cursor-pointer">
              <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              <UploadCloud className="w-10 h-10 text-outline-variant mx-auto mb-3 group-hover:text-primary transition-colors" />
              <p className="text-sm font-medium text-on-surface-variant">Fotoğrafı buraya sürükleyin veya tıklayın</p>
              <p className="text-xs text-outline-variant mt-1">PNG, JPG (Max. 10MB)</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-1 ml-1">Ürün Adı</label>
                <input
                  type="text"
                  placeholder="Örn: Pamuklu Bebek Takımı"
                  className="w-full bg-surface-container-lowest border-0 ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary rounded-xl py-3 px-4 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-1 ml-1">Kıyafet Kodu</label>
                <input
                  type="text"
                  placeholder="Örn: KD-2024-001"
                  className="w-full bg-surface-container-lowest border-0 ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary rounded-xl py-3 px-4 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-1 ml-1">Yaş Aralığı</label>
                <div className="grid grid-cols-1 gap-2">
                  {['6-12-18 Ay'].map((age) => (
                    <label key={age} className="flex items-center gap-2 bg-surface-container-lowest p-3 rounded-xl ring-1 ring-outline-variant/15 cursor-pointer hover:bg-primary-container/20 transition-all">
                      <input type="radio" name="age" className="text-primary focus:ring-primary" />
                      <span className="text-sm">{age}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/10 hover:bg-primary-dim active:scale-95 transition-all"
            >
              Kataloğa Kaydet
            </button>
          </form>
        </section>

        <section className="lg:col-span-8">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Mevcut Koleksiyon
              <span className="text-primary text-base font-normal ml-2">({items.length} Ürün)</span>
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-surface-container-high text-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-surface-container-high text-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6">
              {items.map((item) => (
                <div
                  key={item.code}
                  className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-black/5 relative"
                >
                  <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                    <button
                      onClick={() => handleDelete(item.code)}
                      className="bg-white/90 backdrop-blur text-error p-2 rounded-full shadow-sm hover:bg-error hover:text-white transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div
                    className="aspect-[4/5] overflow-hidden bg-surface-container-low cursor-zoom-in"
                    onClick={() => setLightbox(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-3 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                      <h3 className="font-bold text-sm sm:text-lg text-on-surface">{item.name}</h3>
                      <span className="text-[10px] font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full uppercase tracking-tighter">
                        {item.ageRange}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">KOD: {item.code}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.code}
                  className="flex items-center gap-4 bg-surface-container-lowest rounded-xl p-4 hover:shadow-md transition-all group"
                >
                  <div
                    className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-low flex-shrink-0 cursor-zoom-in"
                    onClick={() => setLightbox(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-on-surface truncate">{item.name}</h3>
                    <p className="text-xs text-on-surface-variant">KOD: {item.code}</p>
                  </div>
                  <span className="text-[10px] font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full uppercase tracking-tighter flex-shrink-0">
                    {item.ageRange}
                  </span>
                  <button
                    onClick={() => handleDelete(item.code)}
                    className="p-2 rounded-full text-error hover:bg-error hover:text-white transition-all flex-shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative inline-flex flex-col items-center max-w-3xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10 bg-white/90 backdrop-blur text-on-surface p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <img
              src={lightbox.image}
              alt={lightbox.name}
              className="max-h-[75vh] sm:max-h-[80vh] rounded-t-xl sm:rounded-t-2xl shadow-2xl object-contain"
            />
            <div className="bg-white/90 backdrop-blur rounded-b-xl sm:rounded-b-2xl px-4 sm:px-6 py-3 sm:py-4 w-full">
              <h3 className="font-bold text-base sm:text-lg text-on-surface">{lightbox.name}</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                KOD: {lightbox.code} · {lightbox.ageRange}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
