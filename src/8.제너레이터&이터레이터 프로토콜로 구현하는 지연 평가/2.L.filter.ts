import { L } from '../7.지연성/1.range 와 느긋한 L.range';
import { log } from '../lib/utils';
import { curry } from '../5.코드를 값으로 다루어 표현력 높이기/3.curry';

L.filter = curry(function*(f, iter) {
  // for (const a of iter) if (f(a)) yield a;
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    if (f(a)) {
      yield a;
    }
  }
});

const it = L.filter(a => a % 2, [1, 2, 3, 4]);

log(it.next());
