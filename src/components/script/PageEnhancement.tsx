import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export function PageEnhancement() {
  const [particles, setParticles] = useState<FloatingParticle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 创建浮动粒子
    const createParticles = () => {
      const newParticles: FloatingParticle[] = [];
      const colors = ['#B17F59', '#A5B68D', '#C1CFA1', '#EDE8DC'];
      
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    // 鼠标跟踪
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', createParticles);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* 浮动粒子 */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            x: [
              particle.x,
              particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 200,
              particle.x,
            ],
            y: [
              particle.y,
              particle.y + Math.cos(Date.now() * 0.001 + particle.id) * 150,
              particle.y,
            ],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 鼠标跟随光晕 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(165, 182, 141, 0.05) 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* 页面装饰性光束 */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full opacity-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, #A5B68D, transparent)',
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-0 right-1/3 w-px h-full opacity-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, #C1CFA1, transparent)',
        }}
        animate={{
          opacity: [0.15, 0.05, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 角落装饰元素 */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 rounded-full opacity-30"
        style={{ backgroundColor: '#B17F59' }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 right-16 w-3 h-3 rounded-full opacity-20"
        style={{ backgroundColor: '#C1CFA1' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 渐变遮罩 */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(177, 127, 89, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(193, 207, 161, 0.1) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
}