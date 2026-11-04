(function(){
  'use strict';let map,trip,markers=new Map(),day='sat',variant='park',imagery,street,labels;
  const esc=value=>String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const narrow=()=>window.matchMedia?window.matchMedia('(max-width:560px)').matches:window.innerWidth<=560;
  function selectedIds(){return day==='sun'?[{park:'shunfeng',rain:'museum',ronggui:'ronggui'}[variant]]:day==='fri'?['qinghui','huagai']:['qinghui','huagai','jinbang'];}
  function markerIcon(place){return L.divIcon({className:'photo-marker',iconSize:narrow()?[38,44]:[64,78],iconAnchor:narrow()?[19,18]:[32,64],html:`<span class="photo-marker-image">${place.image?`<img src="${esc(place.image)}" alt="">`:`<b>${place.number}</b>`}</span><span class="photo-marker-name">${esc(place.name)}</span>`});}
  function refresh(){if(!map)return;const ids=selectedIds();for(const[id,marker]of markers){const element=marker.getElement();element?.classList.toggle('photo-marker-active',ids.includes(id));element?.classList.toggle('photo-marker-inactive',!ids.includes(id));}const points=trip.places.filter(p=>ids.includes(p.id)&&p.coords).map(p=>p.coords);if(points.length===1)map.setView(points[0],15,{animate:false});else if(points.length)map.fitBounds(points,{padding:narrow()?[24,24]:[65,65],maxZoom:16,animate:false});}
  function init(data){
    trip=data;if(!window.L){document.getElementById('mapStatus').textContent='实景地图未能加载，仍可点击下方地标查看实拍与详情。';return;}
    map=L.map('realMap',{scrollWheelZoom:false,zoomControl:true,attributionControl:true,minZoom:10,maxZoom:18});
    map.attributionControl.setPrefix(false);
    imagery=L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{attribution:'影像 © Esri, Vantor, Earthstar Geographics, GIS User Community',maxZoom:18,keepBuffer:1});
    street=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',maxZoom:18,keepBuffer:1});
    map.createPane('labelPane');map.getPane('labelPane').style.zIndex=450;map.getPane('labelPane').style.pointerEvents='none';
    labels=L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',{pane:'labelPane',attribution:'标注 © Esri, HERE, Garmin, OpenStreetMap contributors',maxZoom:18,keepBuffer:1});
    imagery.addTo(map);labels.addTo(map);
    L.control.layers({'卫星实景':imagery,'街道地图':street},null,{collapsed:false,position:'topright'}).addTo(map);
    map.on('baselayerchange',event=>{if(event.layer===imagery&&!map.hasLayer(labels))labels.addTo(map);if(event.layer===street&&map.hasLayer(labels))map.removeLayer(labels);});
    let errors=0;for(const layer of[imagery,street])layer.on('tileerror',()=>{errors++;if(errors===3)document.getElementById('mapStatus').textContent='部分底图尚未载入，可切换另一种底图；景点实拍与详情仍可查看。';});
    for(const place of trip.places.filter(p=>p.coords)){
      const icon=markerIcon(place);
      const marker=L.marker(place.coords,{icon,title:place.name,alt:place.name+'，查看站内详情',keyboard:true,riseOnHover:true}).addTo(map);
      marker.on('click',()=>document.dispatchEvent(new CustomEvent('guide:place',{detail:place.id})));markers.set(place.id,marker);
    }
    L.control.scale({imperial:false,position:'bottomleft'}).addTo(map);
    map.on('resize',()=>{for(const place of trip.places.filter(p=>p.coords))markers.get(place.id)?.setIcon(markerIcon(place));refresh();});
    document.getElementById('mapReset').addEventListener('click',refresh);refresh();
  }
  function setDay(value,choice){day=value;variant=choice;refresh();}
  function focusPlace(id){const place=trip?.places.find(p=>p.id===id);if(map&&place?.coords){map.invalidateSize();for(const[otherId,marker]of markers){marker.getElement()?.classList.toggle('photo-marker-inactive',otherId!==id);marker.getElement()?.classList.toggle('photo-marker-active',otherId===id);}map.setView(place.coords,16,{animate:false});markers.get(id)?.getElement()?.focus();}}
  window.GuideMap={init,setDay,focusPlace};
})();
