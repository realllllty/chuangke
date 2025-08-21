export function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          欢迎来到创客平台
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          打造专业的AI创作工具平台，让创意变为现实
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">数字人生成</h3>
          <p className="text-muted-foreground">AI驱动的数字人创建工具，轻松生成逼真的虚拟形象</p>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">脚本生成</h3>
          <p className="text-muted-foreground">智能脚本创作助手，快速生成各类视频脚本</p>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">智能剪辑</h3>
          <p className="text-muted-foreground">AI智能剪辑工具，自动化视频后期处理</p>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">素材市场</h3>
          <p className="text-muted-foreground">丰富的创作素材库，满足各种创作需求</p>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">创作助手</h3>
          <p className="text-muted-foreground">全方位的创作辅助工具，提升创作效率</p>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">公益服务</h3>
          <p className="text-muted-foreground">推动AI技术普惠，服务社会公益事业</p>
        </div>
      </div>
    </div>
  );
}