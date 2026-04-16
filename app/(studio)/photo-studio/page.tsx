'use client';

import { useState } from 'react';
import { Search, Baby, Map, Check, Sparkles, Image as ImageIcon, Trash2, RectangleHorizontal, RectangleVertical, Monitor, ZoomIn, X, MessageSquare } from 'lucide-react';
import { catalogItems, type CatalogItem } from '@/lib/catalog';

const ageGroups = ['3-6 Ay', '6-12 Ay', '12-18 Ay', '18+ Ay'];
const ratios = [
  { id: '9:16', label: '9:16', icon: RectangleVertical, desc: 'Dikey' },
  { id: '16:9', label: '16:9', icon: RectangleHorizontal, desc: 'Yatay' },
];
const resolutions = [
  { id: '1k', label: '1K', desc: '1024px' },
  { id: '2k', label: '2K', desc: '2048px' },
  { id: '4k', label: '4K', desc: '4096px' },
];
const skinTones = ['#FCE2C4', '#E5B087', '#AD7A52', '#8D5524'];
const environments = [
  { id: 'studio', label: 'Stüdyo', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHy17uTNk9P5GJkemQEPhrLTfIiGKrEa25iySS7RAPeKaQAj9DPfuzWBPGHe2qkW_51w4VK4rg7vV81x-uX5EWy-zJs83VjjOWJPOQNuhxHU-5J-ELBZj6F0zEqo_s8BziwrBdaT8NjsnIW3z51SyMpXhnjC6Vt3nhhRN6A6rUVTG-XQgDRXKziZ02ufTAOdpf1S5QtTOFWCf9KCOMF-3XQV7_hYFif0-mVQosKRqMmYCYKRaUbzFQPn27wufe0b0f66eBH1PLc7I' },
  { id: 'home', label: 'Ev', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTrqUahF1LDFk99LK_kQK17g5sZCqdjTINa2I7sMk-_hJh9-bjOJtjdGYMePj7wkuiuOpm2VoIkelcAHoqn42d4dGHFmStouBaLB16NZoyyQ2oAca7qVUwDs37xkCqfwB0MfjeDmSIDy_z8pN2xGlQBJrDqkzHs2atsftP8dnQVqb3xjauo6GDfAXFy19QZlBZDUoeoDqTN65Q3q2Pxl9BKGKo0ctWqfNtRKqFNBXadnF4bMky5ko5pmoGaTBq-jf1gzUwouoWhlY' },
  { id: 'park', label: 'Park', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9uUTaBMGHbyC7rUhkkOMFN8v8hcluTNGbJ3ypdOV4dpepnYuZXXlaVcJPf3yUtr16j357Gqu1MZyqKDfQwZO_v90VrtSmMNCq_1x-r9a_JsocrgKqkuhrIYCNBWzPaZa50OFDtxN-jtOU1wK84FdGbQKOLBShLFMdx_Nz6KiHiBADOs7VQNmX55X8EfehvtI6A6ZsV3902VKGgjG3TgZPPNcqUxGJm1Myui18qXyMAt8bRB29whlHOF2psdFtPat0sXSo8YLQ70c' },
  { id: 'beach', label: 'Sahil', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4sum7j9KpTllLzfgqBJx0bz_wcexqxb2C9r0-sWeL0CPZoyUk5-2g4QbJ6p1Y8AMgRHXmSu0orP9vUFNmnDhzFxRNzMXwqk5X9UTBvX_CI0gP_3c27i_-kzuq6L-ivXPDTPmdGDDwmOjzofKnQ8zwSGKhuc4tQNzWoA1m0oAaCbC7su0IwIwEj3l-TTatuFVMTmnLDhfhjG4QyTzyumvVG5TGVJsNDTn9_fQKJIEpAtcHsZcLBx-EvzdtWTdXBK7YvVflPuO_ht8' },
];

export default function PhotoStudioPage() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAge, setSelectedAge] = useState('3-6 Ay');
  const [selectedSkin, setSelectedSkin] = useState('#FCE2C4');
  const [selectedEnv, setSelectedEnv] = useState('studio');
  const [selectedRatio, setSelectedRatio] = useState('9:16');
  const [selectedResolution, setSelectedResolution] = useState('2k');
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
    <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
      {/* Section 1: Hero & Config */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
        <div className="lg:col-span-4 space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Fotoğraf Stüdyosu</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-on-surface">Hayalindeki Çekimi Tasarla</h1>
            <p className="text-on-surface-variant text-sm">Gelişmiş AI teknolojimizle bebeğinizin en şık anlarını stüdyo kalitesinde oluşturun.</p>
          </div>

          {/* 2. Child Profile Selection */}
          <div className="bg-surface-container-low rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <Baby className="w-4 h-4" />
                Çocuk Profili
              </label>
              <div className="grid grid-cols-2 gap-2">
                {ageGroups.map((age) => (
                  <button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    className={`py-2 px-3 rounded-lg text-xs text-center transition-all ${
                      selectedAge === age
                        ? 'bg-surface-container-lowest border border-primary text-primary font-semibold'
                        : 'bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant font-medium hover:border-primary'
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Cilt Tonu</label>
              <div className="flex gap-3">
                {skinTones.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedSkin(tone)}
                    className={`w-8 h-8 rounded-full transition-all ${
                      selectedSkin === tone
                        ? 'ring-2 ring-primary ring-offset-2'
                        : 'hover:ring-2 hover:ring-primary/50'
                    }`}
                    style={{ backgroundColor: tone }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 3. Environment Selection */}
          <div className="bg-surface-container-low rounded-2xl p-4 sm:p-6 space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <Map className="w-4 h-4" />
              Ortam Seçimi
            </label>
            <div className="grid grid-cols-2 gap-3">
              {environments.map((env) => (
                <button
                  key={env.id}
                  onClick={() => setSelectedEnv(env.id)}
                  className={`relative group overflow-hidden rounded-xl transition-all ${
                    selectedEnv === env.id
                      ? 'border-2 border-primary'
                      : 'border border-outline-variant/15 hover:border-primary/50'
                  }`}
                >
                  <img
                    src={env.image}
                    alt={env.label}
                    className={`w-full h-20 object-cover ${selectedEnv === env.id ? 'opacity-80' : ''}`}
                  />
                  <div className={`absolute inset-0 flex items-center justify-center ${
                    selectedEnv === env.id ? 'bg-primary/20' : 'bg-black/30'
                  }`}>
                    <span className="text-white font-bold text-xs">{env.label}</span>
                  </div>
                  {selectedEnv === env.id && (
                    <div className="absolute top-2 right-2 bg-primary text-white p-0.5 rounded-full">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Ratio & Resolution */}
          <div className="bg-surface-container-low rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                Görüntü Ayarları
              </label>

              {/* Ratio */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Oran</span>
                <div className="grid grid-cols-2 gap-2">
                  {ratios.map((ratio) => {
                    const Icon = ratio.icon;
                    return (
                      <button
                        key={ratio.id}
                        onClick={() => setSelectedRatio(ratio.id)}
                        className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs transition-all ${
                          selectedRatio === ratio.id
                            ? 'bg-surface-container-lowest border border-primary text-primary font-semibold'
                            : 'bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant font-medium hover:border-primary'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{ratio.label}</span>
                        <span className="text-[10px] opacity-60">({ratio.desc})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Resolution */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Çözünürlük</span>
                <div className="grid grid-cols-3 gap-2">
                  {resolutions.map((res) => (
                    <button
                      key={res.id}
                      onClick={() => setSelectedResolution(res.id)}
                      className={`py-2.5 px-3 rounded-lg text-xs text-center transition-all ${
                        selectedResolution === res.id
                          ? 'bg-surface-container-lowest border border-primary text-primary font-semibold'
                          : 'bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant font-medium hover:border-primary'
                      }`}
                    >
                      <span className="font-bold">{res.label}</span>
                      <span className="block text-[10px] opacity-60 mt-0.5">{res.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5. Prompt */}
          <div className="bg-surface-container-low rounded-2xl p-4 sm:p-6 space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Prompt
              <span className="text-[10px] font-normal text-on-surface-variant normal-case tracking-normal">(İsteğe bağlı)</span>
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Örn: Bebek stüdyoda gülümsüyor, pastel arka plan..."
              rows={3}
              className="w-full bg-surface-container-lowest border-0 ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary rounded-xl py-3 px-4 text-sm transition-all outline-none resize-none placeholder:text-outline-variant/60"
            />
          </div>
        </div>

        {/* 1. Clothing Selection Area */}
        <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6">
          <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-[0_20px_40px_rgba(42,52,51,0.04)] flex-1 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">Kıyafet Seçimi</h3>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Ürün adı veya kod..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface-container-low border-0 rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
                />
              </div>
            </div>

            {/* Clothing Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.code}
                  onClick={() => setSelectedItem(item.code === selectedItem ? null : item.code)}
                  className={`relative group rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all ${
                    selectedItem === item.code
                      ? 'border-2 border-primary'
                      : 'border border-outline-variant/10 hover:border-primary'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={(e) => { e.stopPropagation(); setLightbox(item); }}
                    className="absolute top-2 right-2 bg-white/80 backdrop-blur text-on-surface p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white cursor-zoom-in z-10"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white font-bold text-[10px] sm:text-xs">{item.name}</p>
                    <p className="text-white/80 text-[9px] sm:text-[10px]">KOD: {item.code}</p>
                  </div>
                  {selectedItem === item.code && (
                    <div className="absolute top-2 left-2 bg-primary text-white p-1 rounded-full">
                      <Check className="w-3 sm:w-4 h-3 sm:h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 4. Large Generate Button */}
          <button className="w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-primary-dim text-white font-extrabold text-base sm:text-lg flex items-center justify-center gap-3 sm:gap-4 shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all">
            <Sparkles className="w-5 sm:w-6 h-5 sm:h-6" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Main Preview */}
          <div className="relative aspect-[4/5] rounded-2xl sm:rounded-[2rem] overflow-hidden bg-surface-container-low shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjbMTpomYlYBPlWxbC65nqSipCFzYXKPbTlTaI9OzNYSTtCvnrBm-RGEpBtSGkdsCegHxELzo3lFbdp9fDgvFq8llYT-jNWLGsRWK_2FrI1biYk44vcAu2DnEx2Yxn_p3EXiMTSlvj-9LnVkYsWFRAVbGN1Ia6Gq8NVxPwJphBLn2W6rzqhK0q8YqOuSSbCyTJzl4zbUvzpWuuUKDNhMyvi0SOhCbXMzt0sFm1jefPYkk12JV5k_JDSmzkWy4sOIPooD4bWJ8c5wI"
              alt="Result"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 sm:bottom-8 inset-x-4 sm:inset-x-8 flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary-container flex items-center justify-center">
                  <Check className="text-primary w-4 sm:w-5 h-4 sm:h-5" />
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-primary text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-xs font-bold flex items-center gap-1 sm:gap-2 hover:bg-primary-dim transition-all">
                  <ImageIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Galeriye Ekle</span>
                </button>
                <button className="bg-white/50 text-error p-2 rounded-lg sm:rounded-xl hover:bg-error-container/20 transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-8 sm:py-12 border-t border-outline-variant/10 mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto flex justify-center">
          <span className="text-xl font-bold tracking-tighter text-teal-800 font-headline">Kidseria</span>
        </div>
      </footer>

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
