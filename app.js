(function(){
  'use strict';
  const trip=window.TRIP,core=window.TripCore;
  if(!trip||!core)return;
  const $=selector=>document.querySelector(selector),all=selector=>Array.from(document.querySelectorAll(selector));
  const esc=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const money=value=>'¥'+Number(value).toLocaleString('zh-CN',{maximumFractionDigits:1});
  const external=(url,text,classes='')=>`<a href="${esc(url)}" class="${classes}" target="_blank" rel="noopener noreferrer">${esc(text)}</a>`;
  const state={day:'sat',variant:'park',category:'全部'};
  let toastTimer,previousFocus;
  const variantNotes={park:'推荐小圈走法：北门牌坊—湖边—返回。上午走够就好，下午从容取行李。',rain:'周日改去顺德博物馆，09:30–11:30参观。近期指南显示个人免费免预约，带身份证，临行复核官方公告。',ronggui:'周日改去容桂渔人码头：09:00出发，09:45–11:30逛江边，午饭后13:30开始回老城；15:00前取到行李。不等日落。'};

  function illustration(kind){
    const drawings={
      tea:'<ellipse cx="100" cy="122" rx="60" ry="13" fill="#c9b992"/><path d="M43 71H157V112Q101 141 43 112Z" fill="#c8a87a" stroke="#8f7958" stroke-width="2"/><ellipse cx="100" cy="72" rx="57" ry="18" fill="#e9d5a6" stroke="#8f7958" stroke-width="2"/><path d="M52 88Q100 108 148 88M52 103Q100 122 148 103" fill="none" stroke="#9c8058"/><path d="M68 70q9-24 19 0q-9 13-19 0M96 70q9-24 19 0q-9 13-19 0M122 70q9-24 19 0q-9 13-19 0" fill="#f8f0d8" stroke="#bca77a"/><path d="M80 47q-10-12 0-23M105 42q10-12 0-23M129 47q-10-12 0-23" fill="none" stroke="#96a48c" stroke-width="2"/>',
      milk:'<ellipse cx="100" cy="124" rx="65" ry="11" fill="#d3d7be"/><path d="M43 69Q46 129 100 128Q154 129 157 69" fill="#ebebe1" stroke="#728872" stroke-width="2"/><ellipse cx="100" cy="69" rx="57" ry="16" fill="#fff7db" stroke="#728872" stroke-width="2"/><path d="M53 91Q100 114 147 91" fill="none" stroke="#8ba28a"/><path d="M130 65L173 32" stroke="#96734e" stroke-width="5" stroke-linecap="round"/><ellipse cx="124" cy="70" rx="12" ry="5" fill="#e5d6a6"/><path d="M74 43Q62 32 74 21M98 39Q110 28 98 17" fill="none" stroke="#a3b098" stroke-width="2"/>',
      fish:'<ellipse cx="100" cy="91" rx="82" ry="33" fill="#f7f3df" stroke="#9caa8e" stroke-width="2"/><ellipse cx="94" cy="91" rx="47" ry="19" fill="#bb9a66"/><path d="M136 89L157 73V109Z" fill="#ad8b5e"/><path d="M62 78q15 14 0 27M85 76q15 15 0 30M109 76q15 15 0 30" stroke="#e4cda2" fill="none" stroke-width="2"/><circle cx="61" cy="87" r="3" fill="#4b624b"/><path d="M55 70L144 108M70 110L136 70" stroke="#809a68" stroke-width="3" stroke-linecap="round"/>',
      pot:'<ellipse cx="100" cy="132" rx="67" ry="10" fill="#c7ceb6"/><path d="M44 65H156L149 116Q100 147 51 116Z" fill="#9b6650" stroke="#6f5847" stroke-width="2"/><ellipse cx="100" cy="65" rx="56" ry="19" fill="#e4d6ad" stroke="#6f5847" stroke-width="2"/><path d="M44 77Q15 69 21 92Q24 102 48 96M156 77Q185 69 179 92Q176 102 152 96" fill="none" stroke="#6f5847" stroke-width="7"/><path d="M58 64Q67 53 79 65M88 65L101 55L109 70M119 59L134 68" fill="none" stroke="#86a174" stroke-width="6"/><path d="M77 38q-11-12 0-25M105 34q11-12 0-25M133 38q-11-12 0-25" fill="none" stroke="#a3ad95" stroke-width="2"/>',
      rice:'<ellipse cx="100" cy="122" rx="76" ry="14" fill="#d8d8bd"/><path d="M33 109L67 68L113 83L84 127Z" fill="#f7f0da" stroke="#c1bba0" stroke-width="2"/><path d="M89 119L121 76L164 89L139 128Z" fill="#e8ddba" stroke="#c1bba0" stroke-width="2"/><path d="M56 96L87 105M65 86L96 95M112 101L142 109" stroke="#d4c39a" stroke-width="2"/><path d="M42 52L160 38M47 59L164 45" stroke="#8a6747" stroke-width="3" stroke-linecap="round"/>',
      gift:'<path d="M48 55H153V129H48Z" fill="#d9bd8c" stroke="#9d825b" stroke-width="2"/><path d="M42 48H159V69H42Z" fill="#e6cda0" stroke="#9d825b" stroke-width="2"/><path d="M92 48H111V129H92Z" fill="#b97252"/><path d="M100 49Q53 45 66 28Q80 12 100 49Q119 11 133 28Q145 47 100 49" fill="none" stroke="#b97252" stroke-width="6"/><path d="M73 90H85M120 90H132M73 105H85M120 105H132" stroke="#a68b5f" stroke-width="2"/>',
      houses:'<path d="M20 132V59H180V132" fill="#e5cfaa" stroke="#8a8869" stroke-width="2"/><path d="M15 60L48 33L82 60L119 33L185 60" fill="#b77e5e" stroke="#8a8869" stroke-width="2"/><path d="M33 132V91Q50 64 67 91V132M82 132V91Q99 64 116 91V132M131 132V91Q148 64 165 91V132" fill="#f2edda" stroke="#8a8869" stroke-width="2"/><path d="M32 61H168" stroke="#7b8165" stroke-width="3"/>',
      trees:'<path d="M64 140V91M130 140V76" stroke="#947b50" stroke-width="4"/><path d="M40 99Q10 68 42 48Q37 15 65 14Q97 11 89 51Q119 81 89 100Z" fill="#8ca17a"/><path d="M111 87Q84 58 113 39Q106 8 135 7Q166 7 158 41Q184 73 157 89Z" fill="#6f8b68"/><path d="M33 143H166" stroke="#adb49a" stroke-width="2"/>',
      museum:'<path d="M29 131V56H171V131" fill="#d8ceaf" stroke="#7c8970" stroke-width="2"/><path d="M19 55L100 19L181 55Z" fill="#9da88b" stroke="#7c8970" stroke-width="2"/><path d="M46 65H62V120H46ZM81 65H97V120H81ZM116 65H132V120H116ZM151 65H161V120H151Z" fill="#f4efd9"/><path d="M21 135H179M17 141H183" stroke="#7c8970" stroke-width="3"/>',
      river:'<path d="M8 129Q38 108 73 129T137 129T199 129M8 142Q38 121 73 142T137 142T199 142" stroke="#8baea0" stroke-width="4" fill="none"/><path d="M74 119L84 41H116L126 119Z" fill="#f3efdc" stroke="#718d7a" stroke-width="2"/><path d="M80 65H120L117 86H77ZM76 107H124L126 119H74Z" fill="#84aaa2"/><path d="M79 42H121L110 25H90Z" fill="#7a9a8e"/><path d="M93 43V56H107V43M95 20V9" stroke="#5a7968" fill="none" stroke-width="2"/>'
    };
    return `<svg viewBox="0 0 200 160" aria-hidden="true" focusable="false">${drawings[kind]||drawings.houses}</svg>`;
  }

  function effectiveDays(){return trip.days.map(day=>{
    if(day.id!=='sun'||state.variant==='park')return day;
    const events=day.events.map(event=>({...event}));
    if(state.variant==='rain'){events[1]={time:'09:30–11:30',title:'顺德博物馆室内参观',description:'替换顺峰山，带身份证。个人免费免预约信息来自近期指南，出发前再核对官方公告。',place:'museum',type:'see'};}
    else{events[0]={...events[0],time:'08:00–09:00'};events[1]={time:'09:00–11:30',title:'去容桂渔人码头逛江边',description:'09:00从老城出发，打车按25–40分钟预留。看江景和旧街区，不等日落。',place:'ronggui',type:'see'};events[2]={time:'11:45–13:00',title:'容桂午饭，13:30开始回大良',description:'午饭后不再增加景点，13:30前动身回酒店，15:00前取到行李。',type:'food'};}
    return{...day,title:state.variant==='rain'?'读读顺德，雨天也自在':'去江边走走，再从容返深',subtitle:variantNotes[state.variant],distance:state.variant==='rain'?'室内替换 · 不叠加公园':'容桂替换 · 交通多留余量',events};
  });}

  function renderDays(){
    $('#dayTabs').innerHTML=trip.days.map((day,index)=>`<button class="day-tab" id="tab-${day.id}" role="tab" aria-selected="${state.day===day.id}" aria-controls="panel-${day.id}" tabindex="${state.day===day.id?'0':'-1'}" data-day="${day.id}"><span>DAY 0${index+1} / ${esc(day.date)}</span><strong>${['下班出发，住进老城','园林、老街和好吃的','湖边留白，从容返程'][index]}</strong><small>${['抵达入住 · 周五晚','大良老城 · 完整一天','半日散步 · 周日晚返深'][index]}</small></button>`).join('');
    $('#dayPanels').innerHTML=effectiveDays().map((day,index)=>`<section class="day-panel" id="panel-${day.id}" role="tabpanel" aria-labelledby="tab-${day.id}" tabindex="0" ${state.day===day.id?'':'hidden'}><div class="day-intro"><span class="day-number">0${index+1}</span><h3>${esc(day.title)}</h3><p>${esc(day.subtitle)}</p><span class="day-distance">${esc(day.distance)}</span></div><ol class="timeline">${day.events.map(event=>`<li class="is-${esc(event.type)}"><time>${esc(event.time)}</time><div><h4>${esc(event.title)}</h4><p>${esc(event.description)}</p>${event.place?`<button class="timeline-link" data-place="${esc(event.place)}">景点详情与导航 ↗</button>`:''}</div></li>`).join('')}</ol></section>`).join('');
    $('#alternativeMessage').textContent=variantNotes[state.variant];
  }

  function renderMap(){
    const selected=state.day==='sat'?['qinghui','huagai','jinbang']:state.day==='sun'?[{park:'shunfeng',rain:'museum',ronggui:'ronggui'}[state.variant]]:[];
    $('#mapPins').innerHTML=trip.places.filter(place=>place.id!=='foshan').map(place=>`<button class="map-pin ${selected.includes(place.id)?'active':'optional'}" style="left:${place.map[0]/7.6}%;top:${place.map[1]/5.6}%" data-place="${place.id}" aria-label="${esc(place.name)}：查看详情和导航"><span class="map-pin-dot">${place.number}</span><span class="map-pin-label">${esc(place.name)}</span></button>`).join('');
    const paths={park:'M328 337Q465 340 595 335',rain:'M328 337Q500 405 577 465',ronggui:'M328 337Q320 440 395 490'};
    $('#mapRoute').setAttribute('d',state.day==='sun'?paths[state.variant]:'M354 276Q318 260 278 244T173 175');
    $('#mapRoute').setAttribute('opacity',state.day==='fri'?'.3':'1');
  }

  function renderPlaces(){
    const order=['qinghui','shunfeng','huagai','jinbang','huagaishan','museum','ronggui','foshan'];
    $('#placeGrid').innerHTML=order.map((id,index)=>{const place=trip.places.find(p=>p.id===id),picture=place.image?place.image.replace('.jpg','.webp'):'';const icon={huagai:'houses',jinbang:'milk',huagaishan:'trees',museum:'museum',ronggui:'river',foshan:'houses'}[id];return `<button class="place-card ${index<2?'featured':''}" data-place="${id}" aria-label="查看${esc(place.name)}详情"><span class="place-visual">${picture?`<img src="${picture}" alt="${esc(place.alt)}" loading="lazy" decoding="async" width="900" height="600">`:illustration(icon)}<span class="place-tag">${esc(place.tag)}</span><span class="image-note">${picture?'历史实拍':'主题示意插画'}</span></span><span class="place-english">${esc(place.english)}</span><span class="place-title-row"><span class="place-title">${esc(place.name)}</span><span class="place-arrow" aria-hidden="true">↗</span></span><span class="place-summary">${esc(place.description)}</span><span class="place-meta"><span>${esc(place.time)}</span><span>${esc(place.price)}</span></span></button>`;}).join('');
  }

  function renderFood(){
    $('#foodFilters').innerHTML=['全部','早茶','正餐','甜品','小吃'].map(category=>`<button data-category="${category}" aria-pressed="${state.category===category}">${category}</button>`).join('');
    $('#foodGrid').innerHTML=core.filterFoods(trip.foods,state.category).map(food=>`<article class="food-card"><div class="food-card-head"><div><span class="food-category">${esc(food.category)} / ${esc(food.area)}</span><h3>${esc(food.name)}</h3><div class="food-dish">${esc(food.dish)}</div></div>${illustration(food.icon)}</div><div class="food-budget">${esc(food.budget)} <span>· 规划点单金额</span></div><p>${esc(food.description)}</p><details><summary>选店与点单提示</summary><p>${esc(food.candidate)}</p></details><div class="food-card-footer">${external(core.navigationUrl(food.search),'去地图查附近门店 ↗','text-link')}</div></article>`).join('');
  }

  function renderHotels(){
    $('#hotelGrid').innerHTML=trip.hotels.map(hotel=>`<article class="hotel-card"><span class="card-label">${esc(hotel.level)}</span><h3>${esc(hotel.name)}</h3><span class="hotel-location">⌖ ${esc(hotel.location)}</span><p>${esc(hotel.reason)}</p><p class="hotel-check">订前确认：${esc(hotel.check)}</p>${external(hotel.url,'查看门店，核对两晚价格 ↗','text-link')}</article>`).join('');
  }

  function renderSources(){
    $('#sourceList').innerHTML=trip.sources.map(source=>`<div class="source-item" id="source-${esc(source.id)}">${external(source.url,source.title+' ↗')}<p>${esc(source.note)}</p></div>`).join('');
  }

  function renderTrains(){
    if(!trip.trains?.length)return;
    $('#trainCandidates').innerHTML=`<h3>已查到的日期车次，方便直接比着买。</h3><p class="snapshot">12306公开查询快照：2026年11月4日约00:40（北京时间）。车次与价格供复查，未锁票，购票时重新核实两张余票。</p><div class="table-scroll"><table><thead><tr><th>日期</th><th>车次</th><th>区间</th><th>时间</th><th>二等座 / 人</th><th>备注</th></tr></thead><tbody>${trip.trains.map(train=>`<tr><td>${esc(train.date)}</td><td><strong>${esc(train.code)}</strong></td><td>${esc(train.route)}</td><td>${esc(train.depart)} → ${esc(train.arrive)}</td><td>¥74.5</td><td>${esc(train.note)}</td></tr>`).join('')}</tbody></table></div><p>${external(trip.railLinks.outbound,'查11/6深圳北→广州南 ↗')}　${external(trip.railLinks.inbound,'查11/8广州南→深圳北 ↗')}</p><p>去程主选G6244，预计21:40–22:05到老城酒店；返程主选G6033，18:31到深圳北。酒店到达是规划估算。两人高铁往返约¥298，加两人往返接驳地铁¥24，合计约¥322。</p>`;
  }

  function updateBudget(){
    const inputs={hotelNight:$('#hotelBudget').value,foodPerson:$('#foodBudget').value,railPerson:$('#railBudget').value,localTotal:$('#localBudget').value};
    const result=core.calculateBudget(inputs);
    $('#hotelValue').textContent=money(inputs.hotelNight);$('#foodValue').textContent=money(inputs.foodPerson);
    $('#totalBudget').textContent=money(result.total);$('#perPersonBudget').textContent='约 '+money(result.perPerson)+' / 人';
    $('#budgetBreakdown').innerHTML=[['两晚住宿',result.hotel],['全程吃喝',result.food],['往返高铁',result.rail],['本地交通',result.local],['清晖园门票',result.tickets],['人数 / 晚数','2 人 / 2 晚']].map(([label,value])=>`<div>${label}<b>${typeof value==='number'?money(value):value}</b></div>`).join('');
  }

  function notify(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3300);}

  function readChecklist(){try{const saved=JSON.parse(localStorage.getItem('shunde-20261106-checklist')||'[]');return Array.isArray(saved)?saved:[];}catch{return[];}}
  const checklist=[['去返高铁各买好两张','11/6深圳北出发，11/8广州南返程，核对车站名称。'],['酒店订好同一家两晚','11/6入住、11/8退房；确认外窗、可退条款、晚到保留和寄存。'],['清晖园选好周六参观时段','走官方渠道，常规成人票15元/人；带有效证件。'],['出发前一天看天气','雨天切换顺德博物馆，带伞和防滑好走的鞋。'],['餐厅看营业与排队','候选分店、菜单、价格和等位以当天为准，排太久就换。'],['证件、充电宝和返程闹钟','周日15:00前取行李，最晚15:30开始回广州南。']];
  function renderChecklist(){const saved=readChecklist();$('#checklistItems').innerHTML=checklist.map(([title,note],index)=>`<label><input type="checkbox" data-check="${index}" ${saved.includes(index)?'checked':''}><span>${esc(title)}<small>${esc(note)}</small></span></label>`).join('');updateProgress();}
  function updateProgress(){$('#checkProgress').textContent=all('[data-check]:checked').length+' / '+checklist.length+' 已准备';}

  function openPlace(id){
    const place=trip.places.find(p=>p.id===id);if(!place)return;
    previousFocus=document.activeElement;
    const dialog=$('#placeDialog');
    $('#dialogContent').innerHTML=`${place.image?`<img class="dialog-image" src="${esc(place.image.replace('.jpg','.webp'))}" alt="${esc(place.alt)}" width="1200" height="800">`:''}<div class="dialog-body"><p class="eyebrow">${esc(place.english)} / ${esc(place.area)}</p><h2 id="dialogTitle">${esc(place.name)}</h2><div class="dialog-facts"><span>${esc(place.time)}</span><span>${esc(place.price)}</span></div><div class="dialog-hours">${esc(place.hours)}</div><p>${esc(place.description)}</p><ul>${place.tips.map(tip=>`<li>${esc(tip)}</li>`).join('')}</ul>${external(id==='foshan'?'https://uri.amap.com/search?keyword='+encodeURIComponent('佛山祖庙 岭南天地')+'&city=佛山':core.navigationUrl(place.name),'打开高德地图查路线 ↗','button primary')}${place.image?'<p class="dialog-photo-note">历史实拍，非当日景观；作者、原图和许可见页面“查证来源与图片署名”。</p>':''}<div class="dialog-sources">${place.sources.length?'相关依据':'此项为跨区替换建议；门票、演出及开放尚未完成日期核实。'}${place.sources.map(id=>{const source=trip.sources.find(s=>s.id===id);return source?external(source.url,source.title+' ↗'):'';}).join('')}</div></div>`;
    if(typeof dialog.showModal==='function')dialog.showModal();else{dialog.setAttribute('open','');dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','true');}
    $('#dialogClose').focus();
  }
  function closePlace(){const dialog=$('#placeDialog');if(typeof dialog.close==='function')dialog.close();else dialog.removeAttribute('open');previousFocus?.focus();}

  function downloadTrip(){
    const text=core.buildTripText({...trip,days:effectiveDays()},state.variant);
    const blob=new Blob(['\uFEFF'+text],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),anchor=document.createElement('a');
    anchor.href=url;anchor.download='2026年11月6-8日顺德周末行程.txt';document.body.appendChild(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);notify('文字行程已下载，可存到手机随时看。');
  }

  document.addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button)return;
    if(button.dataset.day){state.day=button.dataset.day;renderDays();renderMap();$('#tab-'+state.day).focus();}
    if(button.dataset.variant){state.variant=button.dataset.variant;state.day='sun';all('[data-variant]').forEach(option=>option.setAttribute('aria-pressed',String(option.dataset.variant===state.variant)));renderDays();renderMap();}
    if(button.dataset.place)openPlace(button.dataset.place);
    if(button.dataset.category){state.category=button.dataset.category;renderFood();$('#foodFilters').querySelector(`[data-category="${state.category}"]`).focus();}
    if(button.dataset.action==='download')downloadTrip();
    if(button.dataset.action==='print'){all('details').forEach(detail=>detail.dataset.wasOpen=String(detail.open));window.print();}
  });
  $('#dayTabs').addEventListener('keydown',event=>{
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    event.preventDefault();const ids=trip.days.map(day=>day.id),index=ids.indexOf(state.day);state.day=event.key==='Home'?ids[0]:event.key==='End'?ids[2]:ids[(index+(event.key==='ArrowRight'?1:2))%3];renderDays();renderMap();$('#tab-'+state.day).focus();
  });
  document.addEventListener('change',event=>{if(event.target.matches('[data-check]')){const selected=all('[data-check]:checked').map(input=>Number(input.dataset.check));try{localStorage.setItem('shunde-20261106-checklist',JSON.stringify(selected));}catch{notify('当前浏览器未允许保存；本页仍可勾选。');}updateProgress();}});
  ['hotelBudget','foodBudget','railBudget','localBudget'].forEach(id=>$('#'+id).addEventListener('input',updateBudget));
  $('#dialogClose').addEventListener('click',closePlace);
  $('#placeDialog').addEventListener('click',event=>{if(event.target===$('#placeDialog')){const box=event.target.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)closePlace();}});
  $('#placeDialog').addEventListener('cancel',()=>{setTimeout(()=>previousFocus?.focus(),0);});
  document.addEventListener('error',event=>{if(event.target.tagName==='IMG'){event.target.style.display='none';const parent=event.target.parentElement;if(!parent.querySelector('.image-error')){const note=document.createElement('span');note.className='image-error';note.textContent='实拍暂未载入，请稍后重试';parent.appendChild(note);}}},true);
  renderDays();renderMap();renderPlaces();renderFood();renderHotels();renderSources();renderTrains();renderChecklist();updateBudget();
})();
