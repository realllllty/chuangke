export function Charity() {
  const projects = [
    {
      id: 1,
      title: '乡村教育数字化',
      description: '为偏远地区学校提供免费的AI教育工具和培训',
      progress: 75,
      goal: '100所学校',
      current: '75所学校'
    },
    {
      id: 2,
      title: '老年人AI扫盲',
      description: '帮助老年人学习使用AI工具，缩小数字鸿沟',
      progress: 60,
      goal: '1000人',
      current: '600人'
    },
    {
      id: 3,
      title: '残障人士创作支持',
      description: '为残障人士提供无障碍的AI创作工具',
      progress: 45,
      goal: '500人',
      current: '225人'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">公益服务</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          推动AI技术普惠，让科技服务社会，创造美好未来
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-lg">
          <div className="text-3xl mb-2">🏫</div>
          <div className="text-2xl font-bold text-primary">100+</div>
          <p className="text-muted-foreground">受益学校</p>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="text-3xl mb-2">👥</div>
          <div className="text-2xl font-bold text-primary">2000+</div>
          <p className="text-muted-foreground">受益人数</p>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="text-3xl mb-2">💝</div>
          <div className="text-2xl font-bold text-primary">50+</div>
          <p className="text-muted-foreground">公益项目</p>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6">正在进行的项目</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="p-6 border rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  参与支持
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>进度</span>
                  <span>{project.current} / {project.goal}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  {project.progress}% 完成
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6 border rounded-lg bg-primary/5">
        <h3 className="text-xl font-semibold mb-4">如何参与公益</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">1</div>
              <div>
                <h4 className="font-medium">技能捐赠</h4>
                <p className="text-sm text-muted-foreground">分享您的专业技能，为公益项目贡献力量</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">2</div>
              <div>
                <h4 className="font-medium">资源共享</h4>
                <p className="text-sm text-muted-foreground">提供创作素材、教程等资源供公益使用</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">3</div>
              <div>
                <h4 className="font-medium">志愿服务</h4>
                <p className="text-sm text-muted-foreground">参与线上培训、技术支持等志愿活动</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm">4</div>
              <div>
                <h4 className="font-medium">项目推广</h4>
                <p className="text-sm text-muted-foreground">帮助宣传公益项目，扩大影响力</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            立即参与公益
          </button>
        </div>
      </div>
    </div>
  );
}