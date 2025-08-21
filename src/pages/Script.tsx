export function Script() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">脚本生成</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          AI智能脚本创作，快速生成各类视频脚本
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">脚本配置</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">脚本类型</label>
                <select className="w-full p-2 border rounded-md">
                  <option>宣传片脚本</option>
                  <option>教学视频</option>
                  <option>产品介绍</option>
                  <option>故事叙述</option>
                  <option>新闻播报</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">主题关键词</label>
                <input 
                  type="text" 
                  placeholder="输入主题关键词..." 
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">视频时长</label>
                <select className="w-full p-2 border rounded-md">
                  <option>30秒</option>
                  <option>1分钟</option>
                  <option>3分钟</option>
                  <option>5分钟</option>
                  <option>自定义</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">风格调性</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center">
                    <input type="radio" name="style" value="formal" className="mr-2" />
                    正式专业
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="style" value="casual" className="mr-2" />
                    轻松活泼
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="style" value="emotional" className="mr-2" />
                    情感感人
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="style" value="tech" className="mr-2" />
                    科技前沿
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors">
            生成脚本
          </button>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">生成结果</h3>
          <div className="min-h-[400px] bg-muted/30 rounded-md p-4">
            <p className="text-muted-foreground">
              AI生成的脚本内容将显示在这里...
            </p>
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="px-4 py-2 border rounded-md hover:bg-muted/50 transition-colors">
              复制脚本
            </button>
            <button className="px-4 py-2 border rounded-md hover:bg-muted/50 transition-colors">
              导出文件
            </button>
            <button className="px-4 py-2 border rounded-md hover:bg-muted/50 transition-colors">
              重新生成
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}