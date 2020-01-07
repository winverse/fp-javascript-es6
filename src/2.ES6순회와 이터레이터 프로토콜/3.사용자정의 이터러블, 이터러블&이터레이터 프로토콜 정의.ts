import { log } from '../lib/utils';
`
    ### 사용자 정의 이터러블을 통해 알아보기
  `;

const iterable = {
  // 이터러블은 symbol.iterator을 가지고 있고 symbol.iterator는 next를 가지고 next는 { value, done } 을 가진다.
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i -= 1, done: false };
      },
    };
  },
};

let iter = iterable[Symbol.iterator]();

// log(iter.next());
// log(iter.next());
// log(iter.next());
// log(iter.next()); --> next가 나오는 것은 순회가 가능하다는 것이다.

// for (const a of iterable) log(a); --> 잘 출력이 되지만 완전한 것은 아니다.

// 예를 들어서

const arr2 = [1, 2, 3];
let iter2 = arr2[Symbol.iterator]();
// log(iter2[Symbol.iterator]() === iter2); // 심볼 이터레이터와 자기 자신이 같을때, well-formed 이터레이터라고 할 수 있다.
iter2.next();
// for (const a of iter2) log(a);

// 잘만든 이터러블은 이터레이터를 만들었을때, 이터레이터를 진행하다가 순회할 수도 있고(중간부터 시작이 가능하고), 이터러블그 자체로도 순회가 가능하다.

const iterable2 = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i -= 1, done: false };
      },
      [Symbol.iterator]() {
        // 자기 자신을 반환한다.
        return this;
      }, // 이것이 있고 없고 차이는 바로 아래 for 문에서 정의
    };
  },
};

let iter3 = iterable2[Symbol.iterator]();

// for (const a of iter) log(a); // 자기 자신을 반환하지 않는 다면 iter is not iterable 이라는 에러를 출력한다.
// log('------------------');
// for (const a of iter3) log(a); // 그냥 해도 순회가 되고 중간에 호출해도 순회가 잘된다.

`
  ### 이터러블/이터레이터 프로토콜은 ES6 내장 값들만 따르는 것이 아니라 자바스크립트에서 순회가 가능한 형태의 값을 가진 것들은
  이터러블/이터레이터 규칙을 따르고 있다. ex) Immutable, browser dom
`;

// for(const a of document.querySelectorAll('*')) log(a) ---> // tas;
// const all = document.querySelectorAll('*')
// log(all) // all 이라는 것이 순회가 가능한것은 배열이라서가 아니라(실제로 배열도 아님) [Symbol.iterator] 라서 그렇다.

`
  ## 전개 연산자
`;

const a = [1, 2];
// a[Symbol.iterator] = null; // 을 해버리면 이터러블이 아니라는 말이 나온다. -> 따라서 전개연산자도 이터러블/이터레이터 프로토콜을 따르고 있다.
// log([...a, ...[3, 4]]);
