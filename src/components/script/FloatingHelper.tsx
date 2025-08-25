import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Lightbulb, Sparkles } from 'lucide-react';

interface Tip {
  id: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}

const tips: Tip[] = [
  {
    id: '1',
    title: '脚本撰写技巧',
    content: '好的脚本需要有清晰的开头、发展和结尾。开头要抓住观众注意力，中间部分要保持张力，结尾要有深刻印象。',
    icon: <Lightbulb size={16} />
  },
  {
    id: '2',
    title: '目标受众定位',
    content: '明确目标受众有助于AI生成更精准的脚本。不同年龄段和兴趣群体的表达方式和关注点都不同。',
    icon: <Sparkles size={16} />
  },
  {
    id: '3',
    title: '情感共鸣要素',
    content: '优秀的脚本会触动观众情感。可以通过故事情节、人物对话、场景设置等方式建立情感连接。',
    icon: <MessageCircle size={16} />
  }
];

export function FloatingHelper() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);

  // 自动显示欢迎提示
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownWelcome) {
        setIsOpen(true);
        setHasShownWelcome(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasShownWelcome]);

  // 自动轮播提示
  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setCurrentTip((prev) => (prev + 1) % tips.length);
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const toggleHelper = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-80 p-4 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl"
          >
            {/* 关闭按钮 */}
            <motion.button
              onClick={toggleHelper}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={16} className="text-muted-foreground" />
            </motion.button>

            {/* 内容区域 */}
            <div className="pr-8">
              <motion.div
                key={currentTip}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-start space-x-3 mb-3">
                  <motion.div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: '#A5B68D', color: 'white' }}
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {tips[currentTip].icon}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm">
                      {tips[currentTip].title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {tips[currentTip].content}
                    </p>
                  </div>
                </div>

                {/* 指示器 */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {tips.map((_, index) => (
                      <motion.div
                        key={index}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: index === currentTip ? '#A5B68D' : '#E5E7EB'
                        }}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setCurrentTip(index)}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    小贴士 {currentTip + 1}/{tips.length}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* 装饰性元素 */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
              style={{ backgroundColor: '#C1CFA1' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 浮动按钮 */}
      <motion.button
        onClick={toggleHelper}
        className="w-12 h-12 rounded-full shadow-xl flex items-center justify-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #B17F59 0%, #A5B68D 100%)' }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 20px 40px rgba(165, 182, 141, 0.3)'
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* 背景动画 */}
        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.2), transparent)'
          }}
        />
        
        <motion.div
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X size={20} className="text-white relative z-10" />
          ) : (
            <MessageCircle size={20} className="text-white relative z-10" />
          )}
        </motion.div>

        {/* 新消息提示点 */}
        {!hasShownWelcome && !isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          />
        )}
      </motion.button>
    </div>
  );
}