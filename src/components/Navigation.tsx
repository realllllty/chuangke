import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { name: '首页', path: '/' },
  { name: '数字人生成', path: '/digital-human' },
  { name: '脚本生成', path: '/script' },
  { name: '智能剪辑', path: '/editing' },
  { name: '素材市场', path: '/materials' },
  { name: '创作助手', path: '/assistant' },
  { name: '公益服务', path: '/charity' },
];

const authItems = [
  { name: '登录', path: '/login' },
  { name: '免费试用', path: '/trial', isHighlight: true },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">创</span>
              </div>
              <span className="font-bold text-xl">创客</span>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Items */}
          <div className="flex items-center space-x-4">
            {authItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors',
                  item.isHighlight
                    ? 'bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90'
                    : 'text-muted-foreground hover:text-primary'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-muted-foreground hover:text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}