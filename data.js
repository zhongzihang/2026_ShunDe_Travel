(function(root){
const sources=[
 {id:'qinghui',title:'清晖园博物馆 · 官方首页与参观服务',url:'https://www.sdqinghuiyuan.cn/',note:'常规票15元，9:00–17:30，17:00停止进园；大良钟楼站步行约450米。'},
 {id:'ticket',title:'清晖园 · 官方购票须知',url:'https://www.sdqinghuiyuan.cn/detail/id/48.html',note:'按官方渠道选日期与时段；平台附加讲解套餐不等于门票。'},
 {id:'metro',title:'广州地铁 · 官方乘客服务',url:'https://cs.gzmtr.com/ckfw/',note:'广州南—大良钟楼常规查询约45–46分钟、6元；另留出站、候车及换乘时间。'},
 {id:'rail',title:'铁路12306 · 查询与购票',url:'https://www.12306.cn/',note:'已按11月6日/8日和准确站码核对候选车次及二等座74.5元；余票为11月4日约00:40快照，购票时重查。'},
 {id:'park',title:'顺德融媒 · 大良公园与散步路线',url:'https://app.shundeplus.com/index.php/m/a/180898.html',note:'顺峰山为免费公园；文章为既有介绍，临时管理以现场公告为准。'},
 {id:'museum',title:'佛山新闻传媒中心 · 2026年11月文化场馆指南',url:'https://www.fsonline.com.cn/FS_PLUS/1078755.html',note:'顺德博物馆周二至周日9:00–17:00，16:30停止入馆，个人免费免预约、凭身份证入馆。'},
 {id:'museum-official',title:'顺德博物馆 · 官方票务与场馆平台',url:'https://www.sdmuseum.com.cn/ticket-pc/',note:'出发前核对展览、临时闭馆和团队预约要求。'},
 {id:'milk',title:'南方+ · 金榜上街与牛乳文化',url:'https://static.nfnews.com/content/202008/29/c3965940.html',note:'用于街区与传统奶食背景；不作为当前店铺营业时间、价格或评分依据。'},
 {id:'food',title:'顺德图书馆 · 美食数据库',url:'https://www.sdlib.com.cn/home/sdms/detail/id/113777.html',note:'确认民信、欢姐等传统美食品牌；具体门店、营业与菜单临行确认。'},
 {id:'hotel1',title:'首旅如家 · 大良钟楼清晖园景区华驿酒店',url:'https://www.bthhotels.com/wap/HotelInfo/AY1408?pt=info',note:'官网确认门店存在和老城位置；未取得指定两晚可订价。官网地铁线路笔误不采用。'},
 {id:'hotel2',title:'携程 · 全季清晖园景区店',url:'https://hotels.ctrip.com/hotels/133272287.html',note:'地址清晖路38号；仅作位置和门店候选，不引用动态评分及展示价。'},
 {id:'hotel3',title:'首旅如家 · 大良清晖园店',url:'https://www.bthhotels.com/wap/HotelInfo/J76501?pt=info',note:'门店位于南国中路，距离老城较远，需比较差价与接驳成本。'},
 {id:'ronggui',title:'容桂渔人码头 · 街区介绍',url:'https://www.020kh.com/foshan/travel/yurenmatou',note:'用于可选街区介绍；公共街区免费，店铺和项目收费另计。'},
 {id:'weather',title:'中国天气网 · 佛山天气',url:'https://www.weather.com.cn/weather/101280800.shtml',note:'本次未取得可核实的11月6–8日逐日预报，不填报推测温度和降雨。'}
];
const places=[
 {id:'qinghui',number:'01',name:'清晖园',english:'QINGHUI GARDEN',area:'大良老城',tag:'周六主角',image:'assets/qinghui.jpg',alt:'清晖园真实园景，历史照片',time:'建议 1.5–2 小时',price:'常规成人票 ¥15',hours:'官方常规 09:00–17:30；17:00停止进园',description:'把上午留给岭南园林。看池水、连廊和满洲窗，沿着窗景慢慢走，不用追赶每一处机位。',tips:['建议选周六上午的官方购票时段，09:30左右入园。','官网首页开园时间与列示时段有差异，以所购时段和当日公告为准。','先看水庭，再沿回廊找彩色玻璃窗；雨天也有廊道可避雨。'],sources:['qinghui','ticket'],map:[355,275]},
 {id:'huagai',number:'02',name:'华盖路步行街',english:'ARCADES & OLD STREETS',area:'大良老城',tag:'走着逛吃',image:'',time:'建议 45–60 分钟',price:'公共街区免费',hours:'街区可步行，门店营业各异',description:'从清晖园出来，转进骑楼和小店之间。午饭、甜品、买手信都放在这一片，少花时间折返。',tips:['步行段按10–20分钟弹性预留，具体入口以导航为准。','民信或仁信选一家试原味双皮奶，两个人先点一碗。','周末热门店排队超过20分钟，就换附近同类店。'],sources:['milk','qinghui'],map:[277,243]},
 {id:'jinbang',number:'03',name:'金榜上街',english:'MILK-SCENTED LANES',area:'大良老城',tag:'奶香小巷',image:'',time:'建议 45–60 分钟',price:'街区免费，按点单消费',hours:'店铺营业与售罄情况各异',description:'沿着老街找一碗水牛奶、一份奶食。这里适合边走边歇，小份分享，让肚子还装得下晚餐。',tips:['从华盖路接着步行，预留15–25分钟，不必为单店绕远。','双皮奶、姜撞奶、水牛奶三选二即可。','牛乳片常带咸味，买前先试味；不按甜奶片想象。'],sources:['milk'],map:[172,174]},
 {id:'huagaishan',number:'04',name:'华盖山栈道',english:'A SMALL HILL BREAK',area:'大良老城',tag:'体力够再加',image:'',time:'弹性 30–50 分钟',price:'公共步道免费',hours:'以现场开放和天气为准',description:'吃过午饭后，如果天气舒适，可以从老城加一小段山林步道。遇雨或腿累，直接坐下来喝东西。',tips:['有台阶和起伏，穿防滑鞋。','这是周六的可选项，不占用清晖园和正餐时间。','不为了完成环线硬走，选择原路返回也很轻松。'],sources:['park'],map:[251,174]},
 {id:'shunfeng',number:'05',name:'顺峰山公园',english:'SLOW MORNING BY THE LAKE',area:'大良东侧',tag:'周日推荐',image:'assets/shunfeng.jpg',alt:'顺峰山公园牌坊实拍，历史照片',time:'建议 1.5–2 小时',price:'公园免费',hours:'安排日间09:30–11:30；临时管理以公告为准',description:'从北门牌坊走到湖边，挑一段舒服的路慢慢逛。周日只留这一处主景点，午饭后从容取行李返深。',tips:['从老城打车按15–25分钟预留，费用和车程是规划估算。','只走北门—牌坊—湖边一小圈，不把环湖和登山都塞进来。','出发前看天气；下雨就切换到顺德博物馆。'],sources:['park'],map:[595,335]},
 {id:'museum',number:'06',name:'顺德博物馆',english:'A RAINY-DAY DETOUR',area:'大良新城',tag:'雨天替换',image:'',time:'建议 1.5–2 小时',price:'个人免费',hours:'周二至周日09:00–17:00，16:30停止入馆',description:'想多了解顺德的历史和风物，或遇到下雨，就把周日公园替换为博物馆。它与老城不在同一片，单独安排接驳。',tips:['近期场馆指南显示个人免预约、凭身份证入馆，临行再核对官方公告。','团队及讲解服务另按官方要求预约。','按09:30–11:30参观，不安排在返程前最后一刻。'],sources:['museum','museum-official'],map:[577,465]},
 {id:'ronggui',number:'07',name:'容桂渔人码头',english:'RIVERSIDE ALTERNATIVE',area:'容桂',tag:'替换周日',image:'',time:'建议 1.5–2 小时',price:'公共街区免费，消费另计',hours:'店铺营业时间各异',description:'更喜欢江边、咖啡和旧工业街区，可以把周日换成容桂。回程还要取老城行李，整段应比公园方案多留交通余量。',tips:['从大良老城出发，单程打车按25–40分钟预留，属于规划估算。','周日09:00出发，最晚13:30开始返回酒店，15:00前取到行李。','本次周日要返深，不安排等日落；傍晚氛围留给下次。'],sources:['ronggui'],map:[395,490]},
 {id:'foshan',number:'08',name:'佛山祖庙 / 岭南天地',english:'ANOTHER WEEKEND',area:'禅城',tag:'跨区替换思路',image:'',time:'至少半天 + 跨区交通',price:'祖庙门票需另查，街区消费另计',hours:'演出与开放信息未核实',description:'如果这次更想看醒狮和佛山老城，可整段替换周日。禅城距大良较远，这份轻松版更推荐把时间留给顺德。',tips:['不要和顺峰山、容桂同时叠加。','需要先核实祖庙当日演出与门票，再调整广州南返程时间。','本站不把未核实的演出时间或票价写成确定安排。'],sources:[],map:[100,65]}
];
const foods=[
 {id:'tea',name:'早茶：慢慢开始一天',category:'早茶',area:'大良老城',dish:'虾饺 / 烧卖 / 排骨 / 陈村粉',budget:'两人 ¥70–110',description:'周六08:00–09:00，找住宿附近有明码菜单的茶楼。两个人3–4笼点心加一份粉就够，不用专程跑远。',candidate:'按酒店附近在营茶楼选择；凤城酒家等作为地图搜索候选，门店与开茶时间需确认。',search:'凤城酒家 大良',icon:'tea',sources:['food']},
 {id:'milk',name:'双皮奶：先吃原味',category:'甜品',area:'华盖路 / 金榜街',dish:'原味双皮奶 / 姜撞奶 / 水牛奶',budget:'两人 ¥25–50',description:'先选民信或仁信一家，点原味分享。金榜街再试另一种奶食，避免连续吃好几碗把晚饭挤掉。',candidate:'民信老铺、仁信老铺；金榜街店铺现场比菜单，不预设排行榜。',search:'民信老铺 华盖路',icon:'milk',sources:['milk','food']},
 {id:'cantonese',name:'顺德菜：两人也能吃好',category:'正餐',area:'老城周边',dish:'煎焗鱼 / 酿鲮鱼 / 菜心 / 一份主食',budget:'两人 ¥140–200',description:'周六午餐选一份鱼类主菜、一份蔬菜和主食。可搜大良的了能私房菜等候选，先看当日菜单、份量和等位。',candidate:'菜式搭配为规划建议；候选门店在营、价格与预约未实时核实。',search:'了能私房菜 大良',icon:'fish',sources:['food']},
 {id:'porridge',name:'粥底火锅：留给晚餐',category:'正餐',area:'大良片区',dish:'粥底 / 鱼片 / 牛肉 / 时蔬',budget:'两人 ¥150–220',description:'周六18:00前后吃一顿热乎的粥底火锅。两个人先点少量，吃完再加；周末先确认是否需要取号。',candidate:'杏坛公平靓正等为品牌搜索候选；只选大良近店，不为总店跨镇。',search:'粥底火锅 大良',icon:'pot',sources:['food']},
 {id:'rice',name:'陈村粉与伦教糕',category:'小吃',area:'华盖路 / 老城',dish:'一份粉 / 小份糕 / 牛杂任选',budget:'两人 ¥25–50',description:'作为午后或周五晚的小食补充。伦教糕买小份先试，带走注意保鲜；无需单独跑陈村或伦教镇。',candidate:'欢姐等品牌可作为查店线索，优先选顺路门店，售卖以现场为准。',search:'伦教糕 大良',icon:'rice',sources:['food']},
 {id:'souvenir',name:'手信：少而顺路',category:'小吃',area:'大良老城',dish:'蹦砂 / 杏仁饼 / 小份糕点',budget:'自选 ¥30–80',description:'周日午饭后买一点便于携带的手信。奶制品不适合长时间常温携带，先问保存要求。',candidate:'只在返程取行李前顺路购买；没有必须打卡的指定店。',search:'顺德 蹦砂 华盖路',icon:'gift',sources:['food']}
];
const days=[
 {id:'fri',date:'11月6日 周五',title:'下班出发，住进老城',subtitle:'今晚的任务只有抵达、吃饭和好好休息。',distance:'换乘为主 · 不安排景点',events:[
  {time:'18:15–19:15',title:'到深圳北，留够进站时间',description:'建议在所选列车发车前45–60分钟到站；下班较晚就按实际可到站时间选票。',type:'rail'},
  {time:'19:48–20:34',title:'深圳北 → 广州南 · G6244候选',description:'已按11月6日核到G6244，19:48出发、20:34到广州南，二等座74.5元/人；未锁票，购票时重查两张余票。',type:'rail'},
  {time:'20:35–21:50',title:'广州南 → 大良钟楼',description:'地铁7号线往美的大道，在北滘公园换佛山3号线往顺德学院站。纯轨道查询约45分钟，含候车步行按60–80分钟预留。',type:'metro'},
  {time:'21:40–22:10',title:'入住，附近吃一点',description:'按G6244接地铁估算到店时间，非到达保证。清晖园/大良钟楼附近连住两晚，提前联系保留房间；夜宵找仍营业的粥粉面。',type:'stay'}]},
 {id:'sat',date:'11月7日 周六',title:'园林、骑楼和一整天奶香',subtitle:'把行程收在大良，一路走一路吃。',distance:'步行约4–6公里 · 可随时休息',events:[
  {time:'08:00–09:00',title:'附近早茶',description:'两人3–4笼点心加一份粉，吃到七分饱，给午饭和甜品留空间。',type:'food'},
  {time:'09:30–11:30',title:'清晖园慢游',description:'按官方购票时段入园，逛池水、船厅与花窗。常规成人票15元/人。',place:'qinghui',type:'see'},
  {time:'11:45–13:00',title:'顺德菜午饭',description:'老城附近吃鱼类主菜、时蔬和主食，两个人不必点满一桌。',type:'food'},
  {time:'13:00–14:00',title:'回酒店歇一会儿',description:'住得近的价值就在这里。天气热或午后困，就休息后再出门。',type:'stay'},
  {time:'14:00–15:15',title:'华盖路与一碗双皮奶',description:'先走骑楼街，再选一家奶食老铺。华盖山栈道只在体力和天气都合适时加上。',place:'huagai',type:'see'},
  {time:'15:30–16:30',title:'金榜上街，小份分享',description:'试水牛奶、姜撞奶或牛乳片，留一点时间坐着喝东西。',place:'jinbang',type:'see'},
  {time:'17:30–19:00',title:'粥底火锅，结束大餐',description:'提前确认取号与营业。吃完沿老城随意散步，疲惫就直接回酒店。',type:'food'}]},
 {id:'sun',date:'11月8日 周日',title:'湖边留白，从容返深',subtitle:'上午只选一处，午饭后收尾。',distance:'默认公园方案 · 返程不赶末班',events:[
  {time:'08:00–09:00',title:'早餐，退房寄存行李',description:'与前台确认行李寄存和取件时间，检查房间后再出门。',type:'stay'},
  {time:'09:30–11:30',title:'顺峰山公园小圈散步',description:'北门牌坊—湖边—原路或小圈返回。无需环湖，不叠加容桂。下雨可换博物馆。',place:'shunfeng',type:'see'},
  {time:'12:00–13:15',title:'午饭与顺路手信',description:'选择回老城路线上的餐厅，吃粉面或一顿简单顺德菜，避免长时间等位。',type:'food'},
  {time:'14:00–15:00',title:'取行李，准备离开大良',description:'15:00前取到行李，最晚15:30从大良钟楼出发；广州南列车建议选17:00–18:30窗口。',type:'stay'},
  {time:'15:00–17:00',title:'大良钟楼 → 广州南',description:'3号线往佛山大学方向，在北滘公园换7号线往燕山方向，到广州南下车。至少留90分钟交通及进站缓冲。',type:'metro'},
  {time:'18:01–18:31',title:'广州南 → 深圳北 · G6033候选',description:'已按11月8日核到G6033，18:01发车、18:31到深圳北，二等座74.5元/人。也可选17:36的G6513或18:28的G1311，购票时重查。',type:'rail'}]}
];
const hotels=[
 {name:'大良钟楼清晖园景区华驿酒店',level:'先查这一类',location:'华盖路步行街 / 清晖园周边',reason:'老城步行最方便，适合晚上抵达、午间回房休息和周日寄存。',check:'确认准确地址、房型面积、外窗、隔音、电梯和晚到保留。',url:'https://www.bthhotels.com/wap/HotelInfo/AY1408?pt=info',source:'hotel1'},
 {name:'全季酒店（佛山顺德清晖园景区店）',level:'差价合适再升级',location:'清晖路38号，靠近钟楼与园林',reason:'位置贴合行程。如果同等可退房型的差价不大，可以作为舒适度升级。',check:'不因新店或品牌直接认定便宜；输入11/6–11/8、1间2成人比两晚总价。',url:'https://hotels.ctrip.com/hotels/133272287.html',source:'hotel2'},
 {name:'如家精选 / 精选PLUS 大良清晖园店',level:'价格备选',location:'南国中路，非钟楼步行核心',reason:'官网门店在大良，但名字含清晖园并不代表就在园旁。只有便宜足够多再考虑。',check:'多算往返打车时间和费用；导航确认准确门店，避免和华驿店混淆。',url:'https://www.bthhotels.com/wap/HotelInfo/J76501?pt=info',source:'hotel3'}
];
const railLinks={outbound:'https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc&fs=%E6%B7%B1%E5%9C%B3%E5%8C%97,IOQ&ts=%E5%B9%BF%E5%B7%9E%E5%8D%97,IZQ&date=2026-11-06&flag=N,N,Y',inbound:'https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc&fs=%E5%B9%BF%E5%B7%9E%E5%8D%97,IZQ&ts=%E6%B7%B1%E5%9C%B3%E5%8C%97,IOQ&date=2026-11-08&flag=N,N,Y'};
const trains=[
 {date:'11/6 周五',code:'G6266',route:'深圳北 → 广州南',depart:'19:30',arrive:'20:06',note:'备选；查询时二等无票'},
 {date:'11/6 周五',code:'G6244',route:'深圳北 → 广州南',depart:'19:48',arrive:'20:34',note:'去程优先候选'},
 {date:'11/8 周日',code:'G6513',route:'广州南 → 深圳北',depart:'17:36',arrive:'18:13',note:'早一点回家'},
 {date:'11/8 周日',code:'G6033',route:'广州南 → 深圳北',depart:'18:01',arrive:'18:31',note:'返程优先候选'},
 {date:'11/8 周日',code:'G1311',route:'广州南 → 深圳北',depart:'18:28',arrive:'19:04',note:'多留半小时'}
];
const trip={sources,places,foods,days,hotels,trains,railLinks,updated:'2026-11-04',people:2,nights:2};
if(typeof module==='object'&&module.exports)module.exports=trip;else root.TRIP=trip;
})(typeof globalThis!=='undefined'?globalThis:this);
