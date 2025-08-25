import { motion } from 'framer-motion';
import { Film, Radio, Heart, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScriptType {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  bgColor: string;
}

const scriptTypes: ScriptType[] = [
  {
    id: 'short-drama',
    name: '短剧脚本',
    icon: <Film size={24} />,
    description: '基于大模型技术，智能生成短剧、直播、助农等多场景专业脚本，让创作更高效',
    color: '#B17F59',
    bgColor: 'rgba(177, 127, 89, 0.1)'
  },
  {
    id: 'live-stream',
    name: '直播脚本',
    icon: <Radio size={24} />,
    description: '专业直播带货脚本，提升转化率',
    color: '#A5B68D',
    bgColor: 'rgba(165, 182, 141, 0.1)'
  },
  {
    id: 'farm-support',
    name: '助农直播',
    icon: <Heart size={24} />,
    description: '助农产品推广，温暖人心的故事',
    color: '#C1CFA1',
    bgColor: 'rgba(193, 207, 161, 0.1)'
  }
];

interface ScriptTypeSelectorProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export function ScriptTypeSelector({ selectedType, onTypeChange }: ScriptTypeSelectorProps) {
  return (
    <div className="space-y-4">
      <motion.h3 
        className="text-lg font-semibold text-foreground"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        脚本类型
      </motion.h3>
      
      <div className="space-y-3">
        {scriptTypes.map((type, index) => {
          const isSelected = selectedType === type.id;
          
          return (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.button
                onClick={() => onTypeChange(type.id)}
                className={cn(
                  "w-full p-4 rounded-xl border transition-all duration-300 text-left relative overflow-hidden",
                  isSelected 
                    ? "border-opacity-50 shadow-lg" 
                    : "border-border hover:border-opacity-30 hover:shadow-md"
                )}
                style={{
                  backgroundColor: isSelected ? type.bgColor : 'transparent',
                  borderColor: isSelected ? type.color : undefined,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* 背景光效 */}
                {isSelected && (
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at 20% 20%, ${type.color} 0%, transparent 50%)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                <div className="relative z-10 flex items-center space-x-3">
                  <motion.div
                    className="p-2 rounded-lg"
                    style={{ 
                      backgroundColor: type.color,
                      color: 'white'
                    }}
                    animate={isSelected ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: isSelected ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  >
                    {type.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-foreground">{type.name}</h4>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Sparkles size={16} style={{ color: type.color }} />
                        </motion.div>
                      )}
                    </div>
                    {type.id === 'short-drama' && (
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {type.description}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* 选中指示器 */}
                {isSelected && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                    style={{ backgroundColor: type.color }}
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}