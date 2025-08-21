export function Materials() {
  const categories = ['全部', '视频素材', '音频素材', '图片素材', '字体资源', '模板'];
  const materials = [
    { id: 1, name: '商务汇报PPT模板', category: '模板', price: '免费', image: '📊' },
    { id: 2, name: '轻松背景音乐', category: '音频素材', price: '¥9.9', image: '🎵' },
    { id: 3, name: '企业宣传视频', category: '视频素材', price: '¥19.9', image: '🎬' },
    { id: 4, name: '科技感图标包', category: '图片素材', price: '¥15', image: '🔧' },
    { id: 5, name: '现代字体包', category: '字体资源', price: '¥25', image: '🔤' },
    { id: 6, name: '自然风光4K视频', category: '视频素材', price: '¥29.9', image: '🏞️' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">素材市场</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          精选优质创作素材，满足你的各种创作需求
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 border rounded-full hover:bg-muted/50 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <select className="p-2 border rounded-md">
            <option>最新上传</option>
            <option>下载最多</option>
            <option>价格从低到高</option>
            <option>价格从高到低</option>
          </select>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="搜索素材..."
            className="pl-10 pr-4 py-2 border rounded-md w-64"
          />
          <div className="absolute left-3 top-2.5 text-muted-foreground">🔍</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material) => (
          <div key={material.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-muted flex items-center justify-center text-4xl">
              {material.image}
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{material.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{material.category}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-primary">{material.price}</span>
                <button className="px-4 py-1 bg-primary text-primary-foreground text-sm rounded hover:bg-primary/90 transition-colors">
                  下载
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <button className="px-6 py-3 border rounded-md hover:bg-muted/50 transition-colors">
          加载更多
        </button>
      </div>
    </div>
  );
}