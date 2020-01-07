import { log } from '../lib/utils';
`
  ### Array를 통해 알아보기
    - key 값으로 접근을 해서 안에 있는 값을 조회를 할 수가 있다.
`;

// log('Arr-----------------------');
const arr = [1, 2, 3];
// log(arr[Symbol.iterator]);
// for (const a of arr) log(a);

`
  ### Set을 통해 알아보기
    - key값으로 접근해서 조회를 할 수가 없다. ---> ** 기존 Array 처럼 순회를 하지 않는다. **
`;

// log('Set-----------------------');
const set = new Set([1, 2, 3]);
// for (const a of set) log(a);

`
  ### Map을 통해 알아보기
    - key값으로 접근해서 조회를 할 수가 없다. ---> ** 기존 Array 처럼 순회를 하지 않는다. **
`;

// log('Map-----------------------');
const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);

// for (const a of map) log(a);
// for (const a of map.keys()) log(a);
// for (const a of map.values()) log(a);
// for (const a of map.entries()) log(a);

// log('--------------------------');
// const iterator = map.values();
// const it2 = iterator[Symbol.iterator]();

// log(it2.next());

`
  ## 이터러블/이터레이터 프로토콜
    - 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값
    - 이터레이터: { value, done } 객체를 리턴하는 next()를 가진 값
    - 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약

`;
