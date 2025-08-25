import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b shadow-lg'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Logo />
            </motion.div>

            {/* Navigation Items */}
            <motion.div
              className="hidden lg:flex items-center space-x-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="relative"
                  >
                    <Link
                      to={item.path}
                      className={cn(
                        'relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg group',
                        isActive
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {item.name}
                      
                      {/* 悬停背景 */}
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-muted/50 -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      {/* 活动指示器 */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                          style={{
                            background: 'linear-gradient(90deg, #B17F59 0%, #A5B68D 100%)',
                          }}
                          layoutId="activeTab"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Auth Items */}
            <motion.div
              className="hidden md:flex items-center space-x-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {authItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={cn(
                      'inline-flex items-center gap-2 text-sm font-medium transition-all duration-200',
                      item.isHighlight
                        ? 'text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl'
                        : 'text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-muted/50'
                    )}
                    style={item.isHighlight ? {
                      background: 'linear-gradient(135deg, #B17F59 0%, #A5B68D 50%, #C1CFA1 100%)',
                    } : undefined}
                  >
                    {item.isHighlight && (
                      <motion.div
                        animate={{
                          rotate: [0, 15, -15, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Sparkles size={16} />
                      </motion.div>
                    )}
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile menu button */}
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                <Menu size={20} className="text-muted-foreground" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* 装饰性渐变线 */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, #B17F59, #A5B68D, #C1CFA1, transparent)',
            opacity: 0.6,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.nav>

      {/* 为固定导航栏添加占位空间 */}
      <div className="h-16" />

      {/* 移动端菜单 */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        authItems={authItems}
      />
    </>
  );
}