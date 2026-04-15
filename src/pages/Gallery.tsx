import { ChevronDown, Image as ImageIcon, Download, Share2, Trash2, Play, Plus } from 'lucide-react';

export function Gallery() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-10 w-full">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="font-headline text-5xl font-extrabold text-on-surface tracking-tight mb-4">Galerim</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Ürettiğiniz tüm tasarımlar burada saklanır. Koleksiyonlarınızı yönetin ve en iyi çocuk giyim tasarımlarınızı paylaşın.
        </p>
      </header>

      {/* Filters & Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
        <div className="flex bg-surface-container-low p-1 rounded-full border border-outline-variant/15">
          <button className="px-8 py-2.5 bg-surface-container-lowest rounded-full shadow-sm text-sm font-semibold text-primary">Hepsi</button>
          <button className="px-8 py-2.5 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Fotoğraflar</button>
          <button className="px-8 py-2.5 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Videolar</button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-on-surface-variant">Sırala:</span>
          <button className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-xl border border-outline-variant/15 text-sm font-medium">
            En Yeni
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Item 1: Photo */}
        <div className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1PxUVqNh-UpVzyzp29WswGFWoGvAYxqrzUV3DMpq5KOA2Q_rR-1uptInvIKW3MFjD3xvNcPzd9-Yk0srmNa9jnJh-a6ANMPlActq7PzpFOaTPI5202zepM3gmZ8T3w3rK1QZzUL8MgycvM9Dikpxl0PKKqEWIW09T2zKlmEgt94GhfbZ41IwtpGvBiH-orcgAUkO-ssxZBjvAYXQG0_u9agaca-57T0Ms-wrlgwy71uhA-7z7WXQXp-r7udB3if0tRR3Gi9e7O3I"
              alt="Bej Triko Kazak"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">Fotoğraf</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-on-surface mb-2 truncate">Bej Triko Kazak</h3>
            <div className="flex items-center justify-between mt-4 border-t border-outline-variant/10 pt-4">
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <button className="p-2 rounded-full bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Item 2: Video */}
        <div className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsRqkS9wZ1fOTT7Cx-34vVN8BF60QiqWzUz3HAyrDtD06hew4u9YXaTOFDFB6z7if85t14I1O2GhENrjQySIq3TS5VZeU8i49Lp02PELER5B4aSEKh1O3G9v0eGKakrjY952w_tKuu4hlDSldJhG4pp8XpMa6QIrEz12DcRlaXGe2nSboJR1GLCibsInBy-BV4TUwFfyCVdgNLbn8W_im7j-DczshESOiCSycTpFeASbIBPVpIDFQjT6m--ux-CeEyp9aob2sjrtY"
              alt="Keten Koleksiyonu"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
                <Play className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
              <Play className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">Video</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-on-surface mb-2 truncate">Keten Koleksiyonu</h3>
            <div className="flex items-center justify-between mt-4 border-t border-outline-variant/10 pt-4">
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <button className="p-2 rounded-full bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Item 3: Photo */}
        <div className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf2y7AiU7awHpippka9IyjfpfS5OAbB0kN6p3JCImKywa2F6F0_St1Z0oHbGZqGWQQsStxHSWTUnfx-IdBVPVrzX8kZe3rZ35ZIXssMcYZMBIHT11WKpP1rEiR5ybax3SbvJkblUD6vvCHhkFj1UVraTKdjX3ycsBLgBPpR6XZGmCGXO0ZayGDPi6x8AsyUa-8xA1o7Odm3uAzPVi1HEuSt4q9NDDxRuzuHiFUqaSSNm6_ko2vHQBPSosYPkGhWpoUVi960BdmCqg"
              alt="Kışlık Parka Tasarımı"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">Fotoğraf</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-on-surface mb-2 truncate">Kışlık Parka Tasarımı</h3>
            <div className="flex items-center justify-between mt-4 border-t border-outline-variant/10 pt-4">
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <button className="p-2 rounded-full bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Item 4: Photo */}
        <div className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmNpNk5LjbNcaLDmarBK0VHsRlLGBrtTILP_TjnKfccTlo_52RvyLikXAujl-QEC99KPwpnrPGAoxWljiRdhsfUFej3f7n_sJNaMait0AwdHIivwzusdmGCkUti_iJR8GVCBeRVHVcq4DDYNb3CGZqgaIz5W6TqlH05Eq27Hg8Nbjfzz0BGQNn9fXkJo8o4xnprFB73JJ0KhQjFR6-82w5IIk8te7cVnO8Lf_q7o9qwVwaK38AfJdBiHIvdKs14HMLiF2ZBWJSaR0"
              alt="Organik Pamuk Tulum"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">Fotoğraf</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-on-surface mb-2 truncate">Organik Pamuk Tulum</h3>
            <div className="flex items-center justify-between mt-4 border-t border-outline-variant/10 pt-4">
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <button className="p-2 rounded-full bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Item 5: Video */}
        <div className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFSlAFmY0qtOy3lAVJ7wneYf8wxyUiltOhsI2NOFEG3fMKKaXBr9NiF7m0L1AF6ocHDrVHD_UxjiGuTI0aXRDTU5JiGBOE9vccadYRmhFydCIJlUwiEuNlSI9UHfY3wG3ekzQspvyZIJpotqhg64LIemiRZZdWfHw54PyxUwG-2uXCgbcxma-S5hSjxXfPAgbIpUYqyl7YhkOy0q6P8kmd7LkJVfoCJDgRTsLa_IO72YQfEYa-RYc7qVCcF7-dT-MfwJbNA0QwU3M"
              alt="Yazlık Elbise Tanıtımı"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
                <Play className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
              <Play className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">Video</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-on-surface mb-2 truncate">Yazlık Elbise Tanıtımı</h3>
            <div className="flex items-center justify-between mt-4 border-t border-outline-variant/10 pt-4">
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <button className="p-2 rounded-full bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Item 6: Photo */}
        <div className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3kJW50xVGW33KcVDqL4olJWjqdTX16-CGHiYh5r5LOAj5C2-Y6gqhHs0NpJySUokAchr_iIYBAa_JYDOGzmC0BN5PVOfhvVkRRGXWDzQF4tteP3rcchCzxniG2Qz862u9NsmB-Dc_b__lxFBEbnI4_tWGEeK3zpvugvILPkDyL7uI5ZhRqbjqbuw2JeHlN93QNrKYpNl4JuTR6FNrpeDp4Flv1TytbnglRPsd10wOUK9M4vfaIt6Ww_coBKiZUPzD-j7B7I53U3U"
              alt="Denim Ceket Konsepti"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">Fotoğraf</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-on-surface mb-2 truncate">Denim Ceket Konsepti</h3>
            <div className="flex items-center justify-between mt-4 border-t border-outline-variant/10 pt-4">
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-on-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <button className="p-2 rounded-full bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination or Load More */}
      <div className="mt-20 flex justify-center">
        <button className="flex items-center gap-3 bg-primary text-on-primary px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
          <Plus className="w-5 h-5" />
          Daha Fazla Yükle
        </button>
      </div>

      <footer className="bg-slate-50 w-full py-12 px-12 mt-24 rounded-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1440px] mx-auto justify-center">
          <div className="text-lg font-bold text-teal-800 md:mb-0 font-headline">Kidseria</div>
        </div>
      </footer>
    </div>
  );
}
