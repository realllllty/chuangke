export function DigitalHuman() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">数字人生成</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          使用AI技术创建逼真的数字人形象
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">创建设置</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">形象类型</label>
                <select className="w-full p-2 border rounded-md">
                  <option>真实人像</option>
                  <option>卡通动漫</option>
                  <option>3D模型</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">性别</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="male" className="mr-2" />
                    男性
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="female" className="mr-2" />
                    女性
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">年龄范围</label>
                <select className="w-full p-2 border rounded-md">
                  <option>18-25岁</option>
                  <option>26-35岁</option>
                  <option>36-50岁</option>
                  <option>50岁以上</option>
                </select>
              </div>
            </div>
          </div>
          
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors">
            开始生成
          </button>
        </div>
        
        <div className="p-6 border rounded-lg bg-muted/30">
          <h3 className="text-xl font-semibold mb-4">预览区域</h3>
          <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
            <p className="text-muted-foreground">数字人预览将显示在这里</p>
          </div>
        </div>
      </div>
    </div>
  );
}