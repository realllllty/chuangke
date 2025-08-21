export function Editing() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">智能剪辑</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          AI驱动的智能视频剪辑工具，自动化后期处理
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">上传素材</h3>
          <div className="border-2 border-dashed border-muted rounded-lg p-12 text-center">
            <div className="space-y-4">
              <div className="text-4xl">📹</div>
              <div>
                <p className="text-lg font-medium">拖拽文件到此处或点击上传</p>
                <p className="text-sm text-muted-foreground">支持 MP4, AVI, MOV 格式，最大支持 2GB</p>
              </div>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                选择文件
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">剪辑设置</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">剪辑模式</label>
                <select className="w-full p-2 border rounded-md">
                  <option>自动精彩片段</option>
                  <option>去除静默部分</option>
                  <option>智能分镜</option>
                  <option>快速剪辑</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">输出分辨率</label>
                <select className="w-full p-2 border rounded-md">
                  <option>1080P</option>
                  <option>720P</option>
                  <option>4K</option>
                  <option>原始分辨率</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">添加功能</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    自动添加字幕
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    背景音乐
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    转场效果
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Logo水印
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">预览窗口</h3>
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">视频预览区域</p>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="px-4 py-2 border rounded-md hover:bg-muted/50 transition-colors">
                ⏮ 上一段
              </button>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                ▶ 播放
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-muted/50 transition-colors">
                下一段 ⏭
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-lg">
            开始智能剪辑
          </button>
        </div>
      </div>
    </div>
  );
}