import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* 发光边框效果 */}
        <motion.div
          className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-300"
          style={{
            background: 'linear-gradient(45deg, #B17F59, #A5B68D, #C1CFA1, #EDE8DC)',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Logo主体 */}
        <div 
          className="relative h-10 w-10 rounded-xl flex items-center justify-center shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #B17F59 0%, #A5B68D 100%)',
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="text-white"
          >
            <Zap size={20} />
          </motion.div>
        </div>
      </motion.div>
      
      {/* 品牌名称 */}
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span 
          className="font-bold text-xl bg-clip-text text-transparent"
          style={{
            background: 'linear-gradient(90deg, #B17F59 0%, #A5B68D 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          创客
        </span>
        <span className="text-xs text-muted-foreground font-medium tracking-wide">
          AI创作平台
        </span>
      </motion.div>
    </Link>
  );
}