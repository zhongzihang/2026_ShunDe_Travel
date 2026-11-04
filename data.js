(function(root){
const trip={
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
      "name": "早午茶：睡饱后再吃",
      "category": "早茶",
      "area": "大良老城",
      "dish": "虾饺 / 烧卖 / 排骨 / 陈村粉",
      "description": "不用为了早茶八点起床。周日10点出门后再吃茶点；周六先逛清晖园，午饭也可选茶楼，3–4笼点心加一份粉，两人分享。",
      "candidate": "酒店附近茶楼优先，先确认是否仍供应茶点。華叔茶記可作老城简餐候选，店名相同不等于同一门牌，营业与地址临行核对。",
      "sources": [
        "food",
        "xhs-route",
        "xhs-tea-check"
      ],
      "priceHint": "两人 ¥70–110"
    },
    {
      "id": "milk",
      "name": "双皮奶：先吃原味",
      "category": "甜品",
      "area": "华盖路 / 金榜街",
      "dish": "原味双皮奶 / 姜撞奶 / 水牛奶",
      "description": "民信或仁信先选一家，原味两人分着试。个人游记提醒热门店常排队；不追着每家打卡，留时间给金榜街的另一种奶食。",
      "candidate": "民信老铺、仁信老铺；金榜街店铺现场比菜单，不预设排行榜。",
      "sources": [
        "milk",
        "food",
        "xhs-weekend",
        "xhs-route"
      ],
      "priceHint": "两人 ¥25–50",
      "image": "assets/photos-v2/double-skin-milk.webp",
      "alt": "顺德华盖路民信老店的一碗原味双皮奶，2024年1月实拍",
      "photoCredit": "Lau Hau Yatyue Tiger / CC0"
    },
    {
      "id": "cantonese",
      "name": "顺德菜：两人也能吃好",
      "category": "正餐",
      "area": "老城周边",
      "dish": "煎焗鱼 / 酿鲮鱼 / 菜心 / 一份主食",
      "description": "周六午餐选一份鱼类主菜、一份蔬菜和主食。可搜大良的了能私房菜等候选，先看当日菜单、份量和等位。",
      "candidate": "菜式搭配为规划建议；候选门店在营、价格与预约未实时核实。",
      "sources": [
        "food"
      ],
      "priceHint": "两人 ¥140–200"
    },
    {
      "id": "porridge",
      "name": "粥底火锅：留给晚餐",
      "category": "正餐",
      "area": "大良片区",
      "dish": "粥底 / 鱼片 / 牛肉 / 时蔬",
      "description": "周六18:00前后吃粥底火锅，白贝、肉丸、鱼片和蔬菜按两人份点，食材充分煮熟。热门店先问取号，等位太久就改附近顺德菜。",
      "candidate": "小红书路线提到大良毋米粥锦龙路270号，可作为查店线索；先核对当前准确门店、晚市与取号。杏坛公平靓正等只选顺路分店。",
      "sources": [
        "food",
        "xhs-route"
      ],
      "priceHint": "两人 ¥150–220"
    },
    {
      "id": "rice",
      "name": "陈村粉与伦教糕",
      "category": "小吃",
      "area": "华盖路 / 老城",
      "dish": "一份粉 / 小份糕 / 牛杂任选",
      "description": "作为午后或周五晚的小食补充。伦教糕买小份先试，带走注意保鲜；无需单独跑陈村或伦教镇。",
      "candidate": "欢姐等品牌可作为查店线索，优先选顺路门店，售卖以现场为准。",
      "sources": [
        "food"
      ],
      "priceHint": "两人 ¥25–50"
    },
    {
      "id": "souvenir",
      "name": "手信：少而顺路",
      "category": "小吃",
      "area": "大良老城",
      "dish": "蹦砂 / 杏仁饼 / 小份糕点",
      "description": "周日午饭后买一点便于携带的手信。奶制品不适合长时间常温携带，先问保存要求。",
      "candidate": "只在返程取行李前顺路购买；没有必须打卡的指定店。",
      "sources": [
        "food"
      ],
      "priceHint": "自选 ¥30–80"
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
};
if(typeof module==='object'&&module.exports)module.exports=trip;else root.TRIP=trip;
})(typeof globalThis!=='undefined'?globalThis:this);
