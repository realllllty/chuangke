import { motion } from 'framer-motion';
import { Heart, GraduationCap, Briefcase, Crown, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Template {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  preview: string;
}

const templates: Template[] = [
  {
    id: 'urban-romance',
    name: '都市情感',
    description: '现代都市背景的情感故事',
    icon: <Heart size={20} />,
    color: '#B17F59',
    bgColor: 'rgba(177, 127, 89, 0.1)',
    preview: '繁华都市中的温暖相遇，职场女强人与暖心咖啡师的甜蜜邂逅...'
  },
  {
    id: 'campus-youth',
    name: '校园青春',
    description: '校园生活，青春回忆',
    icon: <GraduationCap size={20} />,
    color: '#A5B68D',
    bgColor: 'rgba(165, 182, 141, 0.1)',
    preview: '青春校园里的美好时光，学霸与学渣的逆袭成长故事...'
  },
  {
    id: 'workplace-inspiration',
    name: '职场励志',
    description: '职场奋斗，励志成长',
    icon: <Briefcase size={20} />,
    color: '#C1CFA1',
    bgColor: 'rgba(193, 207, 161, 0.1)',
    preview: '从实习生到总监的蜕变之路，每一次挫折都是成长的阶梯...'
  },
  {
    id: 'ancient-time-travel',
    name: '古装穿越',
    description: '古装背景，穿越题材',
    icon: <Crown size={20} />,
    color: '#EDE8DC',
    bgColor: 'rgba(237, 232, 220, 0.2)',
    preview: '现代女孩意外穿越到古代，凭借现代智慧在宫廷中闯出一片天地...'
  }
];

interface ScriptTemplatesProps {
  onTemplateSelect: (template: Template) => void;
}

export function ScriptTemplates({ onTemplateSelect }: ScriptTemplatesProps) {
  return (
    <div className="space-y-6">
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
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles size={20} />
          </motion.div>
          <h3 className="text-lg font-semibold text-foreground">脚本模板库</h3>
        </div>
        
        <div className="text-sm text-muted-foreground">
          选择模板快速开始
        </div>
      </motion.div>

      <motion.div
        className="text-sm text-muted-foreground mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        短剧模板
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <motion.button
              onClick={() => onTemplateSelect(template)}
              className={cn(
                "w-full p-6 rounded-xl border border-border text-left transition-all duration-300 relative overflow-hidden",
                "hover:shadow-lg hover:border-opacity-50"
              )}
              whileHover={{ 
                scale: 1.02,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* 背景渐变 */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${template.bgColor} 0%, transparent 100%)`,
                }}
              />

              {/* 内容 */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="p-2 rounded-lg"
                      style={{
                        backgroundColor: template.color,
                        color: template.id === 'ancient-time-travel' ? '#8B7355' : 'white'
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {template.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-opacity-90">
                        {template.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {template.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight size={18} className="text-muted-foreground" />
                  </motion.div>
                </div>

                {/* 预览文字 */}
                <div 
                  className="p-3 rounded-lg text-sm text-muted-foreground italic leading-relaxed"
                  style={{ backgroundColor: template.bgColor }}
                >
                  {template.preview}
                </div>

                {/* 装饰性元素 */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-60"
                  style={{ backgroundColor: template.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* 鼠标悬停光效 */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${template.color} 0%, transparent 50%)`,
                }}
              />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* 更多模板提示 */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.button
          className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>更多模板持续更新中</span>
          <motion.div
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles size={14} className="group-hover:text-primary transition-colors duration-300" />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}