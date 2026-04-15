import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function StudioLayout() {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 bg-surface p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
