export function Trial() {
  const features = [
    { name: '数字人生成', limit: '5次/天', icon: '👤' },
    { name: '脚本生成', limit: '10次/天', icon: '📝' },
    { name: '智能剪辑', limit: '3个视频/天', icon: '✂️' },
    { name: '素材下载', limit: '20个/天', icon: '📁' },
    { name: '创作助手', limit: '无限使用', icon: '🤖' },
  ];

  const plans = [
    {
      name: '免费试用',
      price: '¥0',
      period: '/7天',
      features: ['基础功能体验', '有使用次数限制', '社区技术支持'],
      current: true
    },
    {
      name: '个人版',
      price: '¥29',
      period: '/月',
      features: ['无限次数使用', '高级AI功能', '优先客服支持', '云端存储100GB'],
      popular: true
    },
    {
      name: '专业版',
      price: '¥99',
      period: '/月',
      features: ['个人版全部功能', '团队协作', '专属客服', '云端存储500GB', 'API接口'],
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">免费试用</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          7天免费体验，感受AI创作的无限可能
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="p-6 border-2 border-primary rounded-lg bg-primary/5">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-primary">开始您的免费试用</h2>
            <p className="text-muted-foreground mt-2">无需信用卡，立即开始创作</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-background rounded-lg">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <h3 className="font-medium">{feature.name}</h3>
                  <p className="text-sm text-muted-foreground">{feature.limit}</p>
                </div>
              </div>
            ))}
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">姓名</label>
                <input
                  type="text"
                  placeholder="请输入您的姓名"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">邮箱</label>
                <input
                  type="email"
                  placeholder="请输入邮箱地址"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">手机号</label>
              <input
                type="tel"
                placeholder="请输入手机号码"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">公司/职业（可选）</label>
              <input
                type="text"
                placeholder="请输入您的公司或职业"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="agree" className="rounded" />
              <label htmlFor="agree" className="text-sm">
                我同意 <button type="button" className="text-primary hover:underline">服务条款</button> 和 
                <button type="button" className="text-primary hover:underline">隐私政策</button>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-lg font-medium"
            >
              立即开始免费试用
            </button>
          </form>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">选择最适合您的方案</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 border rounded-lg relative ${
                plan.popular ? 'border-primary ring-2 ring-primary/20' : ''
              } ${plan.current ? 'bg-primary/5 border-primary' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  推荐
                </div>
              )}
              {plan.current && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  当前方案
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-2 rounded-md transition-colors ${
                  plan.current
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border hover:bg-muted/50'
                }`}
                disabled={plan.current}
              >
                {plan.current ? '当前方案' : '选择方案'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}