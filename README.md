# 顺德周末 · 2026年11月6–8日

两人从深圳北周五晚出发、周日返深的静态旅行攻略。11月4日修订为周六、周日 **10:00出发**，连住大良钟楼／清晖园附近两晚。

网站：https://zhongzihang.github.io/2026_ShunDe_Travel/

仓库：https://github.com/zhongzihang/2026_ShunDe_Travel

## 本次内容

- 周六清晖园、华盖路、老巷和金榜上街，午间休息；周日顺峰山、博物馆或容桂三选一。
- 小红书两篇正文提炼的路线和点单建议，注明作者、发布日期与原文。资料整理与个人游记分开标注，未照搬费用与早起方案。
- 去返交通由旅行者自选，页面不列具体列车班次，也不设全程费用测算章节。
- 景点详情、分类美食、住宿比较、准备清单、文字下载和浏览器打印。
- 已移除外部地图导航按钮，定位和详情留在本站。

## 真实地理导览图

使用本地固定版本 Leaflet 1.9.4，默认 Esri World Imagery 卫星影像，可切换 OpenStreetMap 街道底图。地图使用公开核对的WGS84经纬度，支持缩放、当日范围和站内景点详情；没有手绘道路、虚构水系或冒充步行导航的连线。

地图点位可能为地点中心或实拍位置，非精确出入口。影像为历史影像，日期随区域变化。联网时按当前视图加载底图，保留来源署名，不预抓取或打包在线瓦片；离线可查看本地景点照片和行程，但底图需要网络。

地点来源见 `research/place-coordinates.json`，影像服务信息见 `research/map-imagery-source.json`。Leaflet许可见 `assets/vendor/leaflet/LICENSE`。

## 实拍与来源

- 清晖园两张照片：EditQ，CC BY-SA 4.0。
- 顺峰山公园牌坊：Nissangeniss，CC BY-SA 4.0。
- 华盖路骑楼、民信双皮奶：Lau Hau Yatyue Tiger，CC0，2024年1月20日拍摄。

所有展示图片均为对应地点或菜品真实照片，进行等比例压缩及CSS裁切，没有生成式改绘。未取得对应实拍的景点／菜式使用文字卡，不放插画，不用其他地方或菜品冒充。

原图、作者与许可见 `assets/photo-credits.json` 和 `assets/photo-credits-v2.json`。小红书只保留摘要、作者、日期和公开原文链接，记录在 `research/xiaohongshu-notes.json`，不保存登录会话或访问令牌。门店地址、营业与票务仍以当前官方／门店信息为准。

## 维护与验证

无需安装依赖或构建。使用静态服务预览，也可直接打开HTML（联网地图仍需外部服务可达）。

```text
node --test tests/*.test.cjs
node --check app.js
node --check map.js
```

`data.js` 保存行程与来源，`core.js` 负责筛选、周日替换及文字导出；`map.js` 负责地图；`app.js` 负责页面。`styles.css` 为原有样式，`revision.css` 为实景地图与新版内容样式。

GitHub Actions 在推送 main 后执行测试并部署 Pages。准备清单仅保存在当前设备浏览器，不上传服务器。
