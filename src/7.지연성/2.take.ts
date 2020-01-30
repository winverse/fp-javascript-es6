import { range, L, add } from './1.range 와 느긋한 L.range';
import { log } from '../lib/utils';
import { curry } from '../5.코드를 값으로 다루어 표현력 높이기/3.curry';
import { go } from '../5.코드를 값으로 다루어 표현력 높이기/1.go';
import { reduce } from '../4.map, filter, reduce/4.reduce';

// take 숫자 만큼 개수를 가져옴

const take = curry((l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
});

// console.time('range');
// go(range(100000), take(5), reduce(add), log);
// console.timeEnd('range');

// console.time('L.range');
// go(L.range(100000), take(5), reduce(add), log);
// console.timeEnd('L.range');
