import { Search, Baby, Map, Check, Sparkles, Image as ImageIcon, Trash2 } from 'lucide-react';

export function PhotoStudio() {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Section 1: Hero & Config */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Fotoğraf Stüdyosu</span>
            <h1 className="text-4xl font-extrabold tracking-tighter text-on-surface">Hayalindeki Çekimi Tasarla</h1>
            <p className="text-on-surface-variant text-sm">Gelişmiş AI teknolojimizle bebeğinizin en şık anlarını stüdyo kalitesinde oluşturun.</p>
          </div>

          {/* 2. Child Profile Selection */}
          <div className="bg-surface-container-low rounded-2xl p-6 space-y-6">
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <Baby className="w-4 h-4" />
                Çocuk Profili
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-surface-container-lowest border border-primary text-primary py-2 px-3 rounded-lg text-xs font-semibold text-center">3-6 Ay</button>
                <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant py-2 px-3 rounded-lg text-xs font-medium text-center hover:border-primary transition-all">6-12 Ay</button>
                <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant py-2 px-3 rounded-lg text-xs font-medium text-center hover:border-primary transition-all">12-18 Ay</button>
                <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant py-2 px-3 rounded-lg text-xs font-medium text-center hover:border-primary transition-all">18+ Ay</button>
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Cilt Tonu</label>
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full bg-[#FCE2C4] ring-2 ring-primary ring-offset-2"></button>
                <button className="w-8 h-8 rounded-full bg-[#E5B087] hover:ring-2 hover:ring-primary/50 transition-all"></button>
                <button className="w-8 h-8 rounded-full bg-[#AD7A52] hover:ring-2 hover:ring-primary/50 transition-all"></button>
                <button className="w-8 h-8 rounded-full bg-[#8D5524] hover:ring-2 hover:ring-primary/50 transition-all"></button>
              </div>
            </div>
          </div>

          {/* 3. Environment Selection */}
          <div className="bg-surface-container-low rounded-2xl p-6 space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <Map className="w-4 h-4" />
              Ortam Seçimi
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-primary">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHy17uTNk9P5GJkemQEPhrLTfIiGKrEa25iySS7RAPeKaQAj9DPfuzWBPGHe2qkW_51w4VK4rg7vV81x-uX5EWy-zJs83VjjOWJPOQNuhxHU-5J-ELBZj6F0zEqo_s8BziwrBdaT8NjsnIW3z51SyMpXhnjC6Vt3nhhRN6A6rUVTG-XQgDRXKziZ02ufTAOdpf1S5QtTOFWCf9KCOMF-3XQV7_hYFif0-mVQosKRqMmYCYKRaUbzFQPn27wufe0b0f66eBH1PLc7I"
                  alt="Stüdyo"
                  className="w-full h-20 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Stüdyo</span>
                </div>
              </div>
              <div className="relative group cursor-pointer overflow-hidden rounded-xl border border-outline-variant/15">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTrqUahF1LDFk99LK_kQK17g5sZCqdjTINa2I7sMk-_hJh9-bjOJtjdGYMePj7wkuiuOpm2VoIkelcAHoqn42d4dGHFmStouBaLB16NZoyyQ2oAca7qVUwDs37xkCqfwB0MfjeDmSIDy_z8pN2xGlQBJrDqkzHs2atsftP8dnQVqb3xjauo6GDfAXFy19QZlBZDUoeoDqTN65Q3q2Pxl9BKGKo0ctWqfNtRKqFNBXadnF4bMky5ko5pmoGaTBq-jf1gzUwouoWhlY"
                  alt="Ev"
                  className="w-full h-20 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Ev</span>
                </div>
              </div>
              <div className="relative group cursor-pointer overflow-hidden rounded-xl border border-outline-variant/15">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9uUTaBMGHbyC7rUhkkOMFN8v8hcluTNGbJ3ypdOV4dpepnYuZXXlaVcJPf3yUtr16j357Gqu1MZyqKDfQwZO_v90VrtSmMNCq_1x-r9a_JsocrgKqkuhrIYCNBWzPaZa50OFDtxN-jtOU1wK84FdGbQKOLBShLFMdx_Nz6KiHiBADOs7VQNmX55X8EfehvtI6A6ZsV3902VKGgjG3TgZPPNcqUxGJm1Myui18qXyMAt8bRB29whlHOF2psdFtPat0sXSo8YLQ70c"
                  alt="Park"
                  className="w-full h-20 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Park</span>
                </div>
              </div>
              <div className="relative group cursor-pointer overflow-hidden rounded-xl border border-outline-variant/15">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4sum7j9KpTllLzfgqBJx0bz_wcexqxb2C9r0-sWeL0CPZoyUk5-2g4QbJ6p1Y8AMgRHXmSu0orP9vUFNmnDhzFxRNzMXwqk5X9UTBvX_CI0gP_3c27i_-kzuq6L-ivXPDTPmdGDDwmOjzofKnQ8zwSGKhuc4tQNzWoA1m0oAaCbC7su0IwIwEj3l-TTatuFVMTmnLDhfhjG4QyTzyumvVG5TGVJsNDTn9_fQKJIEpAtcHsZcLBx-EvzdtWTdXBK7YvVflPuO_ht8"
                  alt="Sahil"
                  className="w-full h-20 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Sahil</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Clothing Selection Area */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_20px_40px_rgba(42,52,51,0.04)] flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold tracking-tight">Kıyafet Seçimi</h3>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Ürün adı veya kod..."
                  className="w-full bg-surface-container-low border-0 rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
                />
              </div>
            </div>

            {/* Clothing Grid (Asymmetric Bento style) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
              <div className="col-span-2 row-span-2 relative group rounded-2xl overflow-hidden border-2 border-primary">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALvvKPqhXfqKDOrijeK7pkO6rXqtQemtUY97ZXnyJVMgRZf7jzjdrpI3BIZ7jvakPZveS6qWza5mEilrpvuZf4Z3r2G5QZ2Yj81M8J6dr9iny0iu7h9UieeMA_vZ77YZ2RlZ8Ugw-qi1GgM9VL1FLW1gNhcn4DRzdXnMVBlvnnZlUbRZXzYTWIKbEc8i71EUiWhwYG5z1WEySWIYhc-M45i5o9UasR0ITOvQLq4jd3XUyX3LgedHbXrAgKzpvh1qETVYWZMvnyQs4"
                  alt="Romper"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-bold text-sm">Organik Krem Tulum</p>
                  <p className="text-white/80 text-[10px]">KOD: KDS-001</p>
                </div>
                <div className="absolute top-3 right-3 bg-primary text-white p-1 rounded-full">
                  <Check className="w-4 h-4" />
                </div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-primary transition-all cursor-pointer">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEcbNnk-NB7LNv4GiZO0OWTkcGm3ygKd5Zx931iUlxZBoMw4QQcKNvcdL7ije_ZEQoIJYUGkb6JkGnwj3yG4nlitsxhM_uW3H9CZjoG5Gkr0M-44f5CygiIsSG-LMk7WN7hesRoFe40y06mR7ANHZJ3o4Qxrd5Zef95_GTxwdbN4w4J99WMJoNfPzqexzzp06OXtj-356ADSfr4DJx03FujoCLtKYXS8LYZFxwIJs6ib0LPWJShZGlXKiSKilfCNifp9JLULHqG7Y"
                  alt="Sweater"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-primary transition-all cursor-pointer">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlY2I5i1IGrTA4MQ7Divb6fM7wJ5IK9MPeieaycZDvD26HywWmBmwuqWSEN2lUTA3RMr9Ax_wFcO81z2NsWGTvP0NbSvoY_ZwV4_crGKEzPGER4xkNZDJVHeFfyXD_pYS9aKHP50Cc4UXCK_yQPootSY51HVe5xJ5QRlNzUteTt-F5GX8RXDzPLyCppGQXQHzHieXXa7KuFByfftwondsdRKgUFrRO_aqtMfzPtnc-KWI0vTdSX8L1-M-4OpXdXY4bVofUUh5iL5I"
                  alt="Dress"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-primary transition-all cursor-pointer">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN_dMiCxBSs1wp2sfOCxi-OUhZbDSF5wnKrSpRlKPFnv09DXlzepnrxTUgAWPRVQHnt3uuKdmet87C38QTailrWZUvjg_DHTbbBm2bu7Mams5Pyts1z9nFGVmffCVjWHwUf66ODOa2M7YLOHWzy6QPrUnMhEx7LZ7sVbJ-4WQHH4Iy2SCLV-pMT8sOJ0mpg_NRxWNBFJ7cLyjCWX9WlXCMqMJN7TllYpM_Weo1L2Sk2yJChv-vmQWgrV1jaNT3KqnNlkBAzDlckFg"
                  alt="Overalls"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-primary transition-all cursor-pointer">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8VK735aKlaYv_CWhz07swS2kJBwu0WhljUDUJ7-5y3sgVFGhf8GnyCZCiXvoJZRvKVPY1x15OO1awQOQmxvsCnMVakRlCFzWmNfij9sMpFbSies4FpDlhPIE4mWngIg30uBWQjnOFM70_mmpk6ThqqCRn9YRVXICGqycVpG5nkZ4vhWlR1AtpM3fbN04CFjXJzXPGm6c-OJtzNFqaZd1Mxdp0WOk61ULI1f2clhagQhJpgX9VzEBgJGUl8qeEM3chOFv3GVMtIRY"
                  alt="Yellow set"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
              </div>
            </div>
          </div>

          {/* 4. Large Generate Button */}
          <button className="w-full py-5 rounded-2xl bg-gradient-to-br from-primary to-primary-dim text-white font-extrabold text-lg flex items-center justify-center gap-4 shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all">
            <Sparkles className="w-6 h-6" />
            FOTOĞRAF OLUŞTUR
          </button>
        </div>
      </div>

      {/* 5. Results Area */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-outline-variant/30"></span>
          <h2 className="text-xl font-bold tracking-tight text-on-surface">Sonuçlar</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Main Preview */}
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface-container-low shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjbMTpomYlYBPlWxbC65nqSipCFzYXKPbTlTaI9OzNYSTtCvnrBm-RGEpBtSGkdsCegHxELzo3lFbdp9fDgvFq8llYT-jNWLGsRWK_2FrI1biYk44vcAu2DnEx2Yxn_p3EXiMTSlvj-9LnVkYsWFRAVbGN1Ia6Gq8NVxPwJphBLn2W6rzqhK0q8YqOuSSbCyTJzl4zbUvzpWuuUKDNhMyvi0SOhCbXMzt0sFm1jefPYkk12JV5k_JDSmzkWy4sOIPooD4bWJ8c5wI"
              alt="Result"
              className="w-full h-full object-cover"
            />
            {/* Glassmorphism Overlay Controls */}
            <div className="absolute bottom-8 inset-x-8 flex items-center justify-between p-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                  <Check className="text-primary w-5 h-5" />
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-primary-dim transition-all">
                  <ImageIcon className="w-4 h-4" />
                  Galeriye Ekle
                </button>
                <button className="bg-white/50 text-error p-2 rounded-xl hover:bg-error-container/20 transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 border-t border-outline-variant/10 mt-20">
        <div className="max-w-7xl mx-auto flex justify-center">
          <span className="text-xl font-bold tracking-tighter text-teal-800 font-headline">Kidseria</span>
        </div>
      </footer>
    </div>
  );
}
