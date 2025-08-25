import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { MagicBackground } from './MagicBackground';

export function Layout() {
  return (
    <div className="min-h-screen bg-background relative">
      <MagicBackground />
      <Navigation />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Outlet />
      </main>
    </div>
  );
}