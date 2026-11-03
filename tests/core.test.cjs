const test = require('node:test');
const assert = require('node:assert/strict');
const core = require('../core.js');

test('两人两晚预算正确，明确为规划预算', () => {
  const result = core.calculateBudget({hotelNight:260, foodPerson:325, railPerson:180, localTotal:160});
  assert.equal(result.total, 1720);
  assert.equal(result.perPerson, 860);
  assert.equal(result.hotel, 520);
});

test('空值和非法预算不会出现负数或 NaN', () => {
  assert.equal(core.calculateBudget({hotelNight:-1,foodPerson:'x',railPerson:null,localTotal:-20}).total,30);
});

test('餐饮筛选保留顺路分类，可返回空列表', () => {
  const food = [{id:'milk',category:'甜品',area:'大良老城'},{id:'fish',category:'正餐',area:'容桂'}];
  assert.deepEqual(core.filterFoods(food,'甜品').map(x=>x.id),['milk']);
  assert.deepEqual(core.filterFoods(food,'全部'),food);
  assert.deepEqual(core.filterFoods(food,'早茶'),[]);
});

test('地图导航完整编码中文地点，避免地址参数混乱', () => {
  const url = new URL(core.navigationUrl('清晖园 & 华盖路'));
  assert.equal(url.hostname,'uri.amap.com');
  assert.equal(url.searchParams.get('keyword'),'佛山顺德 清晖园 & 华盖路');
});

test('行程导出包含正确日期、返程缓冲、两晚住宿及备选标识', () => {
  const text = core.buildTripText({days:[{date:'11月6日 周五',title:'出发',events:[{time:'19:00',title:'深圳北出发',description:'建议时间窗'}]}]},'park');
  assert.match(text,/2026年11月6日/);
  assert.match(text,/2026年11月8日/);
  assert.match(text,/两晚/);
  assert.match(text,/90/);
  assert.match(text,/深圳北出发/);
  assert.match(text,/顺峰山/);
});
