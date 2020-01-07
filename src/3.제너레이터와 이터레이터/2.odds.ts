import { log } from '../lib/utils';

function* infinity(i = 0) {
  // 무한 반복문이지만 next를 이용하여 출력하면 멈추지 않는다.
  while (true) yield i++;
}

let iter3 = infinity();

// log(iter3.next());
// log(iter3.next());
// log(iter3.next());
// log(iter3.next());
// log(iter3.next());
// log(iter3.next());
function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a === l) return;
  }
}
function* odds(l) {
  // 홀수만을 출력하는 제너레이터
  // for (let i = 0; i <= l; i += 1) {
  //   if (i % 2) yield i;
  // }

  // for (const a of infinity(1)) {
  //   if (a % 2) yield a;
  //   if (a === l) return;
  // }

  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

let iter2 = odds(10);

// log(iter2.next());
// log(iter2.next());
// log(iter2.next());
// log(iter2.next());
// log(iter2.next());
// log(iter2.next());
// log(iter2.next());

// for (const a of odds(40)) log(a);
