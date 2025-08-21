export function Login() {
  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">欢迎回来</h1>
        <p className="mt-4 text-muted-foreground">
          登录您的创客账户，继续创作之旅
        </p>
      </div>
      
      <div className="p-6 border rounded-lg">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium">邮箱地址</label>
            <input
              type="email"
              placeholder="请输入邮箱地址"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium">密码</label>
            <input
              type="password"
              placeholder="请输入密码"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">记住我</span>
            </label>
            <button className="text-sm text-primary hover:underline">
              忘记密码？
            </button>
          </div>
          
          <button className="w-full py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            登录
          </button>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              还没有账户？
              <button className="text-primary hover:underline ml-1">
                立即注册
              </button>
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">或</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <button className="w-full py-3 border rounded-md hover:bg-muted/50 transition-colors flex items-center justify-center space-x-2">
              <span>🎯</span>
              <span>使用微信登录</span>
            </button>
            <button className="w-full py-3 border rounded-md hover:bg-muted/50 transition-colors flex items-center justify-center space-x-2">
              <span>📱</span>
              <span>使用手机号登录</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>登录即表示您同意我们的 
          <button className="text-primary hover:underline">服务条款</button>
          和 
          <button className="text-primary hover:underline">隐私政策</button>
        </p>
      </div>
    </div>
  );
}