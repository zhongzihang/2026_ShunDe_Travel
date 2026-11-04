(function(root){const data={
  "sources": [
    {
      "id": "qinghui",
      "title": "清晖园博物馆 · 官方首页与参观服务",
      "url": "https://www.sdqinghuiyuan.cn/",
      "note": "常规票15元，9:00–17:30，17:00停止进园；大良钟楼站步行约450米。"
    },
    {
      "id": "ticket",
      "title": "清晖园 · 官方购票须知",
      "url": "https://www.sdqinghuiyuan.cn/detail/id/48.html",
      "note": "按官方渠道选日期与时段；平台附加讲解套餐不等于门票。"
    },
    {
      "id": "park",
      "title": "顺德融媒 · 大良公园与散步路线",
      "url": "https://app.shundeplus.com/index.php/m/a/180898.html",
      "note": "顺峰山为免费公园；文章为既有介绍，临时管理以现场公告为准。"
    },
    {
      "id": "museum",
      "title": "佛山新闻传媒中心 · 2026年11月文化场馆指南",
      "url": "https://www.fsonline.com.cn/FS_PLUS/1078755.html",
      "note": "顺德博物馆周二至周日9:00–17:00，16:30停止入馆，个人免费免预约、凭身份证入馆。"
    },
    {
      "id": "museum-official",
      "title": "顺德博物馆 · 官方票务与场馆平台",
      "url": "https://www.sdmuseum.com.cn/ticket-pc/",
      "note": "出发前核对展览、临时闭馆和团队预约要求。"
    },
    {
      "id": "milk",
      "title": "南方+ · 金榜上街与牛乳文化",
      "url": "https://static.nfnews.com/content/202008/29/c3965940.html",
      "note": "用于街区与传统奶食背景；不作为当前店铺营业时间、价格或评分依据。"
    },
    {
      "id": "food",
      "title": "顺德图书馆 · 美食数据库",
      "url": "https://www.sdlib.com.cn/home/sdms/detail/id/113777.html",
      "note": "确认民信、欢姐等传统美食品牌；具体门店、营业与菜单临行确认。"
    },
    {
      "id": "hotel1",
      "title": "首旅如家 · 大良钟楼清晖园景区华驿酒店",
      "url": "https://www.bthhotels.com/wap/HotelInfo/AY1408?pt=info",
      "note": "官网确认门店存在和老城位置；未取得指定两晚可订价。官网地铁线路笔误不采用。"
    },
    {
      "id": "hotel2",
      "title": "携程 · 全季清晖园景区店",
      "url": "https://hotels.ctrip.com/hotels/133272287.html",
      "note": "地址清晖路38号；仅作位置和门店候选，不引用动态评分及展示价。"
    },
    {
      "id": "hotel3",
      "title": "首旅如家 · 大良清晖园店",
      "url": "https://www.bthhotels.com/wap/HotelInfo/J76501?pt=info",
      "note": "门店位于南国中路，距离老城较远，需比较差价与接驳成本。"
    },
    {
      "id": "ronggui",
      "title": "容桂渔人码头 · 街区介绍",
      "url": "https://www.020kh.com/foshan/travel/yurenmatou",
      "note": "用于可选街区介绍；公共街区免费，店铺和项目收费另计。"
    },
    {
      "id": "weather",
      "title": "中国天气网 · 佛山天气",
      "url": "https://www.weather.com.cn/weather/101280800.shtml",
      "note": "本次未取得可核实的11月6–8日逐日预报，不填报推测温度和降雨。"
    },
    {
      "id": "xhs-route",
      "title": "小红书 · Summer叮叮当的大良与容桂路线整理",
      "url": "https://www.xiaohongshu.com/explore/6ac67276000000001c02f110",
      "note": "2026-10-08发布，正文注明依据公开资料整理。用于片区顺序、街巷和点单线索，不把它当作亲历评价或官方公告。"
    },
    {
      "id": "xhs-weekend",
      "title": "小红书 · 黑松露肠粉的顺德两日游记",
      "url": "https://www.xiaohongshu.com/explore/6a045f660000000036001a36",
      "note": "2026-05-13发布。参考热门奶食等位、华盖路逛吃和渔人码头时段体验；主观感受与当前营业分开。"
    },
    {
      "id": "xhs-tea-check",
      "title": "携程 · 華叔茶記门店位置",
      "url": "https://you.ctrip.com/food/foshan207/78714933.html",
      "note": "公开门店页与小红书所写门牌不完全一致，因此不把旧门牌及营业时刻当作保证，按门店名称核对。"
    },
    {
      "id": "map-data",
      "title": "OpenStreetMap · 地点数据与许可",
      "url": "https://www.openstreetmap.org/copyright",
      "note": "金榜上街、华盖山栈道、顺德博物馆和容桂渔人码头使用公开地理编码结果；均为WGS84。"
    },
    {
      "id": "map-imagery",
      "title": "Esri · World Imagery卫星实景底图",
      "url": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
      "note": "卫星影像为历史影像，拍摄日期随区域变化；地图下方保留底图署名。"
    },
    {
      "id": "wsj-milk-2026",
      "title": "蜗食记 · 客家妹妹 · 顺德华盖路甜品4家实测",
      "url": "https://www.woshiji.cn/show-20-5474-1.html",
      "note": "2026-02-26发布，署名个人试吃。补充民信和仁信的甜度、奶味与姜味意见。不能据单个作者宣称店铺普遍不好。"
    },
    {
      "id": "ctrip-dongge-2020",
      "title": "携程游记 · 东哥到处走 · 顺德三日，你猜我吃了几顿饭？",
      "url": "https://gs.ctrip.com/html5/you/travels/207/3958412.html",
      "note": "2020-07-14发布，历史个人游记。仁信与金榜欢记的历史口味、空间和售罄反馈，必须显示2020年。"
    },
    {
      "id": "smzdm-xiaoxiao-2018",
      "title": "什么值得买 · 潇潇（原文署名，账号：极简旅行） · 顺德 | 值得专程去吃的美食之都，一天八顿都去哪儿吃？",
      "url": "https://post.smzdm.com/p/725802/",
      "note": "2018-07-06发布，历史个人游记。少量概括民信、顺德人家与毋米粥的历史体验。旧价格、营业和服务模式都不能写成当前承诺。"
    },
    {
      "id": "trip-zhubelly-2020",
      "title": "Trip Moments · zbz1129 · 佛山了能私房菜",
      "url": "https://hk.trip.com/moments/detail/foshan-207-8264506/",
      "note": "2020-07-12发布，历史个人体验。农家乐式环境和作者喜欢的河鱼、椒盐豆腐、清远鸡，仅作历史主观反馈。"
    },
    {
      "id": "trip-leneng-2021",
      "title": "Trip.com餐厅点评 · 睿纾 · 𠮩𠹌私房菜（近良店）用户点评",
      "url": "https://hk.trip.com/restaurant/china/foshan/detail/ngai-ngan-private-cuisine-11641292/",
      "note": "2021-01-13发布，历史具名游客点评。该次点评称点菜看门口图示，上菜快，喜欢烧鹅、家乡鱼饼等，分量可；并非实时服务承诺。"
    },
    {
      "id": "ctrip-wumizhou-2023",
      "title": "携程餐厅点评 · YoYo_4Y5K7U0D · 太艮堡毋米粥（锦龙路总店）用户点评",
      "url": "https://you.ctrip.com/food/shanghai207/5490133-dianping.html",
      "note": "2023-07-15发布，历史具名游客点评。该次海鲜和粥底评价较好，蔬菜选择和品质评价差。不能把该次无等位当实时结论。"
    },
    {
      "id": "sdlib-tea-2024",
      "title": "顺德图书馆（信息来源：顺德发布） · 顺德发布 · 用美味唤醒一座城！顺德人私藏的「早茶寻味地图」",
      "url": "https://www.sdlib.com.cn/home/sdms/detail/id/121732.html",
      "note": "2024-05-08发布，官方餐饮介绍。支持顺德人家虾饺皇、绿茶红豆薄撑、XO酱陈村粉等招牌菜，不是游客试吃。"
    },
    {
      "id": "minxin-location",
      "title": "去哪儿 · 民信华盖路店门牌与菜品",
      "url": "https://touch.travel.qunar.com/poi/3185169",
      "note": "用于核对具体门店与菜品，未作本周末在营和实时等位承诺。"
    },
    {
      "id": "wumizhou-location",
      "title": "Trip.com · 毋米粥锦龙路总店资料",
      "url": "https://tw.trip.com/restaurant/china/foshan/detail/tai-gen-bao-wu-mi-zhouzhou-di-huo-guo-11641062/",
      "note": "核对锦龙路270号、品牌别名与菜品线索；旧营业时刻冲突，未采用。"
    },
    {
      "id": "shunderenjia-location",
      "title": "顺德图书馆 · 顺德人家食府门店",
      "url": "https://www.sdlib.com.cn/home/sdms/mscymdxqy/id/110977.html",
      "note": "核对太艮路11号黄金商业广场2层；供应与茶位另行确认。"
    }
  ],
  "places": [
    {
      "id": "qinghui",
      "number": "01",
      "name": "清晖园",
      "english": "QINGHUI GARDEN",
      "area": "大良老城",
      "tag": "周六主角",
      "image": "assets/qinghui.webp",
      "alt": "清晖园真实园景，历史照片",
      "time": "建议 1.5–2 小时",
      "price": "常规成人票 ¥15",
      "hours": "官方常规 09:00–17:30；17:00停止进园",
      "description": "10点从酒店出发，先把完整的两小时留给岭南园林。看水庭、游廊、金片玻璃和满洲窗，走累了就在廊下歇一会儿。",
      "tips": [
        "周六10:00出门，建议10:15左右入园；按官方购票时段安排，不再抢清晨。",
        "官网首页开园时间与列示时段有差异，以所购时段和当日公告为准。",
        "先看水庭，再沿回廊找彩色玻璃窗；雨天也有廊道可避雨。"
      ],
      "sources": [
        "qinghui",
        "ticket",
        "xhs-route"
      ],
      "photoCredit": "EditQ / CC BY-SA 4.0",
      "coords": [
        22.83838749,
        113.2501924
      ],
      "coordDatum": "WGS84",
      "coordSource": "https://zh.wikipedia.org/wiki/清晖园",
      "coordNote": "地点坐标，入园仍按现场入口"
    },
    {
      "id": "huagai",
      "number": "02",
      "name": "华盖路步行街",
      "english": "ARCADES & OLD STREETS",
      "area": "大良老城",
      "tag": "走着逛吃",
      "image": "assets/photos-v2/huagai-road.webp",
      "time": "建议 45–60 分钟",
      "price": "公共街区免费",
      "hours": "街区可步行，门店营业各异",
      "description": "从清晖园出来，转进骑楼和小店之间。午饭、甜品、买手信都放在这一片，少花时间折返。",
      "tips": [
        "沿清晖路接华盖路，骑楼柱廊和小店适合白天慢逛；晚饭后也可回来走一小段。",
        "民信或仁信选一家试原味双皮奶，两个人先点一碗。",
        "周末热门店排队超过20分钟，就换附近同类店。"
      ],
      "sources": [
        "milk",
        "qinghui",
        "xhs-route",
        "xhs-weekend"
      ],
      "alt": "顺德华盖路骑楼商铺与绿色立柱，2024年1月真实街景",
      "photoCredit": "Lau Hau Yatyue Tiger / CC0",
      "coords": [
        22.838035,
        113.247642
      ],
      "coordDatum": "WGS84",
      "coordSource": "https://commons.wikimedia.org/w/index.php?curid=144488455",
      "coordNote": "华盖路实拍位置，不代表街道入口"
    },
    {
      "id": "jinbang",
      "number": "03",
      "name": "金榜上街",
      "english": "MILK-SCENTED LANES",
      "area": "大良老城",
      "tag": "奶香小巷",
      "image": "",
      "time": "建议 45–60 分钟",
      "price": "街区免费，按点单消费",
      "hours": "店铺营业与售罄情况各异",
      "description": "沿着老街找一碗水牛奶、一份奶食。这里适合边走边歇，小份分享，让肚子还装得下晚餐。",
      "tips": [
        "沿华盖路接莘村大街、金山大街再到金榜上街，给老巷慢逛留60分钟左右。",
        "双皮奶、姜撞奶、水牛奶三选二即可。",
        "牛乳片常带咸味，买前先试味；不按甜奶片想象。"
      ],
      "sources": [
        "milk",
        "xhs-route"
      ],
      "coords": [
        22.8402481,
        113.2425951
      ],
      "coordDatum": "WGS84",
      "coordSource": "https://nominatim.openstreetmap.org/search?q=%E9%87%91%E6%A6%9C%E4%B8%8A%E8%A1%97+%E9%A1%BA%E5%BE%B7&format=jsonv2&limit=2&countrycodes=cn",
      "coordNote": "公开地点中心点，非精确出入口"
    },
    {
      "id": "huagaishan",
      "number": "04",
      "name": "华盖山栈道",
      "english": "A SMALL HILL BREAK",
      "area": "大良老城",
      "tag": "体力够再加",
      "image": "",
      "time": "弹性 30–50 分钟",
      "price": "公共步道免费",
      "hours": "以现场开放和天气为准",
      "description": "吃过午饭后，如果天气舒适，可以从老城加一小段山林步道。遇雨或腿累，直接坐下来喝东西。",
      "tips": [
        "有台阶和起伏，穿防滑鞋。",
        "这是周六的可选项，不占用清晖园和正餐时间。",
        "不为了完成环线硬走，选择原路返回也很轻松。"
      ],
      "sources": [
        "park"
      ],
      "coords": [
        22.83836,
        113.2458759
      ],
      "coordDatum": "WGS84",
      "coordSource": "https://nominatim.openstreetmap.org/search?q=%E5%8D%8E%E7%9B%96%E5%B1%B1+%E9%A1%BA%E5%BE%B7&format=jsonv2&limit=2&countrycodes=cn",
      "coordNote": "公开地点中心点，非精确出入口"
    },
    {
      "id": "shunfeng",
      "number": "05",
      "name": "顺峰山公园",
      "english": "SLOW MORNING BY THE LAKE",
      "area": "大良东侧",
      "tag": "周日推荐",
      "image": "assets/shunfeng.webp",
      "alt": "顺峰山公园牌坊实拍，历史照片",
      "time": "建议 1.5–2 小时",
      "price": "公园免费",
      "hours": "周日10:00出发，约10:20–12:00游玩；临时管理以公告为准",
      "description": "从北门牌坊走到湖边，挑一段舒服的路慢慢逛。周日只留这一处主景点，午饭后从容取行李返深。",
      "tips": [
        "从老城打车按15–25分钟预留，费用和车程是规划估算。",
        "只走北门—牌坊—湖边一小圈，不把环湖和登山都塞进来。",
        "出发前看天气；下雨就切换到顺德博物馆。"
      ],
      "sources": [
        "park"
      ],
      "photoCredit": "Nissangeniss / CC BY-SA 4.0",
      "coords": [
        22.82623,
        113.27769
      ],
      "coordDatum": "WGS84",
      "coordSource": "https://zh.wikipedia.org/wiki/顺峰山公园",
      "coordNote": "公园地点中心点，游玩从北门一侧展开"
    },
    {
      "id": "museum",
      "number": "06",
      "name": "顺德博物馆",
      "english": "A RAINY-DAY DETOUR",
      "area": "大良新城",
      "tag": "雨天替换",
      "image": "",
      "time": "建议 1.5–2 小时",
      "price": "个人免费",
      "hours": "周二至周日09:00–17:00，16:30停止入馆",
      "description": "想多了解顺德的历史和风物，或遇到下雨，就把周日公园替换为博物馆。它与老城不在同一片，单独安排接驳。",
      "tips": [
        "近期场馆指南显示个人免预约、凭身份证入馆，临行再核对官方公告。",
        "团队及讲解服务另按官方要求预约。",
        "10:00从酒店出发，10:30–12:15参观；之后午饭与取行李。"
      ],
      "sources": [
        "museum",
        "museum-official"
      ],
      "coords": [
        22.8017452,
        113.2883393
      ],
      "coordDatum": "WGS84",
      "coordSource": "https://nominatim.openstreetmap.org/search?q=%E9%A1%BA%E5%BE%B7%E5%8D%9A%E7%89%A9%E9%A6%86&format=jsonv2&limit=2&countrycodes=cn",
      "coordNote": "公开地点中心点，非精确出入口"
    },
    {
      "id": "ronggui",
      "number": "07",
      "name": "容桂渔人码头",
      "english": "RIVERSIDE ALTERNATIVE",
      "area": "容桂",
      "tag": "替换周日",
      "image": "",
      "time": "建议 1.5–2 小时",
      "price": "公共街区免费，消费另计",
      "hours": "店铺营业时间各异",
      "description": "更喜欢江边、咖啡和旧工业街区，可以把周日换成容桂。回程还要取老城行李，整段应比公园方案多留交通余量。",
      "tips": [
        "从大良老城出发，单程打车按25–40分钟预留，属于规划估算。",
        "周日10:00出发，10:40–12:15逛江边，午饭后13:30左右回老城取行李。",
        "本次周日要返深，不安排等日落；傍晚氛围留给下次。"
      ],
      "sources": [
        "ronggui"
      ],
      "coords": [
        22.7828078,
        113.2654468
      ],
      "coordDatum": "WGS84",
      "coordSource": "https://nominatim.openstreetmap.org/search?q=%E6%B8%94%E4%BA%BA%E7%A0%81%E5%A4%B4+%E5%AE%B9%E6%A1%82&format=jsonv2&limit=2&countrycodes=cn",
      "coordNote": "公开地点中心点，非精确出入口"
    },
    {
      "id": "foshan",
      "number": "08",
      "name": "佛山祖庙 / 岭南天地",
      "english": "ANOTHER WEEKEND",
      "area": "禅城",
      "tag": "跨区替换思路",
      "image": "",
      "time": "至少半天 + 跨区交通",
      "price": "祖庙门票需另查，街区消费另计",
      "hours": "演出与开放信息未核实",
      "description": "如果这次更想看醒狮和佛山老城，可整段替换周日。禅城距大良较远，这份轻松版更推荐把时间留给顺德。",
      "tips": [
        "不要和顺峰山、容桂同时叠加。",
        "需要先核实祖庙当日演出与门票，再调整广州南返程时间。",
        "本站不把未核实的演出时间或票价写成确定安排。"
      ],
      "sources": []
    }
  ],
  "foods": [
    {
      "id": "tea",
      "name": "顺德人家食府（黄金广场店）",
      "shopName": "顺德人家食府",
      "branch": "黄金广场店 · 把早茶当一顿饭",
      "category": "早茶",
      "area": "大良太艮路",
      "address": "大良太艮路11号黄金商业广场2层",
      "coverWord": "早茶",
      "dish": "虾饺皇 / XO酱陈村粉 / 豉汁凤爪或蒸排骨 / 绿茶红豆薄撑",
      "description": "10点出门也能把早茶当早午餐，先问茶位，再点少量茶点。",
      "cardSummary": "10点出门也能把早茶当早午餐，先问茶位，再点少量茶点。",
      "order": [
        {
          "name": "虾饺皇",
          "note": "先点一笼，问清每笼件数，趁热分着吃。"
        },
        {
          "name": "XO酱陈村粉",
          "note": "点一份作主食，酱香与薄滑口感适合搭清茶。"
        },
        {
          "name": "凤爪或排骨",
          "note": "两款先选一款，避免点心加粉过量。"
        },
        {
          "name": "绿茶红豆薄撑",
          "note": "还有胃口、又想吃甜口时再加；本次不必与双皮奶都点。"
        }
      ],
      "flavor": "虾饺偏鲜甜，陈村粉薄滑；薄撑可作甜口加点。两人先吃咸口，再决定是否加甜点。",
      "environment": "传统大型广式茶楼，有大厅和不同厅房。历史游客提醒不同区域茶位收费有差异，到店先问当前茶位和最低消费。",
      "waiting": "周日10点出门不承诺免排队；先确认茶点仍供应和可接受的等位，再决定是否入座。",
      "twoPeople": "先点虾饺、凤爪或排骨、1份陈村粉，共3样；还饿再加粥或甜点。先问每笼件数、当前茶位、是否仍供应茶点。",
      "goodFor": "想吃广式茶点、愿意先问茶位和份量的两个人。",
      "routeLabel": "周日午饭候选 · 需确认茶点供应",
      "routeFit": "可在顺峰山后作为午饭候选，先确认中午仍供应茶点及接驳距离；若等位影响取行李，就选返程方向的简餐。不要把喝茶硬塞进10点出门后的公园前。",
      "placeId": "shunfeng",
      "experienceBasis": "点单份量与顺路安排为本次规划建议。环境和食客意见保留原文年份，不代表2026年11月现场实测。",
      "candidate": "门牌用于识别具体分店；出发前确认当日营业、茶位或收费、菜单和供应。",
      "reviews": [
        {
          "sourceId": "smzdm-xiaoxiao-2018",
          "kind": "personal",
          "source": "什么值得买",
          "author": "潇潇（账号：极简旅行）",
          "date": "2018-07-06",
          "title": "历史个人游记 · 2018",
          "summary": "喜欢陈村粉与薄撑等出品，也记录不同厅茶位费差异导致结账意外；应先问收费，不能沿用2018价格。",
          "url": "https://post.smzdm.com/p/725802/"
        }
      ],
      "sources": [
        "sdlib-tea-2024",
        "shunderenjia-location",
        "smzdm-xiaoxiao-2018"
      ]
    },
    {
      "id": "milk",
      "name": "民信老铺（华盖路店）",
      "shopName": "民信老铺",
      "branch": "华盖路店 · 与仁信二选一",
      "category": "甜品",
      "area": "华盖路",
      "address": "大良华盖路119号（携程/去哪儿常列115–119号）",
      "coverWord": "奶香",
      "dish": "原味双皮奶 / 姜撞奶",
      "description": "清晖园后先分一碗原味双皮奶，把胃口留给下一站。",
      "cardSummary": "清晖园后先分一碗原味双皮奶，把胃口留给下一站。",
      "order": [
        {
          "name": "原味双皮奶",
          "note": "先点一碗两人分食，冷热按个人喜好；糖度能否调整先问。"
        },
        {
          "name": "姜撞奶",
          "note": "两人都喜欢姜味再加，和双皮奶不用一开始各点两份。"
        }
      ],
      "flavor": "2026年一位偏低糖作者觉得半糖也甜；先试原味与奶皮，再判断合不合口味，不用为了名气硬吃完。",
      "environment": "华盖路骑楼步行街中的热门老铺。现有小红书游记提醒人多；不把它当安静久坐的唯一休息点。",
      "waiting": "个人游记提到民信人多，但没有可用于本周末的实时分钟数；到店先看排队长度，等待超过可接受范围就换同街候选。",
      "twoPeople": "先点1碗原味双皮奶分享；还想试第二款再加姜撞奶。怕甜先问当前是否可选糖度，民信与仁信本次只选一家。",
      "goodFor": "第一次来想尝一碗经典奶食、能接受偏甜口的人。",
      "routeLabel": "周六14:45 · 华盖路停一停",
      "routeFit": "周六清晖园之后或华盖路散步时顺路停留；建议留20–40分钟，属于规划预留。",
      "placeId": "huagai",
      "experienceBasis": "点单份量与顺路安排为本次规划建议。环境和食客意见保留原文年份，不代表2026年11月现场实测。",
      "candidate": "门牌用于识别具体分店；出发前确认当日营业、茶位或收费、菜单和供应。",
      "reviews": [
        {
          "sourceId": "xhs-weekend",
          "kind": "personal",
          "source": "小红书",
          "author": "黑松露肠粉",
          "date": "2026-05-13",
          "title": "个人游记",
          "summary": "把民信双皮奶列为华盖路小吃，但强调热门店人多。",
          "url": "https://www.xiaohongshu.com/explore/6a045f660000000036001a36"
        },
        {
          "sourceId": "wsj-milk-2026",
          "kind": "personal",
          "source": "蜗食记",
          "author": "客家妹妹",
          "date": "2026-02-26",
          "title": "个人口味：偏低糖",
          "summary": "点半糖冻双皮奶，认为奶皮比仁信厚，但对其甜度和奶味评价保留；她自述偏好无糖或三分糖。",
          "url": "https://www.woshiji.cn/show-20-5474-1.html"
        }
      ],
      "sources": [
        "minxin-location",
        "wsj-milk-2026",
        "xhs-weekend"
      ],
      "image": "assets/photos-v2/double-skin-milk.webp",
      "alt": "顺德华盖路民信老店的一碗原味双皮奶，2024年1月实拍",
      "photoCredit": "Lau Hau Yatyue Tiger / CC0",
      "photoCaption": "民信华盖路店原味双皮奶 · 2024年1月实拍"
    },
    {
      "id": "renxin",
      "name": "仁信老铺（华盖路店）",
      "shopName": "仁信老铺",
      "branch": "华盖路店 · 民信排队时的同街备选",
      "category": "甜品",
      "area": "华盖路",
      "address": "大良华盖路93号",
      "coverWord": "姜香",
      "dish": "原味双皮奶 / 姜撞奶",
      "description": "和民信二选一；想试姜撞奶时先确认能否接受明显姜味。",
      "cardSummary": "和民信二选一；想试姜撞奶时先确认能否接受明显姜味。",
      "order": [
        {
          "name": "原味双皮奶",
          "note": "作为基础口味先试一碗，两人分食。"
        },
        {
          "name": "姜撞奶",
          "note": "姜香明显，不吃姜的人不用跟着热门点单。"
        },
        {
          "name": "炸鲜奶",
          "note": "历史游客认为偏油；已吃奶食时不必继续叠加。"
        }
      ],
      "flavor": "有人喜欢顺滑与甜辣平衡，也有人觉得低糖仍甜、姜味突出；不吃姜就从原味双皮奶开始。",
      "environment": "2020年游客写过高峰一座难求、店内嘈杂；这是历史体验，当前座位和服务流程以到店为准。",
      "waiting": "到店先确认座位和点单方式；不把历史‘高峰难找座’换算为当前等位时长。",
      "twoPeople": "一碗双皮奶起步；两人都吃姜才加一碗姜撞奶。已经在民信吃过就把此店留作替换，不再叠加两碗奶食。",
      "goodFor": "喜欢奶香与姜香、愿意根据甜度和姜辣感选口味的人。",
      "routeLabel": "周六华盖路 · 甜品二选一",
      "routeFit": "周六华盖路时作民信备选；建议预留20–40分钟，属于规划建议。",
      "placeId": "huagai",
      "experienceBasis": "点单份量与顺路安排为本次规划建议。环境和食客意见保留原文年份，不代表2026年11月现场实测。",
      "candidate": "门牌用于识别具体分店；出发前确认当日营业、茶位或收费、菜单和供应。",
      "reviews": [
        {
          "sourceId": "ctrip-dongge-2020",
          "kind": "personal",
          "source": "携程游记",
          "author": "东哥到处走",
          "date": "2020-07-14",
          "title": "历史个人游记 · 2020",
          "summary": "喜欢双皮奶、姜撞奶；觉得炸鲜奶油腻、室内嘈杂，少了悠闲吃甜品的感觉。",
          "url": "https://gs.ctrip.com/html5/you/travels/207/3958412.html"
        },
        {
          "sourceId": "wsj-milk-2026",
          "kind": "personal",
          "source": "蜗食记",
          "author": "客家妹妹",
          "date": "2026-02-26",
          "title": "个人口味：偏低糖",
          "summary": "点过低糖冻双皮奶与热姜撞奶，认为奶皮偏薄、姜味辛辣突出；不吃姜的人慎选。",
          "url": "https://www.woshiji.cn/show-20-5474-1.html"
        }
      ],
      "sources": [
        "wsj-milk-2026",
        "ctrip-dongge-2020"
      ]
    },
    {
      "id": "huanji",
      "name": "金榜欢记牛奶牛乳",
      "shopName": "金榜欢记牛奶牛乳",
      "branch": "金榜上街19号 · 一瓶奶的小停留",
      "category": "甜品",
      "area": "金榜上街",
      "address": "大良金榜上街19号",
      "coverWord": "牛乳",
      "dish": "水牛奶 / 双皮奶 / 咸牛乳片",
      "description": "金榜街小店喝一瓶水牛奶；咸牛乳片与甜双皮奶是不同东西。",
      "cardSummary": "金榜街小店喝一瓶水牛奶；咸牛乳片与甜双皮奶是不同东西。",
      "order": [
        {
          "name": "水牛奶",
          "note": "先共享一瓶；想买回深圳，先问保存温度与可携带时间。"
        },
        {
          "name": "双皮奶",
          "note": "如果华盖路已吃过，本次跳过也完整。"
        },
        {
          "name": "咸牛乳片",
          "note": "先确认是咸口、怎么搭配，不按甜品一口接一口吃。"
        }
      ],
      "flavor": "水牛奶和双皮奶属于奶香甜口；牛乳片是咸口奶制品，先问吃法，两者别当同一种甜点。",
      "environment": "历史游记描述为小巷深处的小店，座位少，可能坐在外面或外带；不保证当前门店布置相同。",
      "waiting": "旧游记记录临近打烊时凤凰奶糊售罄；若专程为了某一款，去之前先确认供应，不以旧文营业时刻安排。",
      "twoPeople": "共享1瓶水牛奶起步；如果前面没有吃双皮奶再加1碗。买牛乳片先问是否咸口、保存温度和可常温携带多久。",
      "goodFor": "更想尝水牛奶与传统牛乳片，愿意外带慢慢走的人。",
      "routeLabel": "周六16:00 · 金榜街巷散步",
      "routeFit": "周六莘村大街—金山大街—金榜上街散步中停留；建议留20–30分钟，属于规划预留。",
      "placeId": "jinbang",
      "experienceBasis": "点单份量与顺路安排为本次规划建议。环境和食客意见保留原文年份，不代表2026年11月现场实测。",
      "candidate": "门牌用于识别具体分店；出发前确认当日营业、茶位或收费、菜单和供应。",
      "reviews": [
        {
          "sourceId": "ctrip-dongge-2020",
          "kind": "personal",
          "source": "携程游记",
          "author": "东哥到处走",
          "date": "2020-07-14",
          "title": "历史个人游记 · 2020",
          "summary": "喜欢水牛奶和双皮奶；记录店小、常需外坐或外带，临近闭店时想吃的凤凰奶糊已售罄。",
          "url": "https://gs.ctrip.com/html5/you/travels/207/3958412.html"
        }
      ],
      "sources": [
        "ctrip-dongge-2020"
      ]
    },
    {
      "id": "cantonese",
      "name": "了能私房菜（近良店）",
      "shopName": "了能私房菜",
      "branch": "近良店 · 家常顺德菜",
      "category": "正餐",
      "area": "大良近良",
      "address": "大良祥兴南路永乐巷11号（部分资料简写祥兴南路11号）",
      "coverWord": "私房",
      "dish": "招牌烧鹅 / 煎家乡鱼饼 / 客家豆腐 / 椒盐豆腐 / 猪肚汤",
      "description": "烧鹅或鱼饼选一道，再搭豆腐与青菜，两人不必复制大桌菜单。",
      "cardSummary": "烧鹅或鱼饼选一道，再搭豆腐与青菜，两人不必复制大桌菜单。",
      "order": [
        {
          "name": "烧鹅或煎家乡鱼饼",
          "note": "先选一道主菜，问能否点小例，再决定加哪道。"
        },
        {
          "name": "客家豆腐或椒盐豆腐",
          "note": "两种做法选一种，以当日菜单为准。"
        },
        {
          "name": "时蔬与米饭",
          "note": "配一份青菜和主食就能成一顿饭。"
        },
        {
          "name": "猪肚汤",
          "note": "先问是否有小例；若只有大煲，减少一道菜。"
        }
      ],
      "flavor": "家常鲜香路线；烧鹅、鱼饼都是值得查菜单的候选，两人不必把大桌招牌逐个复制。",
      "environment": "2020年游客形容有农家乐的感觉；为朴素私房菜氛围，当前席面与包间状况没有实测。",
      "waiting": "预约、等位、到店点菜流程未核实；周六午餐前确认门牌和接单，别仅按‘了能’模糊店名导航。",
      "twoPeople": "先在烧鹅和家乡鱼饼中选1道，配1份豆腐、1份青菜和米饭；想喝猪肚汤先问小例，若只有大煲则减一道菜。",
      "goodFor": "想吃一顿家常顺德菜、重视菜品多过安静精致环境的人。",
      "routeLabel": "周六午餐候选 · 单独接驳",
      "routeFit": "周六午餐可作顺德菜候选；近良片区需单独接驳，不写成清晖园门口的步行小店。建议留60–90分钟，属于规划预留。",
      "placeId": "qinghui",
      "experienceBasis": "点单份量与顺路安排为本次规划建议。环境和食客意见保留原文年份，不代表2026年11月现场实测。",
      "candidate": "请核对近良店、永乐巷11号，别混成同名其他分店；预约、菜单与供应先确认。",
      "reviews": [
        {
          "sourceId": "trip-zhubelly-2020",
          "kind": "personal",
          "source": "Trip Moments",
          "author": "zbz1129",
          "date": "2020-07-12",
          "title": "历史个人体验 · 2020",
          "summary": "觉得像农家乐，喜欢河鱼、椒盐豆腐和清远鸡。",
          "url": "https://hk.trip.com/moments/detail/foshan-207-8264506/"
        },
        {
          "sourceId": "trip-leneng-2021",
          "kind": "personal",
          "source": "Trip.com餐厅点评",
          "author": "睿纾",
          "date": "2021-01-13",
          "title": "历史游客点评 · 2021",
          "summary": "该次喜欢烧鹅、家乡鱼饼等，认为分量可、上菜快；服务速度是单次历史体验。",
          "url": "https://hk.trip.com/restaurant/china/foshan/detail/ngai-ngan-private-cuisine-11641292/"
        }
      ],
      "sources": [
        "trip-zhubelly-2020",
        "trip-leneng-2021"
      ]
    },
    {
      "id": "porridge",
      "name": "大良毋米粥·粥水火锅（锦龙路总店）",
      "shopName": "大良毋米粥",
      "branch": "锦龙路总店 · 粥水火锅",
      "category": "正餐",
      "area": "大良锦龙路",
      "address": "大良锦龙路270号",
      "coverWord": "粥底",
      "dish": "粥水锅底 / 白贝、鱼片、肉滑中选两类 / 时蔬",
      "description": "白贝、鱼片、肉滑少量分批点，最后留一点胃口喝粥。",
      "cardSummary": "白贝、鱼片、肉滑少量分批点，最后留一点胃口喝粥。",
      "order": [
        {
          "name": "粥水锅底",
          "note": "先确认锅底、茶位与服务方式，不把历史代煮体验当承诺。"
        },
        {
          "name": "白贝或鱼片",
          "note": "海鲜先选一类小份；喜欢再加，食材充分煮熟。"
        },
        {
          "name": "肉滑与时蔬",
          "note": "各来一份，问清重量和能否半份，先看菜的鲜度。"
        },
        {
          "name": "最后的粥",
          "note": "给融合食材滋味的粥留一点胃口，不用另外堆很多主食。"
        }
      ],
      "flavor": "米汤衬食材原味，整体较清淡；最后的粥比开锅时更有味。蔬菜到店看鲜度后再点。",
      "environment": "2018年游记写总店陈设古朴、当次有人协助下锅；仅作历史体验，不承诺本次全程代煮。",
      "waiting": "晚市是否可预约、如何取号与具体等多久均未实时核实；周六下午先确认，再决定18点左右前往。",
      "twoPeople": "1个粥底，海鲜或鱼肉选1–2盘，再加1盘肉滑和1份菜；先问半份与重量，吃完再加，避免整鱼加多盘肉过量。食材充分煮熟。",
      "goodFor": "喜欢食材原味、想坐下来慢慢吃热乎一餐的人。",
      "routeLabel": "周六18:00 · 独立一顿晚餐",
      "routeFit": "适合作周六独立晚餐，预留90分钟左右；锦龙路不是华盖路步行段，单独查接驳，均为规划建议。",
      "placeId": "huagai",
      "experienceBasis": "点单份量与顺路安排为本次规划建议。环境和食客意见保留原文年份，不代表2026年11月现场实测。",
      "candidate": "公开条目也称“太艮堡毋米粥”，以锦龙路270号核对。晚市取号、菜单和供应需确认。",
      "reviews": [
        {
          "sourceId": "smzdm-xiaoxiao-2018",
          "kind": "personal",
          "source": "什么值得买",
          "author": "潇潇（账号：极简旅行）",
          "date": "2018-07-06",
          "title": "历史个人游记 · 2018",
          "summary": "写到鱼片与椒盐鱼骨的一鱼两吃，粥底细滑，店内陈设古朴；是2018年到店体验。",
          "url": "https://post.smzdm.com/p/725802/"
        },
        {
          "sourceId": "ctrip-wumizhou-2023",
          "kind": "personal",
          "source": "携程餐厅点评",
          "author": "YoYo_4Y5K7U0D",
          "date": "2023-07-15",
          "title": "历史游客点评 · 2023",
          "summary": "该次认为海鲜新鲜、粥底稠，但蔬菜选择少且偏老；提醒到店看菜，而非照着攻略全点。",
          "url": "https://you.ctrip.com/food/shanghai207/5490133-dianping.html"
        }
      ],
      "sources": [
        "wumizhou-location",
        "ctrip-wumizhou-2023",
        "smzdm-xiaoxiao-2018"
      ]
    }
  ],
  "days": [
    {
      "id": "fri",
      "date": "11月6日 周五",
      "title": "下班出发，住进老城",
      "subtitle": "交通按你选好的安排，今晚只负责抵达和休息。",
      "distance": "周五晚 · 不安排景点",
      "events": [
        {
          "time": "周五晚",
          "title": "深圳北出发，按自选交通抵达",
          "description": "去返车次由你确定。出发前核对车站、乘车时间和酒店晚到保留，不在攻略里重复列班次。",
          "type": "rail"
        },
        {
          "time": "抵达后",
          "title": "入住，附近吃一点",
          "description": "大良钟楼—清晖园附近连住两晚。夜宵找仍营业的粥粉面，吃完就回房休息。",
          "type": "stay"
        }
      ]
    },
    {
      "id": "sat",
      "date": "11月7日 周六",
      "title": "十点出门，园林老街慢慢逛",
      "subtitle": "睡饱后出发，清晖园和午饭都不赶。",
      "distance": "10:00出发 · 老城步行约4–6公里",
      "events": [
        {
          "time": "10:00–10:15",
          "title": "从酒店出门，走向清晖园",
          "description": "早餐按起床后的状态简单解决，不安排10点前的出门项目。按所购时段入园。",
          "type": "stay"
        },
        {
          "time": "10:15–12:00",
          "title": "清晖园慢游",
          "description": "水庭—游廊—玻璃窗景，留约1小时45分钟。常规成人票15元/人。",
          "place": "qinghui",
          "type": "see"
        },
        {
          "time": "12:10–13:20",
          "title": "老城午饭，也可以吃一顿茶点",
          "description": "顺德菜或茶楼二选一。想换口味，可核对華叔茶記等简餐候选；不为了单店绕远。",
          "type": "food"
        },
        {
          "time": "13:30–14:30",
          "title": "回酒店小憩",
          "description": "住在老城，午饭后就能歇一下；有精神再继续逛吃。",
          "type": "stay"
        },
        {
          "time": "14:45–15:45",
          "title": "华盖路与一碗双皮奶",
          "description": "逛骑楼柱廊，民信或仁信先选一家。体力够再加华盖山短段，不把整条栈道设成任务。",
          "place": "huagai",
          "type": "see"
        },
        {
          "time": "16:00–17:00",
          "title": "莘村大街 → 金山大街 → 金榜上街",
          "description": "顺着老巷找牛乳文化和小铺，奶食小份分享。牛乳片带咸味，买前先试。",
          "place": "jinbang",
          "type": "see"
        },
        {
          "time": "18:00–19:30",
          "title": "粥底火锅或一顿顺德菜",
          "description": "提前确认晚市与排队。吃完可回华盖路走一段夜景，累了直接回酒店。",
          "type": "food"
        }
      ]
    },
    {
      "id": "sun",
      "date": "11月8日 周日",
      "title": "十点出门，湖边留白",
      "subtitle": "上午一处主景点，午后给自选返程留足余量。",
      "distance": "10:00出发 · 不叠加跨区景点",
      "events": [
        {
          "time": "10:00–10:20",
          "title": "退房寄存行李，出发去顺峰山",
          "description": "10点从酒店出发，先确认寄存和取件时间；按15–25分钟短途接驳预留。",
          "type": "stay"
        },
        {
          "time": "10:20–12:00",
          "title": "顺峰山公园小圈散步",
          "description": "北门一侧看牌坊、走近门湖边，走舒服的一小圈。下雨可整段换博物馆。",
          "place": "shunfeng",
          "type": "see"
        },
        {
          "time": "12:15–13:20",
          "title": "午饭与顺路手信",
          "description": "回老城路线上找一顿简餐；没吃过茶点也可以放在这里，不增加远处排队店。",
          "type": "food"
        },
        {
          "time": "13:30–15:00",
          "title": "取行李，按自选返程时间收尾",
          "description": "预留回酒店、取件与去车站的时间。如果从广州南返深，建议至少给大良到列车发车留90–120分钟；按你最终选的交通调整。",
          "type": "stay"
        }
      ]
    }
  ],
  "hotels": [
    {
      "name": "大良钟楼清晖园景区华驿酒店",
      "level": "先查这一类",
      "location": "华盖路步行街 / 清晖园周边",
      "reason": "老城步行最方便，适合晚上抵达、午间回房休息和周日寄存。",
      "check": "确认准确地址、房型面积、外窗、隔音、电梯和晚到保留。",
      "url": "https://www.bthhotels.com/wap/HotelInfo/AY1408?pt=info",
      "source": "hotel1"
    },
    {
      "name": "全季酒店（佛山顺德清晖园景区店）",
      "level": "差价合适再升级",
      "location": "清晖路38号，靠近钟楼与园林",
      "reason": "位置贴合行程。如果同等可退房型的差价不大，可以作为舒适度升级。",
      "check": "不因新店或品牌直接认定便宜；输入11/6–11/8、1间2成人比两晚总价。",
      "url": "https://hotels.ctrip.com/hotels/133272287.html",
      "source": "hotel2"
    },
    {
      "name": "如家精选 / 精选PLUS 大良清晖园店",
      "level": "价格备选",
      "location": "南国中路，非钟楼步行核心",
      "reason": "官网门店在大良，但名字含清晖园并不代表就在园旁。只有便宜足够多再考虑。",
      "check": "多算往返打车时间和费用；导航确认准确门店，避免和华驿店混淆。",
      "url": "https://www.bthhotels.com/wap/HotelInfo/J76501?pt=info",
      "source": "hotel3"
    }
  ],
  "updated": "2026-11-04",
  "people": 2,
  "nights": 2,
  "socialNotes": [
    {
      "id": "xhs-route",
      "noteId": "6ac67276000000001c02f110",
      "title": "顺德2天1夜吃逛路线｜大良＋容桂",
      "author": "Summer叮叮当",
      "published": "2026-10-08",
      "url": "https://www.xiaohongshu.com/explore/6ac67276000000001c02f110",
      "appUrl": "xhsdiscover://item/6ac67276000000001c02f110",
      "kind": "路线资料整理",
      "takeaways": [
        "把清晖园、华盖路与金榜街作为一个老城片区，街巷顺序可参考莘村大街—金山大街—金榜上街。",
        "容桂的旧厂房、江岸和咖啡需要单独留半天，不与公园挤在同一个上午。"
      ],
      "adoption": "本次把老城放周六、顺峰山放周日；容桂整段替换周日上午。门店地址和营业仍需单独确认。"
    },
    {
      "id": "xhs-weekend",
      "noteId": "6a045f660000000036001a36",
      "title": "人均低于500块的顺德2天1夜保姆级路线！",
      "author": "黑松露肠粉",
      "published": "2026-05-13",
      "url": "https://www.xiaohongshu.com/explore/6a045f660000000036001a36",
      "appUrl": "xhsdiscover://item/6a045f660000000036001a36",
      "kind": "个人游记",
      "takeaways": [
        "华盖路的热门奶食店可能排队，两人分享一份，别把所有胃口都给甜品。",
        "作者偏爱渔人码头傍晚的江景；上午去可以看街区与喝咖啡，不能预期同样的日落效果。"
      ],
      "adoption": "保留10点出门，把等位作为弹性时间；周日不为了日落压缩返程。未照搬原文费用和早起安排。"
    }
  ],
  "revision": "late-start-real-map"
};if(typeof module==='object'&&module.exports)module.exports=data;else root.TRIP=data;})(typeof globalThis!=='undefined'?globalThis:this);
