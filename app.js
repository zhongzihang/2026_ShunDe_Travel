(function(){
  'use strict';
  const trip=window.TRIP,core=window.TripCore;if(!trip||!core)return;
  const $=selector=>document.querySelector(selector),all=selector=>Array.from(document.querySelectorAll(selector));
  const esc=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const external=(url,text,classes='')=>`<a href="${esc(url)}" class="${classes}" target="_blank" rel="noopener noreferrer">${esc(text)}</a>`;
  const state={day:'sat',variant:'park',category:'全部'};let toastTimer,previousFocus;
  const variantNotes={park:'10:00从酒店出发，10:20–12:00在顺峰山走一小圈。午饭后取行李，按自选返程收尾。',rain:'10:00从酒店出发，10:30–12:15参观顺德博物馆。带身份证，临行核对官方公告。',ronggui:'10:00从酒店出发，10:40–12:15逛容桂，午饭后13:30开始回老城取行李。上午不预期日落效果。'};
  const photo=(image,alt,classes='')=>`<img class="${classes}" data-photo src="${esc(image)}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
  function effectiveDays(){return core.getDays(trip,state.variant);}
  function renderDays(){
    $('#dayTabs').innerHTML=trip.days.map((day,index)=>`<button class="day-tab" id="tab-${day.id}" role="tab" aria-selected="${state.day===day.id}" aria-controls="panel-${day.id}" tabindex="${state.day===day.id?'0':'-1'}" data-day="${day.id}"><span>DAY 0${index+1} / ${esc(day.date)}</span><strong>${['下班出发，住进老城','10点出门，老城逛吃','10点出门，半日留白'][index]}</strong><small>${['周五晚 · 按自选交通','大良老城 · 园林与奶食','周日上午 · 从容返程'][index]}</small></button>`).join('');
    $('#dayPanels').innerHTML=effectiveDays().map((day,index)=>`<section class="day-panel" id="panel-${day.id}" role="tabpanel" aria-labelledby="tab-${day.id}" tabindex="0" ${state.day===day.id?'':'hidden'}><div class="day-intro"><span class="day-number">0${index+1}</span><h3>${esc(day.title)}</h3><p>${esc(day.subtitle)}</p><span class="day-distance">${esc(day.distance)}</span></div><ol class="timeline">${day.events.map(event=>`<li class="is-${esc(event.type)}"><time>${esc(event.time)}</time><div><h4>${esc(event.title)}</h4><p>${esc(event.description)}</p>${event.place?`<button class="timeline-link" data-place="${esc(event.place)}">查看景点实拍与详情 ↗</button>`:''}</div></li>`).join('')}</ol></section>`).join('');
    $('#alternativeMessage').textContent=variantNotes[state.variant];
    window.GuideMap?.setDay(state.day,state.variant);
  }
  function renderMapStops(){
    const ids=state.day==='sun'?[{park:'shunfeng',rain:'museum',ronggui:'ronggui'}[state.variant]]:['qinghui','huagai','jinbang'];
    $('#mapStops').innerHTML=ids.map(id=>{const place=trip.places.find(p=>p.id===id);return `<button data-place="${id}" class="map-stop">${place.image?photo(place.image,place.alt):`<span class="map-stop-number">${place.number}</span>`}<span><small>${esc(place.area)}</small><strong>${esc(place.name)}</strong></span><span aria-hidden="true">↗</span></button>`;}).join('');
  }
  function renderPlaces(){
    const order=['qinghui','shunfeng','huagai','jinbang','huagaishan','museum','ronggui','foshan'];
    $('#placeGrid').innerHTML=order.map((id,index)=>{const place=trip.places.find(p=>p.id===id);return `<button class="place-card ${index<2?'featured':''} ${place.image?'has-photo':'text-only'}" data-place="${id}" aria-label="查看${esc(place.name)}详情">${place.image?`<span class="place-visual">${photo(place.image,place.alt)}<span class="place-tag">${esc(place.tag)}</span><span class="image-note">历史实拍</span></span>`:`<span class="text-place-top"><span>${place.number}</span><small>${esc(place.tag)}</small></span>`}<span class="place-english">${esc(place.english)}</span><span class="place-title-row"><span class="place-title">${esc(place.name)}</span><span class="place-arrow" aria-hidden="true">↗</span></span><span class="place-summary">${esc(place.description)}</span><span class="place-meta"><span>${esc(place.time)}</span><span>${esc(place.price)}</span></span></button>`;}).join('');
  }
  function renderFood(){
    $('#foodFilters').innerHTML=['全部','早茶','正餐','甜品','小吃'].map(category=>`<button data-category="${category}" aria-pressed="${state.category===category}">${category}</button>`).join('');
    $('#foodGrid').innerHTML=core.filterFoods(trip.foods,state.category).map(food=>`<article class="food-card ${food.image?'food-with-photo':''}">${food.image?`<figure class="food-photo">${photo(food.image,food.alt)}<figcaption>民信双皮奶 · 2024年1月实拍</figcaption></figure>`:''}<div class="food-card-head"><div><span class="food-category">${esc(food.category)} / ${esc(food.area)}</span><h3>${esc(food.name)}</h3><div class="food-dish">${esc(food.dish)}</div></div></div><div class="food-price">${esc(food.priceHint)} · 两人点单参考</div><p>${esc(food.description)}</p><details><summary>选店与点单提示</summary><p>${esc(food.candidate)}</p></details><div class="food-card-footer"><button class="text-link" data-place="${food.id==='porridge'?'huagai':food.id==='cantonese'?'qinghui':'jinbang'}">看所在片区详情 ↗</button></div></article>`).join('');
  }
  function renderHotels(){$('#hotelGrid').innerHTML=trip.hotels.map(hotel=>`<article class="hotel-card"><span class="card-label">${esc(hotel.level)}</span><h3>${esc(hotel.name)}</h3><span class="hotel-location">⌖ ${esc(hotel.location)}</span><p>${esc(hotel.reason)}</p><p class="hotel-check">订前确认：${esc(hotel.check)}</p>${external(hotel.url,'查看门店与两晚房型 ↗','text-link')}</article>`).join('');}
  function renderSocial(){
    $('#socialNotes').innerHTML=trip.socialNotes.map(note=>`<article class="social-card"><div class="social-card-top"><span>小红书 · ${esc(note.kind)}</span><time>${esc(note.published)}</time></div><h3>${esc(note.id==='xhs-route'?'大良和容桂，分开留时间':'奶食别贪多，排队留弹性')}</h3><ul>${note.takeaways.map(text=>`<li>${esc(text)}</li>`).join('')}</ul><p class="social-adoption"><strong>放进这次行程：</strong>${esc(note.adoption)}</p><p class="social-author">来源：${esc(note.author)} · ${esc(note.title)}</p><div class="social-links"><a class="text-link" href="${esc(note.appUrl)}">在小红书 App 查看 ↗</a>${external(note.url,'网页原文 ↗','text-link')}</div></article>`).join('');
  }
  function renderSources(){$('#sourceList').innerHTML=trip.sources.map(source=>`<div class="source-item" id="source-${esc(source.id)}">${external(source.url,source.title+' ↗')}<p>${esc(source.note)}</p></div>`).join('');}
  function notify(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3300);}
  function readChecklist(){try{const saved=JSON.parse(localStorage.getItem('shunde-20261106-checklist-v2')||'[]');return Array.isArray(saved)?saved:[];}catch{return[];}}
  const checklist=[['去返交通按自选方案确认','核对出发站、到达站和乘车日期；攻略不再替你指定车次。'],['酒店同一家连住两晚','11/6入住、11/8退房；确认外窗、隔音、晚到保留和寄存。'],['清晖园选好周六参观时段','周六10点出门，按官方时段入园，带有效证件。'],['出发前一天看天气','雨天可切换顺德博物馆，带伞和好走的鞋。'],['餐厅先看营业与等位','小红书只是选店线索，分店、菜单和排队以当天为准。'],['证件、充电宝和返程提醒','周日10点出发；取行李和去车站的时间按自选交通倒推。']];
  function renderChecklist(){const saved=readChecklist();$('#checklistItems').innerHTML=checklist.map(([title,note],index)=>`<label><input type="checkbox" data-check="${index}" ${saved.includes(index)?'checked':''}><span>${esc(title)}<small>${esc(note)}</small></span></label>`).join('');updateProgress();}
  function updateProgress(){$('#checkProgress').textContent=all('[data-check]:checked').length+' / '+checklist.length+' 已准备';}
  function openPlace(id){
    const place=trip.places.find(p=>p.id===id);if(!place)return;previousFocus=document.activeElement;
    const dialog=$('#placeDialog');$('#dialogContent').innerHTML=`${place.image?photo(place.image,place.alt,'dialog-image'):''}<div class="dialog-body"><p class="eyebrow">${esc(place.english)} / ${esc(place.area)}</p><h2 id="dialogTitle">${esc(place.name)}</h2><div class="dialog-facts"><span>${esc(place.time)}</span><span>${esc(place.price)}</span></div><div class="dialog-hours">${esc(place.hours)}</div><p>${esc(place.description)}</p><ul>${place.tips.map(tip=>`<li>${esc(tip)}</li>`).join('')}</ul>${place.coords?`<button class="button primary" data-focus-place="${id}">回到本站实景图定位 ↗</button>`:''}${place.image?`<p class="dialog-photo-note">历史实拍 · ${esc(place.photoCredit)}，非出发日景观。</p>`:''}<div class="dialog-sources">${place.sources.length?'相关依据':'跨区替换思路；当日门票与演出尚需另行确认。'}${place.sources.map(id=>{const source=trip.sources.find(s=>s.id===id);return source?external(source.url,source.title+' ↗'):'';}).join('')}</div></div>`;
    if(typeof dialog.showModal==='function')dialog.showModal();else{dialog.setAttribute('open','');dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','true');}$('#dialogClose').focus();
  }
  function closePlace(){const dialog=$('#placeDialog');if(typeof dialog.close==='function')dialog.close();else dialog.removeAttribute('open');previousFocus?.focus();}
  function downloadTrip(){const text=core.buildTripText({...trip,days:effectiveDays()},state.variant),blob=new Blob(['\uFEFF'+text],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),anchor=document.createElement('a');anchor.href=url;anchor.download='2026年11月6-8日顺德周末行程.txt';document.body.appendChild(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);notify('已保存10点出发版本的文字行程。');}
  document.addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button)return;
    if(button.dataset.day){state.day=button.dataset.day;renderDays();renderMapStops();$('#tab-'+state.day).focus();}
    if(button.dataset.variant){state.variant=button.dataset.variant;state.day='sun';all('[data-variant]').forEach(option=>option.setAttribute('aria-pressed',String(option.dataset.variant===state.variant)));renderDays();renderMapStops();}
    if(button.dataset.place)openPlace(button.dataset.place);
    if(button.dataset.focusPlace){closePlace();$('#route').scrollIntoView({behavior:'smooth'});window.GuideMap?.focusPlace(button.dataset.focusPlace);}
    if(button.dataset.category){state.category=button.dataset.category;renderFood();$('#foodFilters').querySelector(`[data-category="${state.category}"]`).focus();}
    if(button.dataset.action==='download')downloadTrip();
    if(button.dataset.action==='print')window.print();
  });
  document.addEventListener('guide:place',event=>openPlace(event.detail));
  $('#dayTabs').addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const ids=trip.days.map(day=>day.id),index=ids.indexOf(state.day);state.day=event.key==='Home'?ids[0]:event.key==='End'?ids[2]:ids[(index+(event.key==='ArrowRight'?1:2))%3];renderDays();renderMapStops();$('#tab-'+state.day).focus();});
  document.addEventListener('change',event=>{if(event.target.matches('[data-check]')){const selected=all('[data-check]:checked').map(input=>Number(input.dataset.check));try{localStorage.setItem('shunde-20261106-checklist-v2',JSON.stringify(selected));}catch{notify('当前浏览器未允许保存，本页仍可勾选。');}updateProgress();}});
  $('#dialogClose').addEventListener('click',closePlace);
  $('#placeDialog').addEventListener('click',event=>{if(event.target===$('#placeDialog')){const box=event.target.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)closePlace();}});
  $('#placeDialog').addEventListener('cancel',()=>setTimeout(()=>previousFocus?.focus(),0));
  document.addEventListener('error',event=>{if(event.target.matches?.('img[data-photo],.hero-photo>img')){event.target.style.display='none';const parent=event.target.parentElement;if(!parent.querySelector('.image-error')){const note=document.createElement('span');note.className='image-error';note.textContent='这张实拍暂未载入';parent.appendChild(note);}}},true);
  renderPlaces();renderFood();renderHotels();renderSocial();renderSources();renderChecklist();window.GuideMap?.init(trip);renderDays();renderMapStops();
})();
