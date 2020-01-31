import { log } from '../lib/utils';
import { reduce } from '../4.map, filter, reduce/4.reduce';

// range 숫자를 받고 숫자의 크기만큼의 배열을 리턴

export const add = (a, b) => a + b;
export const range: (length: number) => number[] = length => {
  let i = -1;
  let res: number[] = [];
  while (++i < length) {
    res.push(i);
  }
  return res;
};

const list = range(5);
// log('list', list);
// log(reduce(add, list));

// 느긋한 L.range

export interface IL {
  range?: any;
  map?: any;
  filter?: any;
}
export const L: IL = {};

L.range = function*(length) {
  let i = -1;
  let res = [];
  while (++i < length) {
    yield i;
  }
  return res;
};

const lists = L.range(5);
// log('list', lists);
// log(reduce(add, lists));

// test

function test(name, time, f) {
  console.time(name);
  while (time--) f();
  console.timeEnd(name);
}

// test('range', 10, () => reduce(add, range(1000000)));
// test('L.range', 10, () => reduce(add, L.range(1000000)));
