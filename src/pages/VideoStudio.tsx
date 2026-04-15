import { Search, Plus, Play, Download, Image as ImageIcon, Trash2, Lightbulb, Wand2, Shirt, Baby, Film } from 'lucide-react';

export function VideoStudio() {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-full">
            Video Stüdyosu
          </span>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-4">
          Yeni Hikayeni Oluştur
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg">
          Yapay zeka gücüyle ürünlerinizi hayat dolu videolara dönüştürün. Sadece çocuk profilini, kıyafetleri ve senaryoyu seçin.
        </p>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Configuration Panel */}
        <section className="col-span-12 lg:col-span-7 space-y-8">
          {/* 1. Clothing Selection Area */}
          <div className="bg-surface-container-low p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Shirt className="text-primary w-6 h-6" />
                Kıyafet Seçimi
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="İsim veya ürün kodu..."
                  className="bg-surface-container-lowest border-none rounded-full px-6 py-2 text-sm w-64 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-outline-variant/60"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant w-4 h-4" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-[4/5] bg-surface-container-lowest rounded-xl p-2 cursor-pointer border-2 border-primary group transition-all">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKWGOXQBfBNojwh8E-JPq6rfANFw_nGRn0ievCTFW5QAjB37QfuhgT2nzKcNjSwgjBvmOYUz5TPE59I57fHrcNIU6XYyQgktXT7bvL4YPR94CY5Jz9kmuWOGjM_OF3CTlnJhsJff8jPrKVLIAzD7r-W-agcyTtRNf0B_YigqvIIljd2LeaAiCe3qiGv_7wvN820Kq2Ek4H1cSegFVYKd8twDEuudA75lXRFLAyvrAUPRCvTSFN9BVihBarZ8C_hl0vQQBVIIN7oqc"
                  alt="Romper"
                  className="w-full h-full object-cover rounded-lg mb-2"
                />
                <div className="text-[10px] font-bold text-primary uppercase text-center">Seçili</div>
              </div>
              <div className="aspect-[4/5] bg-surface-container-lowest rounded-xl p-2 cursor-pointer border-2 border-transparent hover:border-primary/30 transition-all">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAooQFDqm3GJdjCVkgIJ4s5UrxagBvzp_TL4iJmaKATY8kfEiJSPs_QZl72sXo6EMxqx2iLksUy_AX-ASe3Kj3U5l9JqdtdfEfr2yWmV1iseV3Ri3QOP8S5bfPyrgXW2N63L34NyCClnEIA6vgnFW5QExToR-tEwDhX58IdswKw81M5abXHWXe6YFYsB-1OMyX4LBvPguOU-Ubt2Q1e4vPl9eu6bykBTaODq44OD9hR4LjxYPlDkKp2vgWEJnf-gMKSy8LRAyS3xI8"
                  alt="T-shirt"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-[4/5] bg-surface-container-lowest rounded-xl p-2 cursor-pointer border-2 border-transparent hover:border-primary/30 transition-all">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJY_QOxBKYalpcXXEwyCEhn24hwO-rkerSk2EUfTmX8TK54EtwBy1sRjrllt_9VPawEZCiVLA3_YErYMMfbjlI7HJ660fvBU7z7ihAOBoEnYib0rgtfTPeca-mXCgXg4cmos3YGoeCa8h9QrEwcK5hpxGHDS2jPin80fGaDPpeHT8k3KjmIX35-AwYCad79WwT5bClV1O-_Smlg7pVawJZzX6QS98xskDb6t7lz09bP06Y89JNXBWSdzeMIDpYbGJrR7RfGx_f7cY"
                  alt="Dress"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-[4/5] bg-surface-container-lowest flex flex-col items-center justify-center rounded-xl p-2 cursor-pointer border-2 border-dashed border-outline-variant/40 hover:bg-surface-container-high transition-all">
                <Plus className="text-outline-variant mb-1 w-6 h-6" />
                <span className="text-[10px] text-outline-variant font-bold">Yeni Yükle</span>
              </div>
            </div>
          </div>

          {/* 2. Child Profile Selection */}
          <div className="bg-surface-container-low p-8 rounded-3xl">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
              <Baby className="text-primary w-6 h-6" />
              Çocuk Profili
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="text-xs font-bold text-outline uppercase tracking-widest mb-4 block">Yaş Grubu</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 px-4 rounded-xl bg-surface-container-lowest text-sm font-medium border-2 border-transparent hover:border-primary/30 transition-all">3-6m</button>
                  <button className="py-3 px-4 rounded-xl bg-primary text-on-primary text-sm font-bold border-2 border-primary shadow-sm">6-12m</button>
                  <button className="py-3 px-4 rounded-xl bg-surface-container-lowest text-sm font-medium border-2 border-transparent hover:border-primary/30 transition-all">12-18m</button>
                  <button className="py-3 px-4 rounded-xl bg-surface-container-lowest text-sm font-medium border-2 border-transparent hover:border-primary/30 transition-all">18m+</button>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-outline uppercase tracking-widest mb-4 block">Cilt Tonu</label>
                <div className="flex flex-wrap gap-3">
                  <button className="w-10 h-10 rounded-full bg-[#FFE3D4] border-2 border-primary ring-2 ring-offset-2 ring-primary/20"></button>
                  <button className="w-10 h-10 rounded-full bg-[#F3D1B5] border-2 border-transparent hover:scale-110 transition-transform"></button>
                  <button className="w-10 h-10 rounded-full bg-[#D19B74] border-2 border-transparent hover:scale-110 transition-transform"></button>
                  <button className="w-10 h-10 rounded-full bg-[#8D5524] border-2 border-transparent hover:scale-110 transition-transform"></button>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Scenario Selection */}
          <div className="bg-surface-container-low p-8 rounded-3xl">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
              <Film className="text-primary w-6 h-6" />
              Senaryo Seçimi
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <button className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-2 ring-2 ring-primary ring-offset-4 ring-offset-surface-container-low">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4568FusI6wg_k--dMBpNyZAAxSf8g4W7NIx4EpobitFd7MpqLr2KeUZw35bo1b_rf47IBSbEciNFW4xA-xOGduWEclsojuQtbQkClKi8BfiIiTZ5EoNe2rlIR58lSK-uCQkSDzUp4CzHz1xk1lyi38CGMDEveH23Zs1cpCmg_U2yr5TxyF9carfoR3UbuMDcoVwy_MtafQopVyWEzjF4x0Nx2PE6YQ1u5ZEwGQxnU8eu7y7Q-a50-fnnH0BpC4O3tqQbdElIOQBs"
                    alt="Ev Ortamı"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-primary">Ev Ortamı</span>
              </button>
              <button className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEUFEwYxt2Zk1G7-XQ3pypxuLRxYMREFcNtuG8yJkV1bGNsAmsKE34naNP0Ku7jmmCtTz2sicVT6p81do5ShCAyNHXzfBqHuyZMkEOnaxYknitc_nJrkX4SuSrWO6nRg5zS9IJhIS-iFfPZw-escPSmuLqlGb7_6_AjHifpk_20Y5uY2Kr0OYYlcouqmSN6dDcqiGisRAAXeuZZFL-AWnX2ntqWqzLCx_doq48Y04RJa4fXOd90aFHDByvyEKtPV4OGTga6Sd-iwU"
                    alt="Oyun Parkı"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">Oyun Parkı</span>
              </button>
              <button className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjtcfUN0D6worVJElkFLXi6A1_6AQs5on2ltrqS0lQwNC3yUSjBFLKhSkftN8bnAHeyYmY-vzPjRR6tCo-3c3-KN3BduBa_wFfoF7fzsJEtDJFPPdFDuJBQLyUOTnHoaLa60Z4TITZfUsRqMm7BJrlHOppbsKDwoA0gIn9CevsGp-r4dgrm0QauidqVPHX1c_BVgHhg-kHVWxV66ldNfRvrDMdaiBRVa_A-nSgDaV_Y5owZMaGAen5V-8nMIsowvTSveBf3OC8rpQ"
                    alt="Plaj"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">Plaj</span>
              </button>
              <button className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQD1iOSwfWKVOCKY0IjcVv7N-HdemE8kSY8PTyigtCS76e65JAh8rA3vxxgB1cizmMSOzRAXuZ3N7jew0CdwFlwVl3pObCtnAFYPxqdvoyuS9KBHFa_BzYJEinc_NKJrxWvbXcMrpaD4DY98_-9crK0awyK2H3Ex9BYVuzSDfIo_lAJd6QKE2r055RpeY9Jx114oNqozNp9oq9QpZFKaPZOq4xwZLGSdX7tDYE_T9CVbFtuXCWBTknFA6Ec2OD1Xb8eZiDPMoKp5E"
                    alt="Doğum Günü"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">Doğum Günü</span>
              </button>
            </div>
          </div>

          {/* 4. Generate Button */}
          <button className="w-full h-20 bg-gradient-to-br from-primary to-primary-dim text-on-primary rounded-3xl font-headline text-xl font-extrabold flex items-center justify-center gap-4 hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-primary/20 group">
            <Wand2 className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            VİDEOYU OLUŞTUR
            <span className="text-sm font-normal opacity-70">(6-10 Saniye)</span>
          </button>
        </section>

        {/* Results Area */}
        <aside className="col-span-12 lg:col-span-5">
          <div className="sticky top-28 space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-2xl shadow-on-surface/5 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Play className="text-primary w-5 h-5" />
                  Önizleme
                </h3>
                <span className="text-[10px] font-bold text-primary-dim bg-primary-container px-2 py-1 rounded-full uppercase tracking-tighter">
                  Yeni Oluşturuldu
                </span>
              </div>

              {/* Video Player Preview */}
              <div className="aspect-[9/16] bg-black rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="text-white w-10 h-10 fill-current" />
                  </div>
                </div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7sUsdFkcLV828GWpbzt86ksxIItSkY8Wy_XcYLKh6EXRa7DqCouvhJhSgYwXXTGXtUWe9YwBc8IwqiNy7D6BYm4T_YkWfis0vRQpS815TUOuiPevaRzcNQ0cz_Cp3q_9Uw6uWofOnWyoCoF9hUTP73Uk9r7zPTLPPCx3g_UKtkO-RlMqYlbx5nuA5EF9mS18EQKO2gy5mp3MQXzvZA9SG4lR5d5zjuWP6W95sxORFNaw_CcaDusKLyhfbnJpI9XhH_Ik-wPWY-ec"
                  alt="Video Preview"
                  className="w-full h-full object-cover opacity-80"
                />
                {/* Video Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center justify-between text-white mb-2">
                      <span className="text-xs font-bold">00:08</span>
                      <span className="text-xs font-bold opacity-60">4K / 30fps</span>
                    </div>
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-surface-container-high text-on-surface font-bold text-sm hover:bg-surface-container-highest transition-all group">
                  <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                  İndir
                </button>
                <button className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-primary text-on-primary font-bold text-sm hover:bg-primary-dim transition-all shadow-md shadow-primary/20">
                  <ImageIcon className="w-5 h-5" />
                  Galeriye Ekle
                </button>
              </div>
              <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl text-error font-bold text-xs uppercase tracking-widest hover:bg-error-container/10 transition-all">
                <Trash2 className="w-4 h-4" />
                Sonucu Sil
              </button>
            </div>

            {/* Info Card */}
            <div className="bg-primary-dim text-on-primary p-6 rounded-[2rem]">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                İpucu
              </h4>
              <p className="text-sm opacity-80 leading-relaxed">
                En iyi sonuçlar için yüksek çözünürlüklü ürün fotoğrafları kullanın. Video üretim süreci yaklaşık 45 saniye sürmektedir.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
