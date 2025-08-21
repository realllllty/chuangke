export function Assistant() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">创作助手</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          AI驱动的创作助手，全方位提升你的创作效率
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <div className="text-3xl mb-4">💡</div>
          <h3 className="text-xl font-semibold mb-2">创意生成</h3>
          <p className="text-muted-foreground mb-4">
            AI帮你生成创意想法，突破创作瓶颈
          </p>
          <button className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            开始创意
          </button>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <div className="text-3xl mb-4">✍️</div>
          <h3 className="text-xl font-semibold mb-2">文案优化</h3>
          <p className="text-muted-foreground mb-4">
            智能文案优化，让你的文字更有感染力
          </p>
          <button className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            优化文案
          </button>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <div className="text-3xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2">配色建议</h3>
          <p className="text-muted-foreground mb-4">
            AI色彩搭配建议，打造和谐美观的视觉效果
          </p>
          <button className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            获取配色
          </button>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <div className="text-3xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">热点分析</h3>
          <p className="text-muted-foreground mb-4">
            实时热点分析，把握创作时机
          </p>
          <button className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            查看热点
          </button>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <div className="text-3xl mb-4">📈</div>
          <h3 className="text-xl font-semibold mb-2">数据分析</h3>
          <p className="text-muted-foreground mb-4">
            深度数据分析，优化创作策略
          </p>
          <button className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            查看数据
          </button>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <div className="text-3xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold mb-2">智能问答</h3>
          <p className="text-muted-foreground mb-4">
            24/7 AI助手，随时解答创作疑问
          </p>
          <button className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            开始对话
          </button>
        </div>
      </div>
      
      <div className="p-6 border rounded-lg bg-muted/30">
        <h3 className="text-xl font-semibold mb-4">AI 对话窗口</h3>
        <div className="space-y-4 mb-4">
          <div className="flex justify-start">
            <div className="bg-muted p-3 rounded-lg max-w-xs">
              <p className="text-sm">您好！我是您的创作助手，有什么可以帮助您的吗？</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="输入您的问题..."
            className="flex-1 p-2 border rounded-md"
          />
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            发送
          </button>
        </div>
      </div>
    </div>
  );
}