'use client';

import { useState } from 'react';
import { Search, Play, Download, Image as ImageIcon, Trash2, Lightbulb, Wand2, Shirt, Baby, Film, Check, ZoomIn, X, Clock, MessageSquare } from 'lucide-react';
import { catalogItems, type CatalogItem } from '@/lib/catalog';

const ageGroups = ['3-6m', '6-12m', '12-18m', '18m+'];
const skinTones = ['#FFE3D4', '#F3D1B5', '#D19B74', '#8D5524'];
const scenarios = [
  { id: 'home', label: 'Ev Ortamı', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4568FusI6wg_k--dMBpNyZAAxSf8g4W7NIx4EpobitFd7MpqLr2KeUZw35bo1b_rf47IBSbEciNFW4xA-xOGduWEclsojuQtbQkClKi8BfiIiTZ5EoNe2rlIR58lSK-uCQkSDzUp4CzHz1xk1lyi38CGMDEveH23Zs1cpCmg_U2yr5TxyF9carfoR3UbuMDcoVwy_MtafQopVyWEzjF4x0Nx2PE6YQ1u5ZEwGQxnU8eu7y7Q-a50-fnnH0BpC4O3tqQbdElIOQBs' },
  { id: 'playground', label: 'Oyun Parkı', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEUFEwYxt2Zk1G7-XQ3pypxuLRxYMREFcNtuG8yJkV1bGNsAmsKE34naNP0Ku7jmmCtTz2sicVT6p81do5ShCAyNHXzfBqHuyZMkEOnaxYknitc_nJrkX4SuSrWO6nRg5zS9IJhIS-iFfPZw-escPSmuLqlGb7_6_AjHifpk_20Y5uY2Kr0OYYlcouqmSN6dDcqiGisRAAXeuZZFL-AWnX2ntqWqzLCx_doq48Y04RJa4fXOd90aFHDByvyEKtPV4OGTga6Sd-iwU' },
  { id: 'beach', label: 'Plaj', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjtcfUN0D6worVJElkFLXi6A1_6AQs5on2ltrqS0lQwNC3yUSjBFLKhSkftN8bnAHeyYmY-vzPjRR6tCo-3c3-KN3BduBa_wFfoF7fzsJEtDJFPPdFDuJBQLyUOTnHoaLa60Z4TITZfUsRqMm7BJrlHOppbsKDwoA0gIn9CevsGp-r4dgrm0QauidqVPHX1c_BVgHhg-kHVWxV66ldNfRvrDMdaiBRVa_A-nSgDaV_Y5owZMaGAen5V-8nMIsowvTSveBf3OC8rpQ' },
  { id: 'birthday', label: 'Doğum Günü', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQD1iOSwfWKVOCKY0IjcVv7N-HdemE8kSY8PTyigtCS76e65JAh8rA3vxxgB1cizmMSOzRAXuZ3N7jew0CdwFlwVl3pObCtnAFYPxqdvoyuS9KBHFa_BzYJEinc_NKJrxWvbXcMrpaD4DY98_-9crK0awyK2H3Ex9BYVuzSDfIo_lAJd6QKE2r055RpeY9Jx114oNqozNp9oq9QpZFKaPZOq4xwZLGSdX7tDYE_T9CVbFtuXCWBTknFA6Ec2OD1Xb8eZiDPMoKp5E' },
];

export default function VideoStudioPage() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAge, setSelectedAge] = useState('6-12m');
  const [selectedSkin, setSelectedSkin] = useState('#FFE3D4');
  const [selectedScenario, setSelectedScenario] = useState('home');
  const [duration, setDuration] = useState(6);
  const [prompt, setPrompt] = useState('');
  const [lightbox, setLightbox] = useState<CatalogItem | null>(null);

  const filteredItems = searchQuery.trim()
    ? catalogItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : catalogItems.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8 sm:mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-full">
            Video Stüdyosu
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
          Yeni Hikayeni Oluştur
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-base sm:text-lg">
          Yapay zeka gücüyle ürünlerinizi hayat dolu videolara dönüştürün. Sadece çocuk profilini, kıyafetleri ve senaryoyu seçin.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Configuration Panel */}
        <section className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* 1. Clothing Selection Area */}
          <div className="bg-surface-container-low p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
              <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                <Shirt className="text-primary w-5 sm:w-6 h-5 sm:h-6" />
                Kıyafet Seçimi
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="İsim veya ürün kodu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-surface-container-lowest border-none rounded-full px-6 py-2 text-sm w-full sm:w-64 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-outline-variant/60"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant w-4 h-4" />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.code}
                  onClick={() => setSelectedItem(item.code === selectedItem ? null : item.code)}
                  className={`bg-surface-container-lowest rounded-xl p-1.5 sm:p-2 cursor-pointer transition-all relative group ${
                    selectedItem === item.code
                      ? 'border-2 border-primary'
                      : 'border-2 border-transparent hover:border-primary/30'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 sm:h-40 object-cover rounded-lg"
                  />
                  <button
                    onClick={(e) => { e.stopPropagation(); setLightbox(item); }}
                    className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/80 backdrop-blur text-on-surface p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white cursor-zoom-in z-10"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute bottom-1.5 sm:bottom-2 inset-x-1.5 sm:inset-x-2 p-1.5 sm:p-2 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                    <p className="text-white font-bold text-[9px] sm:text-[10px]">{item.name}</p>
                    <p className="text-white/70 text-[8px] sm:text-[9px]">KOD: {item.code}</p>
                  </div>
                  {selectedItem === item.code && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-primary text-white p-0.5 rounded-full">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 2. Child Profile Selection */}
          <div className="bg-surface-container-low p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
            <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 mb-4 sm:mb-6">
              <Baby className="text-primary w-5 sm:w-6 h-5 sm:h-6" />
              Çocuk Profili
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <label className="text-xs font-bold text-outline uppercase tracking-widest mb-3 sm:mb-4 block">Yaş Grubu</label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {ageGroups.map((age) => (
                    <button
                      key={age}
                      onClick={() => setSelectedAge(age)}
                      className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-sm transition-all ${
                        selectedAge === age
                          ? 'bg-primary text-on-primary font-bold border-2 border-primary shadow-sm'
                          : 'bg-surface-container-lowest font-medium border-2 border-transparent hover:border-primary/30'
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-outline uppercase tracking-widest mb-3 sm:mb-4 block">Cilt Tonu</label>
                <div className="flex flex-wrap gap-3">
                  {skinTones.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedSkin(tone)}
                      className={`w-10 h-10 rounded-full border-2 transition-transform ${
                        selectedSkin === tone
                          ? 'border-primary ring-2 ring-offset-2 ring-primary/20'
                          : 'border-transparent hover:scale-110'
                      }`}
                      style={{ backgroundColor: tone }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Scenario Selection */}
          <div className="bg-surface-container-low p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
            <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 mb-4 sm:mb-6">
              <Film className="text-primary w-5 sm:w-6 h-5 sm:h-6" />
              Senaryo Seçimi
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {scenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  onClick={() => setSelectedScenario(scenario.id)}
                  className="group text-left"
                >
                  <div className={`aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-2 transition-all ${
                    selectedScenario === scenario.id
                      ? 'ring-2 ring-primary ring-offset-2 sm:ring-offset-4 ring-offset-surface-container-low'
                      : 'grayscale opacity-70 hover:grayscale-0 hover:opacity-100'
                  }`}>
                    <img
                      src={scenario.image}
                      alt={scenario.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className={`text-xs font-bold transition-colors ${
                    selectedScenario === scenario.id
                      ? 'text-primary'
                      : 'text-on-surface-variant group-hover:text-primary'
                  }`}>
                    {scenario.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Duration */}
          <div className="bg-surface-container-low p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
            <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 mb-4 sm:mb-6">
              <Clock className="text-primary w-5 sm:w-6 h-5 sm:h-6" />
              Video Süresi
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Süre</span>
                <span className="text-sm font-bold text-primary">{duration} Saniye</span>
              </div>
              <input
                type="range"
                min={3}
                max={15}
                step={1}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full h-2 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-on-surface-variant font-medium">
                <span>3s</span>
                <span>15s</span>
              </div>
            </div>
          </div>

          {/* 5. Prompt */}
          <div className="bg-surface-container-low p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
            <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 mb-4 sm:mb-6">
              <MessageSquare className="text-primary w-5 sm:w-6 h-5 sm:h-6" />
              Prompt
              <span className="text-xs font-normal text-on-surface-variant">(İsteğe bağlı)</span>
            </h3>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Örn: Bebek parkta neşeyle koşuyor, güneşli bir gün..."
              rows={3}
              className="w-full bg-surface-container-lowest border-0 ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary rounded-xl py-3 px-4 text-sm transition-all outline-none resize-none placeholder:text-outline-variant/60"
            />
          </div>

          {/* 6. Generate Button */}
          <button className="w-full h-16 sm:h-20 bg-gradient-to-br from-primary to-primary-dim text-on-primary rounded-2xl sm:rounded-3xl font-headline text-lg sm:text-xl font-extrabold flex items-center justify-center gap-3 sm:gap-4 hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-primary/20 group">
            <Wand2 className="w-6 sm:w-8 h-6 sm:h-8 group-hover:rotate-12 transition-transform" />
            VİDEOYU OLUŞTUR
            <span className="text-xs sm:text-sm font-normal opacity-70">({duration} Saniye)</span>
          </button>
        </section>

        {/* Results Area */}
        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 space-y-6">
            <div className="bg-surface-container-lowest p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] shadow-2xl shadow-on-surface/5 overflow-hidden">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <Play className="text-primary w-5 h-5" />
                  Önizleme
                </h3>
                <span className="text-[10px] font-bold text-primary-dim bg-primary-container px-2 py-1 rounded-full uppercase tracking-tighter">
                  Yeni Oluşturuldu
                </span>
              </div>

              {/* Video Player Preview */}
              <div className="aspect-[9/16] bg-black rounded-2xl sm:rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="text-white w-8 sm:w-10 h-8 sm:h-10 fill-current" />
                  </div>
                </div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7sUsdFkcLV828GWpbzt86ksxIItSkY8Wy_XcYLKh6EXRa7DqCouvhJhSgYwXXTGXtUWe9YwBc8IwqiNy7D6BYm4T_YkWfis0vRQpS815TUOuiPevaRzcNQ0cz_Cp3q_9Uw6uWofOnWyoCoF9hUTP73Uk9r7zPTLPPCx3g_UKtkO-RlMqYlbx5nuA5EF9mS18EQKO2gy5mp3MQXzvZA9SG4lR5d5zjuWP6W95sxORFNaw_CcaDusKLyhfbnJpI9XhH_Ik-wPWY-ec"
                  alt="Video Preview"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                  <div className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20">
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
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                <button className="flex items-center justify-center gap-2 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-surface-container-high text-on-surface font-bold text-sm hover:bg-surface-container-highest transition-all group">
                  <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                  İndir
                </button>
                <button className="flex items-center justify-center gap-2 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-primary text-on-primary font-bold text-sm hover:bg-primary-dim transition-all shadow-md shadow-primary/20">
                  <ImageIcon className="w-5 h-5" />
                  Galeriye Ekle
                </button>
              </div>
              <button className="w-full mt-3 sm:mt-4 flex items-center justify-center gap-2 py-3 rounded-xl text-error font-bold text-xs uppercase tracking-widest hover:bg-error-container/10 transition-all">
                <Trash2 className="w-4 h-4" />
                Sonucu Sil
              </button>
            </div>

            {/* Info Card */}
            <div className="bg-primary-dim text-on-primary p-4 sm:p-6 rounded-2xl sm:rounded-[2rem]">
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

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
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
