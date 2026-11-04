(function () {
  'use strict';
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
  const $ = selector => document.querySelector(selector);
  let trip, previousFocus;

  function sourceLinks(reviews) {
    return reviews.map(review => {
      let url;
      try { url = new URL(review.url); } catch { return ''; }
      if (url.protocol !== 'https:') return '';
      const note = /(?:^|\.)xiaohongshu\.com$/.test(url.hostname) && url.pathname.match(/^\/(?:explore|search_result)\/([a-f0-9]+)\/?$/i);
      return note
        ? `<div class="food-review-links"><a href="xhsdiscover://item/${escapeHtml(note[1])}">在小红书 App 看原帖 ↗</a><a href="https://www.xiaohongshu.com/explore/${escapeHtml(note[1])}" target="_blank" rel="noopener noreferrer">网页原文 ↗</a></div>`
        : `<div class="food-review-links"><a href="${escapeHtml(url.href)}" target="_blank" rel="noopener noreferrer">查看体验原文 ↗</a></div>`;
    }).join('');
  }

  function photoMarkup(food, detail = false) {
    if (!food.image) return '';
    return `<figure class="${detail ? 'food-detail-photo' : 'food-card-photo'}"><img data-photo src="${escapeHtml(food.image)}" alt="${escapeHtml(food.alt || food.name)}" loading="lazy" decoding="async"><figcaption class="food-photo-credit">${escapeHtml(food.photoCaption || '对应菜品历史实拍')} · ${escapeHtml(food.photoCredit)}</figcaption></figure>`;
  }

  function cardMarkup(food, index) {
    const reviews = (food.reviews || []).filter(review => review.kind === 'personal');
    const dishes = food.order?.map(item => item.name) || food.dish.split(/\s*\/\s*/);
    return `<article class="food-card food-guide-card${food.image ? ' food-with-photo' : ''}">
      ${food.image ? photoMarkup(food) : `<div class="food-letter-cover" aria-hidden="true"><span>SHUNDE / TASTE NOTES</span><strong>${escapeHtml(food.coverWord || food.category)}</strong><small>${escapeHtml(food.area)}</small><b>${String(index + 1).padStart(2, '0')}</b></div>`}
      <div class="food-guide-card-body"><div class="food-card-kicker"><span>${escapeHtml(food.category)} / ${escapeHtml(food.area)}</span><span>${reviews.length ? '有食客反馈' : '点单建议'}</span></div>
      <h3>${escapeHtml(food.shopName || food.name)}</h3><p class="food-branch">${escapeHtml(food.branch || food.name)}</p>
      <p class="food-card-intro">${escapeHtml(food.cardSummary || food.description)}</p>
      <div class="food-dish-tags" aria-label="推荐点单">${dishes.slice(0, 3).map(name => `<span>${escapeHtml(name)}</span>`).join('')}</div>
      <dl class="food-card-insights"><div><dt>口味</dt><dd>${escapeHtml(food.flavor || food.description)}</dd></div><div><dt>两人</dt><dd>${escapeHtml(food.twoPeople || food.candidate)}</dd></div></dl>
      <div class="food-guide-card-bottom"><span>${escapeHtml(food.routeLabel || food.area)}</span><button type="button" class="food-open" data-food="${escapeHtml(food.id)}" aria-haspopup="dialog" aria-controls="foodDialog" aria-label="查看${escapeHtml(food.shopName || food.name)}点单与体验">点单与体验 <span aria-hidden="true">↗</span></button></div></div></article>`;
  }

  function reviewsMarkup(food) {
    const personal = (food.reviews || []).filter(review => review.kind === 'personal');
    if (!personal.length) return `<section class="food-detail-section"><h3>食客反馈</h3><p class="food-no-review">这张卡片目前以菜品资料与路线建议为主。未取得可核对的个人到店正文，口味和点单按规划建议展示。</p></section>`;
    return `<section class="food-detail-section"><div class="food-detail-section-title"><h3>食客反馈</h3><span>保留不同口味，供你判断</span></div><div class="food-review-list">${personal.map(review => `<article class="food-review-card"><div class="food-review-meta"><strong>${escapeHtml(review.author || review.source)}</strong><span>${escapeHtml(review.source || '个人游记')}</span>${review.date ? `<time datetime="${escapeHtml(review.date)}">发布于 ${escapeHtml(review.date)}</time>` : ''}</div><h4>${escapeHtml(review.title || '个人到店反馈')}</h4><p>${escapeHtml(review.summary)}</p>${sourceLinks([review])}</article>`).join('')}</div><p class="food-review-caveat">个人体验有时效与口味差异；未据此生成平台总评分。营业、菜单和等位以到店为准。</p></section>`;
  }

  function open(id, trigger) {
    const food = trip.foods.find(item => item.id === id);
    if (!food) return;
    previousFocus = trigger || document.activeElement;
    const orders = food.order || food.dish.split(/\s*\/\s*/).map(name => ({ name, note: '按当天菜单选择小份，两人分享。' }));
    $('#foodDialogContent').innerHTML = `<div class="food-detail-hero${food.image ? ' has-photo' : ''}">${photoMarkup(food, true)}<div class="food-detail-heading"><p class="eyebrow">${escapeHtml(food.category)} / ${escapeHtml(food.area)}</p><h2 id="foodDialogTitle">${escapeHtml(food.shopName || food.name)}</h2><p class="food-detail-branch">${escapeHtml(food.branch || food.name)}</p><p class="food-detail-intro">${escapeHtml(food.cardSummary || food.description)}</p>${food.address ? `<p class="food-address">地址线索 · ${escapeHtml(food.address)}</p>` : ''}</div></div>
      <div class="food-detail-body"><section class="food-detail-section"><div class="food-detail-section-title"><h3>这家怎么点</h3><span>两个人，先点小份</span></div><ul class="food-order-list">${orders.map(item => `<li><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.note)}</span></li>`).join('')}</ul><p class="food-two-people"><b>两个人这样吃</b>${escapeHtml(food.twoPeople || food.candidate)}</p></section>
      <section class="food-detail-section"><h3>坐下来，会是什么体验</h3><dl class="food-experience-grid"><div><dt>口味与口感</dt><dd>${escapeHtml(food.flavor || food.description)}</dd></div><div><dt>用餐环境</dt><dd>${escapeHtml(food.environment || '先看现场座位、卫生与菜单，再决定是否入座。')}</dd></div><div><dt>排队与节奏</dt><dd>${escapeHtml(food.waiting || '未取得当前等位记录；到店先问取号，时间不合适就选附近替代。')}</dd></div><div><dt>谁会喜欢</dt><dd>${escapeHtml(food.goodFor || '想按自己的口味尝试顺德菜、愿意两人分食的人。')}</dd></div></dl><p class="food-experience-basis">${escapeHtml(food.experienceBasis || '口味说明为菜品资料归纳，两人点单为本次路线建议；个人到店意见另列。')}</p></section>
      <section class="food-route-fit"><span>顺路安排</span><h3>${escapeHtml(food.routeLabel || food.area)}</h3><p>${escapeHtml(food.routeFit || food.description)}</p>${food.placeId ? `<button type="button" class="text-link" data-food-place="${escapeHtml(food.placeId)}">看看附近怎么逛 ↗</button>` : ''}</section>
      ${reviewsMarkup(food)}
      <section class="food-detail-section food-detail-sources"><h3>查店与参考</h3><p>${escapeHtml(food.candidate)}</p>${(food.sources || []).map(id => { const source = trip.sources.find(item => item.id === id); return source ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)} ↗</a>` : ''; }).join('')}</section></div>`;
    const dialog = $('#foodDialog');
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else { dialog.setAttribute('open', ''); dialog.setAttribute('role', 'dialog'); dialog.setAttribute('aria-modal', 'true'); }
    dialog.scrollTop = 0;
    $('#foodDialogClose').focus();
  }

  function close() {
    const dialog = $('#foodDialog');
    if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open');
    previousFocus?.focus();
  }

  function init(data) {
    trip = data;
    document.addEventListener('click', event => {
      const trigger = event.target.closest('[data-food]');
      if (trigger) open(trigger.dataset.food, trigger);
      const place = event.target.closest('[data-food-place]');
      if (place) { close(); document.dispatchEvent(new CustomEvent('guide:place', { detail: place.dataset.foodPlace })); }
    });
    $('#foodDialogClose').addEventListener('click', close);
    $('#foodDialog').addEventListener('cancel', event => { event.preventDefault(); close(); });
    $('#foodDialog').addEventListener('click', event => {
      if (event.target !== $('#foodDialog')) return;
      const bounds = event.target.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
    });
  }
  window.FoodGuide = { init, cardMarkup };
})();
