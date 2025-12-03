# QuadTask 原型项目结构

## 📁 项目目录结构

```
prototype/
├── index.html                 # 主入口页面 - 所有页面的集成展示
├── css/
│   ├── global.css            # 全局样式和设计系统
│   └── components.css        # 组件样式库
├── js/
│   └── app.js                # 应用主逻辑和数据管理
├── pages/                    # 各个页面的HTML文件
│   ├── splash.html           # 启动页
│   ├── privacy.html          # 隐私声明页
│   ├── onboarding.html       # 新手引导页
│   ├── home.html             # 主视图 - 四象限矩阵
│   ├── add-task.html         # 快速添加任务弹出
│   ├── task-detail.html      # 任务详情页
│   ├── calendar.html         # 日历视图
│   ├── timeline.html         # 时间线视图
│   ├── focus.html            # 专注模式 - 番茄钟
│   ├── stats.html            # 统计分析页
│   ├── settings.html         # 设置页
│   └── help.html             # 帮助中心
└── PROJECT_STRUCTURE.md      # 本文件
```

## 🎯 页面功能说明

### 1. **index.html** - 主入口
- 集成所有原型页面
- 提供导航菜单
- 使用 iframe 嵌入各个页面
- 支持快速跳转到任意页面

### 2. **splash.html** - 启动页
- 应用Logo和名称展示
- 隐私承诺信息
- 立即开始和跳过按钮
- 加载动画效果

### 3. **privacy.html** - 隐私声明
- 隐私政策详细说明
- 数据保护承诺
- 离线使用说明
- 同意按钮

### 4. **onboarding.html** - 新手引导
- 3步卡片式引导
- 四象限概念教学
- 快速添加功能介绍
- 专注模式说明
- 进度指示器

### 5. **home.html** - 主视图
- 四象限矩阵布局（2x2网格）
- 搜索栏和视图切换
- 任务卡片展示
- 快速统计信息
- 浮动操作按钮(FAB)

### 6. **add-task.html** - 快速添加
- 任务标题输入
- 任务描述
- 象限选择器
- 截止日期选择
- 预计时长设置
- 标签输入
- 智能建议提示

### 7. **task-detail.html** - 任务详情
- 任务完整信息展示
- 子任务管理
- 进度条显示
- 任务元数据编辑
- 操作历史记录
- 开始专注按钮

### 8. **calendar.html** - 日历视图
- 月度日历展示
- 日期任务标记
- 周视图预览
- 今日任务列表
- 日期导航

### 9. **timeline.html** - 时间线视图
- 按时间顺序显示任务
- 时间线点标记
- 任务进度显示
- 时间段筛选
- 任务分组展示

### 10. **focus.html** - 专注模式
- 番茄钟计时器
- 圆形进度显示
- 播放/暂停/重置按钮
- 今日统计信息
- 会话历史记录
- 模式切换

### 11. **stats.html** - 统计分析
- 关键指标卡片
- 象限分布饼图
- 周趋势柱状图
- 完成率趋势
- 象限对比
- 时间段选择

### 12. **settings.html** - 设置页
- 通知设置
- 显示设置（深色模式）
- 数据管理（导入/导出）
- 自动备份
- 关于应用
- 隐私政策链接
- 清空数据选项

### 13. **help.html** - 帮助中心
- 搜索功能
- 快速开始指南
- 常见问题(FAQ)
- 功能指南
- 提示和技巧
- 联系支持

## 🎨 设计系统

### 色彩系统
```css
--color-primary: #007AFF;              /* 主色 - iOS Blue */
--color-urgent-important: #FF3B30;     /* 红色 - 重要&紧急 */
--color-not-urgent-important: #FF9500; /* 橙色 - 重要&不紧急 */
--color-urgent-not-important: #34C759; /* 绿色 - 不重要&紧急 */
--color-not-urgent-not-important: #A2845E; /* 棕色 - 不重要&不紧急 */
```

### 排版系统
- 标题: 28px, Bold
- 副标题: 20px, Semibold
- 正文: 16px, Regular
- 辅助文本: 14px, Regular
- 标签: 12px, Regular

### 间距系统
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px

### 圆角系统
- sm: 8px
- md: 12px
- lg: 16px
- full: 40px (App容器)

## 📱 设备模拟

### iPhone 15 Pro 规格
- 屏幕宽度: 390px
- 屏幕高度: 844px
- 顶部圆角: 40px
- 状态栏高度: 44px
- TabBar高度: 83px

## 🔧 技术栈

### 前端框架
- HTML5 - 语义化标签
- CSS3 - 现代样式
- Vanilla JavaScript - 交互逻辑

### 外部库
- TailwindCSS - 原子化CSS框架
- FontAwesome 6.4.0 - 图标库

### 数据存储
- LocalStorage API - 本地数据存储
- JSON 格式 - 数据导入/导出

## 🚀 使用指南

### 快速开始
1. 在浏览器中打开 `index.html`
2. 查看所有原型页面
3. 点击导航链接快速跳转
4. 与界面交互测试功能

### 开发建议
1. 每个页面都是独立的HTML文件，可直接用于开发
2. CSS样式已完全分离，便于维护和扩展
3. JavaScript逻辑简洁清晰，易于理解和修改
4. 所有页面都支持响应式设计

### 浏览器兼容性
- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+

## 📊 功能清单

### 核心功能
- ✅ 四象限任务管理
- ✅ 快速添加任务
- ✅ 任务详情编辑
- ✅ 多视图展示（矩阵、日历、时间线）
- ✅ 专注模式（番茄钟）
- ✅ 数据统计分析
- ✅ 本地数据存储
- ✅ 数据导入/导出

### 用户界面
- ✅ iOS风格设计
- ✅ 状态栏模拟
- ✅ 底部TabBar导航
- ✅ 浮动操作按钮(FAB)
- ✅ 模态框和弹出窗口
- ✅ 动画和过渡效果

### 交互功能
- ✅ 搜索和筛选
- ✅ 拖拽移动
- ✅ 长按操作
- ✅ 滑动导航
- ✅ 点击反馈

## 🔐 数据安全

- 所有数据存储在浏览器LocalStorage中
- 支持JSON格式导出备份
- 支持JSON格式导入恢复
- 无网络请求，完全离线
- 用户完全控制数据

## 📝 注意事项

1. **浏览器存储限制**: LocalStorage通常限制为5-10MB
2. **隐私模式**: 在浏览器隐私模式下，数据不会被保存
3. **跨域限制**: 由于安全限制，某些功能在本地文件协议下可能受限
4. **移动设备**: 建议在移动设备上使用Chrome或Safari获得最佳体验

## 🎓 学习资源

### 相关文档
- [README.md](../README.md) - 项目总览
- [设计规范](../README.md#高保真ui设计规范) - UI设计系统
- [API文档](../js/app.js) - JavaScript API

### 外部资源
- [TailwindCSS文档](https://tailwindcss.com)
- [FontAwesome图标](https://fontawesome.com)
- [MDN Web文档](https://developer.mozilla.org)

## 📞 技术支持

如有问题或建议，请通过以下方式联系:
- 📧 邮箱: support@quadtask.com
- 💬 反馈: 在应用中使用"联系支持"功能
- 🐛 Bug报告: 提供详细的复现步骤

---

**最后更新**: 2025-12-03
**版本**: 1.0.0
**状态**: 原型完成，可用于开发

