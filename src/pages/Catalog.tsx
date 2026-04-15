import { PlusCircle, UploadCloud, Grid, List, Trash2, Plus } from 'lucide-react';

export function Catalog() {
  return (
    <div className="max-w-[1440px] mx-auto px-8 py-10 w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
            PREMIUM TEXTILE AI
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-4">
            Kıyafet Kataloğu
          </h1>
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
            Koleksiyonunuzu yönetin. Yeni tasarımlar ekleyebilir ve mevcut kataloğunuzu düzenleyebilirsiniz.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Add Product Form */}
        <section className="lg:col-span-4 bg-surface-container-low rounded-xl p-8 sticky top-28">
          <h2 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
            <PlusCircle className="w-6 h-6" />
            Yeni Kıyafet Ekle
          </h2>
          <form className="space-y-6">
            {/* Photo Upload area */}
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
                  <label className="flex items-center gap-2 bg-surface-container-lowest p-3 rounded-xl ring-1 ring-outline-variant/15 cursor-pointer hover:bg-primary-container/20 transition-all">
                    <input type="radio" name="age" className="text-primary focus:ring-primary" />
                    <span className="text-sm">0-3 Ay</span>
                  </label>
                  <label className="flex items-center gap-2 bg-surface-container-lowest p-3 rounded-xl ring-1 ring-outline-variant/15 cursor-pointer hover:bg-primary-container/20 transition-all">
                    <input type="radio" name="age" className="text-primary focus:ring-primary" />
                    <span className="text-sm">0-3-6 Ay</span>
                  </label>
                  <label className="flex items-center gap-2 bg-surface-container-lowest p-3 rounded-xl ring-1 ring-outline-variant/15 cursor-pointer hover:bg-primary-container/20 transition-all">
                    <input type="radio" name="age" className="text-primary focus:ring-primary" />
                    <span className="text-sm">6-12-18 Ay</span>
                  </label>
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

        {/* Right Side: Catalog Grid */}
        <section className="lg:col-span-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">
              Mevcut Koleksiyon <span className="text-primary text-base font-normal ml-2">(24 Ürün)</span>
            </h2>
            <div className="flex gap-2">
              <button className="p-2 bg-surface-container-high rounded-lg text-primary hover:bg-primary-container transition-colors">
                <Grid className="w-5 h-5" />
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Product Card 1 */}
            <div className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-black/5 relative">
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <button className="bg-white/90 backdrop-blur text-error p-2 rounded-full shadow-sm hover:bg-error hover:text-white transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="aspect-[4/5] overflow-hidden bg-surface-container-low">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXb82MdqJihp1StLnXCo8y8bk-yU3IAb7IpoamLNoYIEo7el7Jrn8zYM5STnLBSn0DlL0x9lm54BYiidboqrnh5KWjJlUM9fb_SBx4i54WC1dR1ACWQcbz3JzqbCLjHcnIrajQyF2YA8vSqPS1IBPnhRhed5oRA4FWLQ-wLGo3FixAj63rmb2NJ0xO65rMrWyT6G1Cq-4yIy2yPsFUJ309xU1LDXk8Pjn0bgRsExId6SMOnwAwg_JjYo8VDi45l68HrRajFfMrSNg"
                  alt="Ada Müslin Takım"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-on-surface">Ada Müslin Takım</h3>
                  <span className="text-[10px] font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full uppercase tracking-tighter">0-3 Ay</span>
                </div>
                <p className="text-xs text-on-surface-variant">KOD: KS-9231-M</p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-black/5 relative">
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <button className="bg-white/90 backdrop-blur text-error p-2 rounded-full shadow-sm hover:bg-error hover:text-white transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="aspect-[4/5] overflow-hidden bg-surface-container-low">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwwNXJmCTYA8EQ2iUscnYMlQosOSGBQdD_2xLTe5VSDmPM4zAwXl6ftCdnIgFxyeIjU1ZmGCZM40BfBimufT01zGI4rHIK91a3_biuXOItkNApqxkNN2HR_GOsuKPCyifmXN9gPSs3nkJ4wl7NpJp-3lUMn_wanN3S_bro4GWt6RrONTILboP0MU0xxAPnuj3L-p20b8SOpuckl4bb_ygumYpz5v6uJ64c-y6n-uD2kWMhk8pV95sM7Se8s5C4_IoCDL1gIv8Z-9I"
                  alt="Örgü Bebek Hırka"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-on-surface">Örgü Bebek Hırka</h3>
                  <span className="text-[10px] font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full uppercase tracking-tighter">0-3-6 Ay</span>
                </div>
                <p className="text-xs text-on-surface-variant">KOD: KS-4412-O</p>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-black/5 relative">
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <button className="bg-white/90 backdrop-blur text-error p-2 rounded-full shadow-sm hover:bg-error hover:text-white transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="aspect-[4/5] overflow-hidden bg-surface-container-low">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLlpLzCpIbJY1iAdMMnJxmxnEvg4-JZp-fIKD26TBDnCBSQFUpmiXfGOPCHO5bVGYBBBOM3fMdRBqidxDmffGpPi6FsFk2-nXT1Bu1njaLOnTn3GIB5XsowkBAF4TSzDBtpvVFS6e-wKDgckzBbpylRo-JD6IUwR2y2hW3ibg43Ktt9msjCry-XqC2tGxk4Vl0Pimmqojo9BP3R5lqGBhuvNBLGPRVokeuLNhNT7EYJ2vcuTgmmYcdHHlIunQqQpJOMlTp8q4rpow"
                  alt="Denim Bahçıvan"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-on-surface">Denim Bahçıvan</h3>
                  <span className="text-[10px] font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full uppercase tracking-tighter">6-12-18 Ay</span>
                </div>
                <p className="text-xs text-on-surface-variant">KOD: KS-1082-D</p>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-black/5 relative">
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <button className="bg-white/90 backdrop-blur text-error p-2 rounded-full shadow-sm hover:bg-error hover:text-white transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="aspect-[4/5] overflow-hidden bg-surface-container-low">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi6Pn-MJk6-kkVm7nT5B7We0g0kUXjbsQ-cHfeApTiZx96xKt4UqNAcI0z3YAV9A4X1oJ5gUq25MiP37UJXCoUNNO7oD3IpzBUHfoytglSJ-MWOywyROaetI9By-7BLQJ4VVpqD8dkYIpT3dHgOfjzB-EN409ASvoejA5ZNJgoo45n6y_j-zRcvDtRbCQMEFUo4dqXy9PumvDNnTRZCdxjAnjkAbRApj2gRlGxNYs1TntCpf32PmepfO__PmJtv8TUDLDrGZqQwuQ"
                  alt="Toprak Body Seti"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-on-surface">Toprak Body Seti</h3>
                  <span className="text-[10px] font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full uppercase tracking-tighter">0-3-6 Ay</span>
                </div>
                <p className="text-xs text-on-surface-variant">KOD: KS-8821-T</p>
              </div>
            </div>

            {/* Product Card 5 */}
            <div className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-black/5 relative">
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <button className="bg-white/90 backdrop-blur text-error p-2 rounded-full shadow-sm hover:bg-error hover:text-white transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="aspect-[4/5] overflow-hidden bg-surface-container-low">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAlB5Su2bmnUBdK-Sr14Wqd-LjCosXx982Nc1gKVJ8xZ1fHidLiX9SGMjZH55XjapfK5viB08aOuA8e6VGdGlbibGuXGZhFX4CTg747yaWONbPpLCnpRbODEfechEaSmqISH2heD9KBWIpYVC0_UWSpP0fGTJbKz775-Rt4ur-mqbytzZjzC_26CQrdOLRMv3gtuMPomhyvwy5y79mazR87AE-NEaD-NR-s5rz06fF0mZK1wARxX2zjYkdmavLeX_0pxLtNyW7FUE"
                  alt="Yumuşak Deri Patik"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-on-surface">Yumuşak Deri Patik</h3>
                  <span className="text-[10px] font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full uppercase tracking-tighter">0-3 Ay</span>
                </div>
                <p className="text-xs text-on-surface-variant">KOD: KS-2290-P</p>
              </div>
            </div>

            {/* Add More Placeholder */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/20 rounded-xl bg-surface-container-low/30 hover:bg-surface-container-low transition-colors cursor-pointer group p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Plus className="w-8 h-8" />
              </div>
              <p className="font-bold text-on-surface-variant">Daha Fazla Yükle</p>
              <p className="text-xs text-outline-variant mt-1">200+ kıyafet kayıtlı</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
