import type { Metadata } from 'next';
import { TopNav } from '@/components/TopNav';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kidseria AI — Çocuk Kıyafet Giydirme Stüdyosu',
  description: 'Yapay zekâ destekli çocuk kıyafeti fotoğraf ve video üretim stüdyosu.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body suppressHydrationWarning>
        <div className="min-h-screen flex flex-col">
          <TopNav />
          <div className="flex-1 flex flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
