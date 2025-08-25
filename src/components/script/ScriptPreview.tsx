import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Download, RefreshCw, FileText, CheckCircle, Eye, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScriptPreviewProps {
  script: string;
  isLoading: boolean;
  onRegenerate: () => void;
}

export function ScriptPreview({ script, isLoading, onRegenerate }: ScriptPreviewProps) {
  const [copied, setCopied] = useState(false);
  const [displayedScript, setDisplayedScript] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // 打字机效果
  useEffect(() => {
    if (script && !isLoading) {
      setDisplayedScript('');
      setIsTyping(true);
      
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < script.length) {
          setDisplayedScript(script.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }
  }, [script, isLoading]);

  const handleCopy = async () => {
    if (displayedScript) {
      await navigator.clipboard.writeText(displayedScript);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (displayedScript) {
      const blob = new Blob([displayedScript], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `脚本_${new Date().toLocaleDateString()}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const loadingMessages = [
    "正在分析您的需求...",
    "AI大脑正在思考...",
    "创意灵感正在迸发...",
    "精心雕琢每个细节...",
    "马上就要完成了..."
  ];

  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const messageInterval = setInterval(() => {
        setCurrentLoadingMessage(prev => (prev + 1) % loadingMessages.length);
      }, 2000);

      return () => clearInterval(messageInterval);
    }
  }, [isLoading]);

  return (
    <div className="h-full flex flex-col space-y-4">
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3">
          <motion.div
            className="p-2 rounded-lg"
            style={{ backgroundColor: '#A5B68D', color: 'white' }}
            animate={isLoading ? {
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            } : {}}
            transition={{
              duration: 2,
              repeat: isLoading ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            <FileText size={20} />
          </motion.div>
          <h3 className="text-lg font-semibold text-foreground">生成的脚本</h3>
        </div>

        {/* 状态指示器 */}
        <div className="flex items-center space-x-2">
          {isLoading && (
            <motion.div
              className="flex items-center space-x-2 text-muted-foreground text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Clock size={16} />
              </motion.div>
              <span>生成中</span>
            </motion.div>
          )}
          
          {displayedScript && !isLoading && (
            <motion.div
              className="flex items-center space-x-2 text-green-600 text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle size={16} />
              <span>已完成</span>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* 脚本内容区域 */}
      <motion.div
        className="flex-1 border border-border rounded-xl p-6 relative overflow-hidden"
        style={{ minHeight: '400px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(165, 182, 141, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(165, 182, 141, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          />
        </div>

        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              key="loading"
              className="absolute inset-0 flex flex-col items-center justify-center space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* 加载动画 */}
              <div className="relative">
                <motion.div
                  className="w-16 h-16 rounded-full border-4 border-muted"
                  style={{ borderTopColor: '#A5B68D' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Eye size={24} style={{ color: '#A5B68D' }} />
                </motion.div>
              </div>

              {/* 加载文字 */}
              <motion.div
                className="text-center"
                key={currentLoadingMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg font-medium text-foreground">
                  {loadingMessages[currentLoadingMessage]}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  AI正在为您精心创作，请稍候...
                </p>
              </motion.div>

              {/* 进度条 */}
              <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #B17F59, #A5B68D, #C1CFA1)' }}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 8, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          )}

          {!isLoading && !displayedScript && (
            <motion.div
              key="empty"
              className="absolute inset-0 flex flex-col items-center justify-center space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="p-6 rounded-full bg-muted/30"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FileText size={48} className="text-muted-foreground" />
              </motion.div>
              <div className="text-center">
                <p className="text-lg font-medium text-muted-foreground">
                  生成的脚本尚待在这里显示
                </p>
                <p className="text-sm text-muted-foreground/80 mt-2">
                  请先填写左侧信息并开始生成
                </p>
              </div>
            </motion.div>
          )}

          {displayedScript && (
            <motion.div
              key="content"
              className="relative z-10 h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full overflow-y-auto pr-4 space-y-4">
                <motion.div
                  className="whitespace-pre-wrap text-foreground leading-relaxed"
                  style={{ fontFamily: 'ui-serif, serif' }}
                >
                  {displayedScript}
                  {isTyping && (
                    <motion.span
                      className="inline-block w-0.5 h-5 ml-1"
                      style={{ backgroundColor: '#A5B68D' }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 操作按钮 */}
      <motion.div
        className="flex space-x-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.button
          onClick={handleCopy}
          disabled={!displayedScript || isLoading}
          className={cn(
            "flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg border transition-all duration-300",
            displayedScript && !isLoading
              ? "hover:bg-muted/50 hover:border-opacity-50"
              : "opacity-50 cursor-not-allowed"
          )}
          whileHover={displayedScript && !isLoading ? { scale: 1.02 } : {}}
          whileTap={displayedScript && !isLoading ? { scale: 0.98 } : {}}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle size={18} className="text-green-600" />
              </motion.div>
            ) : (
              <Copy key="copy" size={18} />
            )}
          </AnimatePresence>
          <span className="text-sm font-medium">
            {copied ? '已复制' : '复制脚本'}
          </span>
        </motion.button>

        <motion.button
          onClick={handleDownload}
          disabled={!displayedScript || isLoading}
          className={cn(
            "flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg border transition-all duration-300",
            displayedScript && !isLoading
              ? "hover:bg-muted/50 hover:border-opacity-50"
              : "opacity-50 cursor-not-allowed"
          )}
          whileHover={displayedScript && !isLoading ? { scale: 1.02 } : {}}
          whileTap={displayedScript && !isLoading ? { scale: 0.98 } : {}}
        >
          <Download size={18} />
          <span className="text-sm font-medium">导出文件</span>
        </motion.button>

        <motion.button
          onClick={onRegenerate}
          disabled={isLoading}
          className={cn(
            "flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg border transition-all duration-300",
            !isLoading
              ? "hover:bg-muted/50 hover:border-opacity-50"
              : "opacity-50 cursor-not-allowed"
          )}
          whileHover={!isLoading ? { scale: 1.02 } : {}}
          whileTap={!isLoading ? { scale: 0.98 } : {}}
        >
          <motion.div
            animate={isLoading ? { rotate: 360 } : {}}
            transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
          >
            <RefreshCw size={18} />
          </motion.div>
          <span className="text-sm font-medium">重新生成</span>
        </motion.button>
      </motion.div>
    </div>
  );
}