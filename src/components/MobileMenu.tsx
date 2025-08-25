import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ name: string; path: string }>;
  authItems: Array<{ name: string; path: string; isHighlight?: boolean }>;
}

export function MobileMenu({ isOpen, onClose, navItems, authItems }: MobileMenuProps) {
  const location = useLocation();

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />
          
          {/* 菜单主体 */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-80 bg-background/95 backdrop-blur-xl border-l shadow-2xl z-50"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col h-full">
              {/* 头部 */}
              <div className="flex items-center justify-between p-6 border-b">
                <span className="font-semibold text-lg">菜单</span>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
              </div>
              
              {/* 导航项目 */}
              <div className="flex-1 px-6 py-8">
                <div className="space-y-2">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      custom={i}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className={cn(
                          'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                          location.pathname === item.path
                            ? 'text-white border'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        )}
                        style={location.pathname === item.path ? {
                          background: 'linear-gradient(135deg, #B17F59 0%, #A5B68D 100%)',
                          borderColor: '#C1CFA1',
                        } : undefined}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* 分割线 */}
                <motion.div
                  className="h-px bg-border my-6"
                  custom={navItems.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                />
                
                {/* 认证按钮 */}
                <div className="space-y-3">
                  {authItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      custom={navItems.length + 1 + i}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className={cn(
                          'block px-4 py-3 rounded-lg text-sm font-medium text-center transition-all duration-200',
                          item.isHighlight
                            ? 'text-white shadow-lg hover:shadow-xl'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        )}
                        style={item.isHighlight ? {
                          background: 'linear-gradient(135deg, #B17F59 0%, #A5B68D 50%, #C1CFA1 100%)',
                        } : undefined}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}