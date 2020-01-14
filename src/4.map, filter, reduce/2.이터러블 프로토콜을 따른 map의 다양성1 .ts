import { log } from '../lib/utils';
import { map } from './1.map';

`
  # 이터러블 프로토콜을 따른 map의 다형성
`;

// log([1, 2, 3].map(a => a + 1));

// log(map(el => el.nodeName, document.querySelectorAll('*')));

// const it = document.querySelectorAll('*')[Symbol.iterator](); //document.querySelectorAll역시 이터러블 프로토콜을 따르기 때문에 가능
// log(it.next())
// log(it.next())
// log(it.next())
// log(it.next())
// log(it.next())
// log(it.next())

function* gen() {
  yield 2;
  yield 3;
  yield 4;
}
// log(map(a => a * a, gen()));

// 이터러블 프로토콜을 따른다는 것은 앞으로 많은 다른 함수들과의 조합성이 좋아진다는 얘기이다.

let m = new Map();
m.set('a', 10);
m.set('b', 20);
const it = m[Symbol.iterator]();
// log(new Map(map(([k, v]) => [k, v * 2], m)));
