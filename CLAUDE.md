# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目简介

这是一个基于React的AI创作平台前端项目，名为"创客"，提供数字人生成、脚本生成、智能剪辑等AI创作功能。项目使用现代化的技术栈和Magic UI设计风格。
项目背景必读文件(用户故事): ./CLAUDE.md
项目是纯前端项目, 为了保证页面的正常展示需要创建mock文件

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目（包含TypeScript编译）
npm run build

# 代码检查
npm run lint

# 预览构建产物
npm run preview
```

## 技术架构

### 核心技术栈
- **React 19** + **TypeScript** - 主要框架和类型安全
- **Vite** - 构建工具和开发服务器
- **React Router DOM** - 客户端路由
- **Tailwind CSS** - 样式系统（使用shadcn/ui配色方案）
- **Framer Motion** - 动画和交互效果
- **Lucide React** - 图标库

### 项目结构
```
src/
├── components/          # 共享组件
│   ├── Layout.tsx      # 根布局组件（包含导航和背景）
│   ├── Navigation.tsx  # 主导航栏（固定定位，滚动效果）
│   ├── Logo.tsx        # 品牌Logo组件（动画效果）
│   ├── MobileMenu.tsx  # 移动端菜单（滑入式）
│   ├── MagicBackground.tsx # 动态背景效果
│   └── ui/            # UI基础组件库
├── pages/             # 页面组件
├── router/            # 路由配置
└── lib/               # 工具函数
```

### 路由结构
项目采用嵌套路由，所有页面都在Layout组件内渲染：
- `/` - 首页
- `/digital-human` - 数字人生成
- `/script` - 脚本生成
- `/editing` - 智能剪辑
- `/materials` - 素材市场
- `/assistant` - 创作助手
- `/charity` - 公益服务
- `/login` - 登录
- `/trial` - 免费试用

### 设计系统
- **配色方案**：严禁使用紫色-蓝色-青色渐变（AI味太重）, 统一使用
    - #B17F59 #A5B68D #C1CFA1 #EDE8DC
- **动画**：使用framer-motion实现页面转场和交互动画, 需要大量的动画, 高端质感
- **响应式**：移动端优先设计，lg断点以上显示完整导航
- **主题**：支持明暗模式切换（通过Tailwind darkMode类）

### 关键组件说明

#### Navigation组件
- 固定定位，滚动时添加背景模糊和阴影
- 包含品牌Logo、导航菜单、认证按钮
- 移动端显示汉堡菜单按钮
- 活动页面有下划线指示器（layoutId动画）

#### Layout组件  
- 包含MagicBackground动态背景
- 为固定导航栏预留16高度占位空间
- 主内容区域相对定位z-10确保在背景之上

#### MagicBackground组件
- 渐变背景 + 网格动画
- 浮动粒子效果
- 鼠标跟随光晕
- 装饰性光晕动画

## 开发注意事项

- 使用`@/`别名导入src目录下的文件
- 所有动画效果使用framer-motion实现
- 样式使用Tailwind CSS类名，遵循shadcn/ui设计token
- 新页面需要在router/index.tsx中添加路由配置
- 组件命名使用PascalCase，文件名与组件名保持一致