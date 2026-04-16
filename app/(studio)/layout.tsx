import { Sidebar } from '@/components/Sidebar';

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 bg-surface p-4 sm:p-6 lg:p-10 overflow-y-auto">{children}</main>
    </div>
  );
}
