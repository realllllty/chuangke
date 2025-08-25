import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Wand2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScriptFormData {
  topic: string;
  audience: string;
  duration: string;
  requirements: string;
}

interface ScriptFormProps {
  onSubmit: (data: ScriptFormData) => void;
  isLoading: boolean;
}

const audiences = [
  { value: 'young-women-18-35', label: '年轻女性 (18-35岁)' },
  { value: 'young-men-18-35', label: '年轻男性 (18-35岁)' },
  { value: 'middle-age-25-45', label: '中年群体 (25-45岁)' },
  { value: 'seniors-45+', label: '中老年 (45岁+)' },
  { value: 'teens-13-18', label: '青少年 (13-18岁)' },
  { value: 'general', label: '通用受众' },
];

const durations = [
  { value: 'short-1-2min', label: '短篇 (1-2分钟)' },
  { value: 'medium-3-5min', label: '中篇 (3-5分钟)' },
  { value: 'long-5-10min', label: '长篇 (5-10分钟)' },
  { value: 'extra-long-10min+', label: '超长篇 (10分钟+)' },
];

export function ScriptForm({ onSubmit, isLoading }: ScriptFormProps) {
  const [formData, setFormData] = useState<ScriptFormData>({
    topic: '',
    audience: '',
    duration: '',
    requirements: ''
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.topic.trim()) {
      onSubmit(formData);
    }
  };

  const updateField = (field: keyof ScriptFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const CustomSelect = ({ 
    value, 
    onChange, 
    options, 
    placeholder, 
    id 
  }: {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    placeholder: string;
    id: string;
  }) => {
    const isOpen = openDropdown === id;
    const selectedOption = options.find(opt => opt.value === value);

    return (
      <div className="relative">
        <motion.button
          type="button"
          onClick={() => setOpenDropdown(isOpen ? null : id)}
          className={cn(
            "w-full p-4 border border-border rounded-xl text-left transition-all duration-300 flex items-center justify-between",
            "hover:border-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2",
            isOpen && "ring-2 ring-offset-2"
          )}
          style={{
            borderColor: isOpen ? '#A5B68D' : undefined,
            ringColor: '#A5B68D'
          }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <span className={cn(
            selectedOption ? "text-foreground" : "text-muted-foreground"
          )}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={isOpen ? { 
            opacity: 1, 
            y: 0, 
            scale: 1 
          } : { 
            opacity: 0, 
            y: -10, 
            scale: 0.95 
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute z-10 w-full mt-2 bg-background border border-border rounded-xl shadow-xl",
            !isOpen && "pointer-events-none"
          )}
        >
          <div className="py-2 max-h-60 overflow-y-auto">
            {options.map((option, index) => (
              <motion.button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setOpenDropdown(null);
                }}
                className={cn(
                  "w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between",
                  option.value === value && "bg-muted/30"
                )}
                initial={{ opacity: 0, x: -10 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                whileHover={{ x: 4 }}
              >
                <span>{option.label}</span>
                {option.value === value && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A5B68D' }} />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <motion.h3 
        className="text-lg font-semibold text-foreground"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        内容描述
      </motion.h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 主题/产品 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label className="block text-sm font-medium text-foreground mb-3">
            主题/产品
          </label>
          <motion.input
            type="text"
            value={formData.topic}
            onChange={(e) => updateField('topic', e.target.value)}
            placeholder="例如：山东烟台苹果...护肤品牌"
            className="w-full p-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300"
            style={{ ringColor: '#A5B68D' }}
            whileFocus={{ scale: 1.01 }}
            required
          />
        </motion.div>

        {/* 目标受众 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label className="block text-sm font-medium text-foreground mb-3">
            目标受众
          </label>
          <CustomSelect
            id="audience"
            value={formData.audience}
            onChange={(value) => updateField('audience', value)}
            options={audiences}
            placeholder="选择目标受众"
          />
        </motion.div>

        {/* 脚本长度 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label className="block text-sm font-medium text-foreground mb-3">
            脚本长度
          </label>
          <CustomSelect
            id="duration"
            value={formData.duration}
            onChange={(value) => updateField('duration', value)}
            options={durations}
            placeholder="选择脚本长度"
          />
        </motion.div>

        {/* 详细要求 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label className="block text-sm font-medium text-foreground mb-3">
            详细要求
          </label>
          <motion.textarea
            value={formData.requirements}
            onChange={(e) => updateField('requirements', e.target.value)}
            placeholder="请描述您的具体需求，如情节要求、重点突出等..."
            rows={4}
            className="w-full p-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 resize-none"
            style={{ ringColor: '#A5B68D' }}
            whileFocus={{ scale: 1.01 }}
          />
        </motion.div>

        {/* 生成按钮 */}
        <motion.button
          type="submit"
          disabled={!formData.topic.trim() || isLoading}
          className={cn(
            "w-full py-4 px-6 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden",
            !formData.topic.trim() || isLoading
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-xl transform hover:scale-[1.02]"
          )}
          style={{
            background: formData.topic.trim() && !isLoading
              ? 'linear-gradient(135deg, #B17F59 0%, #A5B68D 50%, #C1CFA1 100%)'
              : '#9CA3AF'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* 按钮背景光效 */}
          {!isLoading && formData.topic.trim() && (
            <motion.div
              className="absolute inset-0 opacity-0"
              style={{
                background: 'linear-gradient(45deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)',
              }}
              animate={{ 
                x: ['-100%', '100%'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
          
          <motion.div
            animate={isLoading ? {
              rotate: 360
            } : {}}
            transition={{
              duration: 1,
              repeat: isLoading ? Infinity : 0,
              ease: "linear"
            }}
          >
            {isLoading ? <Sparkles size={20} /> : <Wand2 size={20} />}
          </motion.div>
          
          <span>
            {isLoading ? '正在生成中...' : '开始生成'}
          </span>
        </motion.button>
      </form>
    </div>
  );
}