'use client';

import { useState, useCallback } from 'react';
import { Search, Play, Download, Image as ImageIcon, Trash2, Lightbulb, Wand2, Shirt, Baby, Film, Check, ZoomIn, X, Clock, MessageSquare, Loader2, Sparkles } from 'lucide-react';
import { catalogItems, type CatalogItem } from '@/lib/catalog';

const ageGroups = ['3-6 Ay', '6-12 Ay', '12-18 Ay', '18+ Ay'];
const skinTones = ['#FCE2C4', '#E5B087', '#AD7A52', '#8D5524'];
const scenarios = [
  { id: 'home', label: 'Ev Ortamı', image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=600&q=80' },
  { id: 'playground', label: 'Oyun Parkı', image: 'https://images.pexels.com/photos/5623065/pexels-photo-5623065.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'beach', label: 'Sahil', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80' },
  { id: 'birthday', label: 'Doğum Günü', image: 'https://images.pexels.com/photos/7180612/pexels-photo-7180612.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'park', label: 'Park', image: 'https://images.pexels.com/photos/8033865/pexels-photo-8033865.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'forest', label: 'Orman', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80' },
];

const ageMap: Record<string, string> = {
  '3-6 Ay': '3-6 month old baby',
  '6-12 Ay': '6-12 month old baby',
  '12-18 Ay': '12-18 month old toddler',
  '18+ Ay': '18+ month old toddler',
};

const skinMap: Record<string, string> = {
  '#FCE2C4': 'fair/light',
  '#E5B087': 'medium/warm',
  '#AD7A52': 'olive/tan',
  '#8D5524': 'deep/dark',
};

const envMap: Record<string, string> = {
  home: 'a cozy and warm children\'s room at home with toys and soft lighting',
  playground: 'a colorful outdoor children\'s playground on a sunny day',
  beach: 'a beautiful sunny tropical beach with sand, sea and blue sky',
  birthday: 'a festive birthday party setting with colorful balloons and decorations',
  park: 'a sunny green park with trees and grass, natural daylight',
  forest: 'a magical sunlit green forest with trees and a path, fairy tale atmosphere',
};

function buildVideoPrompt(
  clothingName: string,
  age: string,
  skin: string,
  env: string,
  userPrompt: string,
): string {
  const parts = [
    `A cute ${ageMap[age] ?? age} with ${skinMap[skin] ?? 'light'} skin tone`,
    `wearing "${clothingName}" children's clothing outfit`,
    `in ${envMap[env] ?? 'a cozy home'}`,
    'happy and playful, natural movement, cinematic quality, soft natural lighting, adorable child video',
  ];

  if (userPrompt.trim()) {
    parts.push(userPrompt.trim());
  }

  return parts.join(', ') + '.';
}

type GenerationResult = {
  taskId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  videoUrl?: string;
  prompt: string;
};

export default function VideoStudioPage() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAge, setSelectedAge] = useState('6-12 Ay');
  const [selectedSkin, setSelectedSkin] = useState('#FCE2C4');
  const [selectedScenario, setSelectedScenario] = useState('home');
  const [duration, setDuration] = useState(5);
  const [prompt, setPrompt] = useState('');
  const [lightbox, setLightbox] = useState<CatalogItem | null>(null);

  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GenerationResult | null>(null);

  const filteredItems = searchQuery.trim()
    ? catalogItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : catalogItems.slice(0, 4);

  const selectedClothing = catalogItems.find((item) => item.code === selectedItem);

  const pollTaskStatus = useCallback(async (taskId: string, builtPrompt: string) => {
    const maxAttempts = 120; // 10 minutes max (video takes longer)
    for (let i = 0; i < maxAttempts; i++) {
      await new Promise((r) => setTimeout(r, 5000));

      try {
        const res = await fetch(`/api/task-status?taskId=${encodeURIComponent(taskId)}`);
        const data = await res.json();

        console.log(`[Video Poll #${i + 1}] taskId=${taskId}`, JSON.stringify(data, null, 2));

        const state = data?.data?.state;

        if (state === 'success' || state === 'succeed' || state === 'completed') {
          let resultData = null;
          try {
            resultData = data?.data?.resultJson ? JSON.parse(data.data.resultJson) : null;
          } catch {
            resultData = null;
          }

          const videoUrl =
            resultData?.resultUrls?.[0] ??
            resultData?.output?.video_url ??
            resultData?.video_url ??
            data?.data?.output?.video_url ??
            null;

          setResult({
            taskId,
            status: 'completed',
            videoUrl: videoUrl ?? undefined,
            prompt: builtPrompt,
          });
          setGenerating(false);
          return;
        }

        if (state === 'fail' || state === 'failed') {
          setError(`Video oluşturma başarısız oldu: ${data?.data?.failMsg ?? 'Bilinmeyen hata'}. Lütfen tekrar deneyin.`);
          setGenerating(false);
          return;
        }

        setResult((prev) =>
          prev ? { ...prev, status: 'processing' } : { taskId, status: 'processing', prompt: builtPrompt },
        );
      } catch {
        // network error, keep polling
      }
    }

    setError('İşlem zaman aşımına uğradı. Lütfen tekrar deneyin.');
    setGenerating(false);
  }, []);

  const handleGenerate = async () => {
    if (!selectedClothing) {
      setError('Lütfen bir kıyafet seçin.');
      return;
    }

    setError(null);
    setResult(null);
    setGenerating(true);

    const builtPrompt = buildVideoPrompt(
      selectedClothing.name,
      selectedAge,
      selectedSkin,
      selectedScenario,
      prompt,
    );

    const clothingImageUrl = selectedClothing.image;

    try {
      const res = await fetch('/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: builtPrompt,
          image_urls: [clothingImageUrl],
          duration: String(duration),
          aspect_ratio: '9:16',
          mode: 'pro',
          sound: false,
        }),
      });

      const data = await res.json();

      console.log('[Video Generate] Response:', JSON.stringify(data, null, 2));

      if (!res.ok || data?.code !== 200) {
        setError(data?.msg ?? data?.error ?? 'API hatası oluştu.');
        setGenerating(false);
        return;
      }

      const taskId = data?.data?.taskId;
      if (!taskId) {
        setError('Task ID alınamadı.');
        setGenerating(false);
        return;
      }

      setResult({ taskId, status: 'pending', prompt: builtPrompt });
      pollTaskStatus(taskId, builtPrompt);
    } catch {
      setError('Bağlantı hatası. Lütfen tekrar deneyin.');
      setGenerating(false);
    }
  };

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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
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
                min={5}
                max={10}
                step={5}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full h-2 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-on-surface-variant font-medium">
                <span>5s</span>
                <span>10s</span>
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
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="w-full h-16 sm:h-20 bg-gradient-to-br from-primary to-primary-dim text-on-primary rounded-2xl sm:rounded-3xl font-headline text-lg sm:text-xl font-extrabold flex items-center justify-center gap-3 sm:gap-4 hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-primary/20 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {generating ? (
              <>
                <Loader2 className="w-6 sm:w-8 h-6 sm:h-8 animate-spin" />
                VIDEO OLUŞTURULUYOR...
              </>
            ) : (
              <>
                <Wand2 className="w-6 sm:w-8 h-6 sm:h-8 group-hover:rotate-12 transition-transform" />
                VİDEOYU OLUŞTUR
                <span className="text-xs sm:text-sm font-normal opacity-70">({duration} Saniye)</span>
              </>
            )}
          </button>

          {error && (
            <div className="bg-error-container/20 border border-error/30 text-error rounded-2xl p-4 text-sm font-medium">
              {error}
            </div>
          )}
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
                {result?.status === 'completed' && (
                  <span className="text-[10px] font-bold text-primary-dim bg-primary-container px-2 py-1 rounded-full uppercase tracking-tighter">
                    Tamamlandı
                  </span>
                )}
              </div>

              {/* Video/Loading/Empty State */}
              {generating && !result?.videoUrl && (
                <div className="aspect-[9/16] bg-black rounded-2xl sm:rounded-3xl relative overflow-hidden flex flex-col items-center justify-center">
                  <Loader2 className="w-12 h-12 text-white animate-spin mb-4" />
                  <p className="text-white/80 text-sm font-medium">Video oluşturuluyor...</p>
                  <p className="text-white/50 text-xs mt-1">Bu birkaç dakika sürebilir</p>
                </div>
              )}

              {result?.videoUrl && (
                <div className="aspect-[9/16] bg-black rounded-2xl sm:rounded-3xl relative overflow-hidden">
                  <video
                    src={result.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {!generating && !result?.videoUrl && (
                <div className="aspect-[9/16] bg-surface-container-low rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-on-surface-variant/50">
                  <Film className="w-12 h-12 mb-3" />
                  <p className="text-sm">Henüz bir video oluşturulmadı.</p>
                  <p className="text-xs mt-1">Seçenekleri belirleyip butona tıklayın.</p>
                </div>
              )}

              {/* Action Buttons */}
              {result?.videoUrl && (
                <>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                    <a
                      href={result.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-surface-container-high text-on-surface font-bold text-sm hover:bg-surface-container-highest transition-all group"
                    >
                      <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                      İndir
                    </a>
                    <button
                      onClick={() => {
                        if (!result?.videoUrl) return;
                        const gallery = JSON.parse(localStorage.getItem('kidseria_gallery') || '[]');
                        gallery.unshift({
                          id: result.taskId,
                          url: result.videoUrl,
                          prompt: result.prompt,
                          type: 'video',
                          createdAt: new Date().toISOString(),
                        });
                        localStorage.setItem('kidseria_gallery', JSON.stringify(gallery));
                        alert('Video galeriye eklendi!');
                      }}
                      className="flex items-center justify-center gap-2 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-primary text-on-primary font-bold text-sm hover:bg-primary-dim transition-all shadow-md shadow-primary/20"
                    >
                      <Sparkles className="w-5 h-5" />
                      Galeriye Ekle
                    </button>
                  </div>
                  <button
                    onClick={() => setResult(null)}
                    className="w-full mt-3 sm:mt-4 flex items-center justify-center gap-2 py-3 rounded-xl text-error font-bold text-xs uppercase tracking-widest hover:bg-error-container/10 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                    Sonucu Sil
                  </button>
                </>
              )}
            </div>

            {/* Info Card */}
            <div className="bg-primary-dim text-on-primary p-4 sm:p-6 rounded-2xl sm:rounded-[2rem]">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                İpucu
              </h4>
              <p className="text-sm opacity-80 leading-relaxed">
                En iyi sonuçlar için yüksek çözünürlüklü ürün fotoğrafları kullanın. Video üretim süreci yaklaşık 1-3 dakika sürmektedir.
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
