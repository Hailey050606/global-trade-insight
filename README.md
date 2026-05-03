# Global Trade Insight

单页国际贸易知识分享网站（可双击 `index.html` 直接打开）。

## V1.1 功能

- 全文搜索（专题 / 标签 / 案例 / 资源 / FAQ）
- 中英切换（右上角 `EN`/`中文`）
- 亮暗主题切换（右上角 `Light`/`Dark`）
- 专题详情弹窗（专题卡片内 `查看详情`）

## V1.2 功能

- 核心专题支持收藏（本地存储）
- 支持 `只看收藏` 筛选
- 推荐专题自动置顶显示
- 专题难度标签支持颜色区分（入门/中级/进阶）
- 内容扩展为更国际化区域覆盖（EU/US/APAC/Middle East/LATAM 等）

## V1.3 首屏增强

- 商业化 Hero 指标卡（可在 `content.js -> site.metrics` 维护）
- 全球覆盖市场滚动条带（可在 `content.js -> site.marketCoverage` 维护）
- 中英双语下指标与覆盖条带自动切换（`metricsEn` / `marketCoverageEn`）

## 文件说明

- `index.html`：页面结构
- `styles.css`：视觉风格和动效
- `app.js`：数据渲染与筛选逻辑
- `content.js`：站点内容数据（你后续主要改这个）

## 如何更新内容

1. 打开 `content.js`
2. 修改 `window.SITE_CONTENT` 中的字段（专题、案例、FAQ 等）
3. 如需双语，使用 `xxxEn` 字段（例如 `titleEn`、`summaryEn`、`qEn`）
4. 保存后刷新浏览器

## 内容字段建议

- 中文主字段：`title` / `summary` / `detail` / `tags`
- 英文字段：`titleEn` / `summaryEn` / `detailEn` / `tagsEn`
- 若某项没有英文字段，页面会自动回退到中文显示

## 部署到 GitHub Pages

1. 将本目录上传到 GitHub 仓库
2. 进入仓库 `Settings` -> `Pages`
3. `Source` 选择 `Deploy from a branch`
4. 分支选 `main`，目录选 `/ (root)`，保存
5. 等待部署完成，访问生成的网站地址
