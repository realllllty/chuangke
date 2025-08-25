import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScriptTypeSelector } from '@/components/script/ScriptTypeSelector';
import { ScriptForm } from '@/components/script/ScriptForm';
import { ScriptPreview } from '@/components/script/ScriptPreview';
import { ScriptTemplates } from '@/components/script/ScriptTemplates';
import { FloatingHelper } from '@/components/script/FloatingHelper';
import { PageEnhancement } from '@/components/script/PageEnhancement';

interface ScriptFormData {
  topic: string;
  audience: string;
  duration: string;
  requirements: string;
}

// 模拟脚本生成的数据
const generateMockScript = (formData: ScriptFormData, scriptType: string): string => {
  const scripts = {
    'short-drama': `【开场】
镜头：繁华都市的咖啡街，阳光透过玻璃窗洒在木质桌面上

【场景一：相遇】
女主角林小雨匆忙跑进咖啡店，撞上了正在调制咖啡的男主角陈晨。

林小雨：（气喘吁吁）不好意思，我赶时间，能给我一杯最快的咖啡吗？

陈晨：（温和一笑）没问题，但最快的不一定是最好的。

【场景二：对话】
陈晨熟练地为林小雨制作一杯拿铁，手法专业而优雅。

陈晨：你看起来压力很大，工作很忙吗？

林小雨：（苦笑）是啊，项目deadline快到了，感觉整个人都要崩溃了。

【场景三：温暖】
陈晨在咖啡上用奶泡画了一个小太阳的图案。

陈晨：这杯咖啡叫"希望"，希望它能给你带来好运。

林小雨看着杯中的太阳图案，眼中闪过一丝温暖。

【结尾】
林小雨：谢谢你，我叫林小雨。

陈晨：我叫陈晨，希望下次你来的时候，不用这么匆忙。

镜头渐远，两人相视而笑，温暖的午后阳光洒满整个咖啡店。

【END】`,
    'live-stream': `【直播脚本】${formData.topic}专场

【开场（0-30秒）】
各位宝贝们，大家晚上好！欢迎来到我们的直播间！
今天给大家带来超值好货 - ${formData.topic}！
现在进直播间的朋友们，赶紧点个关注，我们马上开始！

【产品介绍（30秒-2分钟）】
这款${formData.topic}真的是我们精心挑选的宝藏产品：
✨ 品质超赞，性价比超高
✨ 限时特价，错过就没有了
✨ 现在下单还有额外赠品

【互动环节（2-3分钟）】
看到有朋友在问价格，别急别急，马上公布！
有多少朋友想要的，扣个1让我看看！
哇，这么多朋友想要，看来眼光都很好呢！

【价格公布（3-4分钟）】
原价XXX元，今天直播间专属价只要XXX元！
而且前50名下单的朋友，还送价值XXX的礼品！
机会难得，抓紧时间哦！

【紧迫感营造（4-5分钟）】
现在库存已经不多了，想要的朋友赶紧下手！
这个价格真的是血亏在卖，就为了回馈粉丝！

【结尾收官】
好的，今天的直播就到这里，感谢大家的支持！
记得关注我们，下次直播不迷路！`,
    'farm-support': `【助农直播脚本】${formData.topic}专场

【温情开场】
朋友们，大家好！今天要和大家分享一个特别有意义的产品。
我现在就在${formData.topic}的产地，大家看看这里的环境多美！

【农户故事】
这里的农户张大叔种了30多年的${formData.topic}，
每年都坚持用最传统的方法，不打农药，不用化肥，
就是希望给大家带来最健康、最原生态的产品。

【产品展示】
大家看，这${formData.topic}多新鲜，刚从地里摘的，
颜色这么正，闻起来特别香。
张大叔说，这样的${formData.topic}在城里至少要卖XX元一斤。

【助农意义】
今年因为各种原因，销路不太好，
很多农户辛苦一年的收成可能要烂在地里。
我们今天的助农活动，就是希望帮助这些朴实的农民。

【价格优势】
原本XX元一斤的${formData.topic}，
今天助农价只要XX元，还包邮到家！
这不仅是在买农产品，更是在献爱心，帮助农户！

【情感共鸣】
每购买一份，就是给农户一份希望，
让他们的辛勤劳动得到应有的回报。
朋友们，让我们一起用实际行动支持农业，传递温暖！`
  };
  
  return scripts[scriptType as keyof typeof scripts] || scripts['short-drama'];
};

export function Script() {
  const [selectedType, setSelectedType] = useState('short-drama');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedScript, setGeneratedScript] = useState('');

  const handleFormSubmit = async (formData: ScriptFormData) => {
    setIsLoading(true);
    setGeneratedScript('');
    
    // 模拟AI生成延迟
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    const script = generateMockScript(formData, selectedType);
    setGeneratedScript(script);
    setIsLoading(false);
  };

  const handleRegenerate = async () => {
    setIsLoading(true);
    setGeneratedScript('');
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // 重新生成时可以添加一些变化
    const script = generateMockScript({ 
      topic: '重新生成', 
      audience: '', 
      duration: '', 
      requirements: '' 
    }, selectedType);
    setGeneratedScript(script + '\n\n【重新生成版本】');
    setIsLoading(false);
  };

  const handleTemplateSelect = (template: any) => {
    setSelectedType('short-drama');
    // 可以根据模板预设一些表单数据
    setTimeout(() => {
      const mockData = {
        topic: template.name,
        audience: 'young-women-18-35',
        duration: 'short-1-2min',
        requirements: template.preview
      };
      handleFormSubmit(mockData);
    }, 500);
  };

  return (
    <div className="space-y-8 relative">
      {/* 页面增强效果 */}
      <PageEnhancement />
      {/* 页面标题 */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-4xl font-bold tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #B17F59 0%, #A5B68D 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          脚本生成
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          基于大模型技术，智能生成短剧、直播、助农等多场景专业脚本，让创作更高效
        </motion.p>
      </motion.div>

      {/* 主要内容区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧配置区域 */}
        <div className="lg:col-span-1 space-y-8">
          <motion.div
            className="p-6 border border-border rounded-xl bg-background/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ScriptTypeSelector
              selectedType={selectedType}
              onTypeChange={setSelectedType}
            />
          </motion.div>

          <motion.div
            className="p-6 border border-border rounded-xl bg-background/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ScriptForm
              onSubmit={handleFormSubmit}
              isLoading={isLoading}
            />
          </motion.div>
        </div>

        {/* 右侧预览区域 */}
        <div className="lg:col-span-2">
          <motion.div
            className="h-full p-6 border border-border rounded-xl bg-background/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ScriptPreview
              script={generatedScript}
              isLoading={isLoading}
              onRegenerate={handleRegenerate}
            />
          </motion.div>
        </div>
      </div>

      {/* 底部模板库 */}
      <motion.div
        className="p-6 border border-border rounded-xl bg-background/30 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <ScriptTemplates onTemplateSelect={handleTemplateSelect} />
      </motion.div>

      {/* 浮动助手 */}
      <FloatingHelper />
    </div>
  );
}