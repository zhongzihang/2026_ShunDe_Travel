(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.TripCore=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  const amount=value=>Number.isFinite(Number(value))?Math.max(0,Number(value)):0;
  function calculateBudget(input={}){const hotel=2*amount(input.hotelNight),food=2*amount(input.foodPerson),rail=2*amount(input.railPerson),local=amount(input.localTotal),tickets=30;const total=hotel+food+rail+local+tickets;return{hotel,food,rail,local,tickets,total,perPerson:total/2};}
  function filterFoods(items,category){return category==='全部'?items.slice():items.filter(item=>item.category===category);}
  function navigationUrl(name){return 'https://uri.amap.com/search?keyword='+encodeURIComponent('佛山顺德 '+name)+'&city=佛山&view=map&src=shunde-weekend';}
  function buildTripText(data,variant='park'){
    const lines=['顺德周末 · 两个人的逛吃手册','2026年11月6日（周五）—2026年11月8日（周日）','深圳北出发｜2人｜大良钟楼附近连住两晚','车次与票价依据11月4日12306查询快照；未锁票，余票和酒店价格以实时查询为准。其余时间为规划安排。',''];
    for(const day of data.days||[]){lines.push(day.date+' · '+day.title);for(const event of day.events||[])lines.push(event.time+' '+event.title+'：'+event.description);lines.push('');}
    lines.push('周日方案：'+({park:'顺峰山公园',rain:'顺德博物馆（雨天备选）',ronggui:'容桂渔人码头（替换顺峰山）'}[variant]||'顺峰山公园'),'周日建议15:00前回酒店取行李，15:30前从大良出发；到广州南至少预留90分钟（含换乘和进站缓冲）。','住宿目标：每房每晚200–350元，11月6日入住、11月8日退房；这是筛选预算，未核实实时可订价。','清晖园：常规成人票15元；官方常规开放9:00–17:30，17:00停止进园，按购票时段参观。','列车：去程建议19:00–20:00深圳北发车；返程建议17:00–18:30广州南发车，具体以12306为准。','官方购票：https://www.12306.cn/','清晖园：https://www.sdqinghuiyuan.cn/');
    return lines.join('\n');
  }
  return{calculateBudget,filterFoods,navigationUrl,buildTripText};
});
