import { log } from '../lib/utils';
`
  # 제너레이터/이터레이터
    - 제너레이터: 이터레이터이자 이터러블을 생성하는 함수 
`;

function* gen() {
  yield 1;
  if (false) yield 2; // 건너뜀
  yield 3;
  return 100; // 제너레이터는 리턴값이 있을 수 있다. -> 출력 { value: 100, done: true }
}

// 어떤 값도 제너레이터를 통해서 순회 가능한 이터러블을 만들 수 있다.

let iter = gen();
// log(iter[Symbol.iterator]() === iter); // 제너레이터는 well-formed 이터레이터이자 이터러블이다.
// log(iter.next());
// log(iter.next());
// log(iter.next());
// log(iter.next());
