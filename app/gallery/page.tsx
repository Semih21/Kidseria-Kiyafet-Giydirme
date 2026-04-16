'use client';

import { useState } from 'react';
import { ChevronDown, Image as ImageIcon, Download, Share2, Trash2, Play, Plus } from 'lucide-react';

type GalleryItem = {
  id: string;
  title: string;
  type: 'photo' | 'video';
  image: string;
};

const allItems: GalleryItem[] = [
  { id: '1', title: 'Bej Triko Kazak', type: 'photo', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1PxUVqNh-UpVzyzp29WswGFWoGvAYxqrzUV3DMpq5KOA2Q_rR-1uptInvIKW3MFjD3xvNcPzd9-Yk0srmNa9jnJh-a6ANMPlActq7PzpFOaTPI5202zepM3gmZ8T3w3rK1QZzUL8MgycvM9Dikpxl0PKKqEWIW09T2zKlmEgt94GhfbZ41IwtpGvBiH-orcgAUkO-ssxZBjvAYXQG0_u9agaca-57T0Ms-wrlgwy71uhA-7z7WXQXp-r7udB3if0tRR3Gi9e7O3I' },
  { id: '2', title: 'Keten Koleksiyonu', type: 'video', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsRqkS9wZ1fOTT7Cx-34vVN8BF60QiqWzUz3HAyrDtD06hew4u9YXaTOFDFB6z7if85t14I1O2GhENrjQySIq3TS5VZeU8i49Lp02PELER5B4aSEKh1O3G9v0eGKakrjY952w_tKuu4hlDSldJhG4pp8XpMa6QIrEz12DcRlaXGe2nSboJR1GLCibsInBy-BV4TUwFfyCVdgNLbn8W_im7j-DczshESOiCSycTpFeASbIBPVpIDFQjT6m--ux-CeEyp9aob2sjrtY' },
  { id: '3', title: 'Kışlık Parka Tasarımı', type: 'photo', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf2y7AiU7awHpippka9IyjfpfS5OAbB0kN6p3JCImKywa2F6F0_St1Z0oHbGZqGWQQsStxHSWTUnfx-IdBVPVrzX8kZe3rZ35ZIXssMcYZMBIHT11WKpP1rEiR5ybax3SbvJkblUD6vvCHhkFj1UVraTKdjX3ycsBLgBPpR6XZGmCGXO0ZayGDPi6x8AsyUa-8xA1o7Odm3uAzPVi1HEuSt4q9NDDxRuzuHiFUqaSSNm6_ko2vHQBPSosYPkGhWpoUVi960BdmCqg' },
  { id: '4', title: 'Organik Pamuk Tulum', type: 'photo', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmNpNk5LjbNcaLDmarBK0VHsRlLGBrtTILP_TjnKfccTlo_52RvyLikXAujl-QEC99KPwpnrPGAoxWljiRdhsfUFej3f7n_sJNaMait0AwdHIivwzusdmGCkUti_iJR8GVCBeRVHVcq4DDYNb3CGZqgaIz5W6TqlH05Eq27Hg8Nbjfzz0BGQNn9fXkJo8o4xnprFB73JJ0KhQjFR6-82w5IIk8te7cVnO8Lf_q7o9qwVwaK38AfJdBiHIvdKs14HMLiF2ZBWJSaR0' },
  { id: '5', title: 'Yazlık Elbise Tanıtımı', type: 'video', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFSlAFmY0qtOy3lAVJ7wneYf8wxyUiltOhsI2NOFEG3fMKKaXBr9NiF7m0L1AF6ocHDrVHD_UxjiGuTI0aXRDTU5JiGBOE9vccadYRmhFydCIJlUwiEuNlSI9UHfY3wG3ekzQspvyZIJpotqhg64LIemiRZZdWfHw54PyxUwG-2uXCgbcxma-S5hSjxXfPAgbIpUYqyl7YhkOy0q6P8kmd7LkJVfoCJDgRTsLa_IO72YQfEYa-RYc7qVCcF7-dT-MfwJbNA0QwU3M' },
  { id: '6', title: 'Denim Ceket Konsepti', type: 'photo', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3kJW50xVGW33KcVDqL4olJWjqdTX16-CGHiYh5r5LOAj5C2-Y6gqhHs0NpJySUokAchr_iIYBAa_JYDOGzmC0BN5PVOfhvVkRRGXWDzQF4tteP3rcchCzxniG2Qz862u9NsmB-Dc_b__lxFBEbnI4_tWGEeK3zpvugvILPkDyL7uI5ZhRqbjqbuw2JeHlN93QNrKYpNl4JuTR6FNrpeDp4Flv1TytbnglRPsd10wOUK9M4vfaIt6Ww_coBKiZUPzD-j7B7I53U3U' },
];

type SortOption = 'newest' | 'oldest' | 'name';
type FilterTab = 'all' | 'photo' | 'video';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [items, setItems] = useState(allItems);

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

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
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
            <div className="aspect-[4/5] relative overflow-hidden">
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
              <div className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                {item.type === 'photo' ? (
                  <ImageIcon className="w-4 h-4 text-teal-600" />
                ) : (
                  <Play className="w-4 h-4 text-teal-600" />
                )}
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                  {item.type === 'photo' ? 'Fotoğraf' : 'Video'}
                </span>
              </div>
            </div>
            <div className="p-3 sm:p-6">
              <h3 className="text-sm sm:text-lg font-bold text-on-surface mb-1 sm:mb-2 truncate">{item.title}</h3>
              <div className="flex items-center justify-between mt-2 sm:mt-4 border-t border-outline-variant/10 pt-2 sm:pt-4">
                <div className="flex gap-1 sm:gap-2">
                  <button className="p-1.5 sm:p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button className="p-1.5 sm:p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
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

      <footer className="bg-slate-50 w-full py-8 sm:py-12 px-4 sm:px-12 mt-12 sm:mt-24 rounded-2xl sm:rounded-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1440px] mx-auto justify-center">
          <div className="text-lg font-bold text-teal-800 md:mb-0 font-headline">Kidseria</div>
        </div>
      </footer>
    </div>
  );
}
