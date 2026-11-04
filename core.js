(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.TripCore=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  function filterFoods(items,category){return category==='全部'?items.slice():items.filter(item=>item.category===category);}
  function getDays(data,variant='park'){
    return data.days.map(day=>{
      if(day.id!=='sun'||variant==='park')return day;
      const events=day.events.map(event=>({...event}));
      if(variant==='rain'){
        events[0]={...events[0],time:'10:00–10:30',title:'退房寄存行李，出发去博物馆',description:'10点从酒店出门，带身份证，按约20–30分钟接驳预留。'};
        events[1]={time:'10:30–12:15',title:'顺德博物馆室内参观',description:'整段替换顺峰山，读顺德历史与风物。个人免费免预约信息来自近期指南，临行核对官方公告。',place:'museum',type:'see'};
        events[2]={time:'12:30–13:30',title:'午饭后回老城',description:'选返程方向上的简餐，饭后回酒店取行李。',type:'food'};
      }else if(variant==='ronggui'){
        events[0]={...events[0],time:'10:00–10:40',title:'退房寄存行李，出发去容桂',description:'10点从酒店出门，按25–40分钟短途接驳预留；只选容桂，不叠加公园。'};
        events[1]={time:'10:40–12:15',title:'容桂渔人码头逛江边',description:'看旧厂房、江岸与街区，坐下来喝杯咖啡。白天游玩与傍晚日落是不同体验。',place:'ronggui',type:'see'};
        events[2]={time:'12:15–13:20',title:'容桂午饭，13:30开始回大良',description:'赏当年容桂店等可作查店候选，先核对营业。午饭后不增加远处景点，回老城取行李。',type:'food'};
      }
      return{...day,title:variant==='rain'?'十点出门，读读顺德':'十点出门，去容桂吹风',subtitle:variant==='rain'?'室内参观替换公园，午后从容返程。':'旧厂房与江边单独留半天，不叠加其他片区。',distance:'10:00出发 · '+(variant==='rain'?'室内替换':'容桂替换'),events};
    });
  }
  function buildTripText(data,variant='park'){
    const lines=['顺德周末 · 两个人的逛吃手册','2026年11月6日（周五）—2026年11月8日（周日）','深圳北出发｜2人｜大良钟楼附近连住两晚','周六、周日都从上午10:00出发；去返交通按自选安排。',''];
    for(const day of data.days||[]){lines.push(day.date+' · '+day.title);for(const event of day.events||[])lines.push(event.time+' '+event.title+'：'+event.description);lines.push('');}
    lines.push('周日方案：'+({park:'顺峰山公园',rain:'顺德博物馆（雨天替换）',ronggui:'容桂渔人码头（替换公园）'}[variant]||'顺峰山公园'),'返程由你自选；如从广州南返深，建议从大良出发到列车发车至少预留90–120分钟，另按实际行李和路况调整。','住宿：11月6日入住、11月8日退房，优先大良钟楼—清晖园附近，确认晚到保留和寄存。','清晖园：常规成人票15元；官方常规开放9:00–17:30，17:00停止进园，按所购时段参观。','小红书补充：奶食小份分享；华盖路可接莘村大街—金山大街—金榜上街；容桂另留半天。','清晖园官方：https://www.sdqinghuiyuan.cn/');
    return lines.join('\n');
  }
  return{filterFoods,getDays,buildTripText};
});
