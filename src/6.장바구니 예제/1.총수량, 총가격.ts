import { products } from '../4.map, filter, reduce/3.filter';
import { map } from '../4.map, filter, reduce/1.map';
import { reduce } from '../4.map, filter, reduce/4.reduce';
import { go } from '../5.코드를 값으로 다루어 표현력 높이기/1.go';
import { log } from '../lib/utils';
import { pipe } from '../5.코드를 값으로 다루어 표현력 높이기/2pipe';

// const total_quantity = products =>
//   go(
//     products,
//     map(p => p.quantity),
//     reduce((a, b) => a + b),
//   );

// 위와 같은 코드는 다음과 같이 변경이 가능하다.

const add = (a, b) => a + b;

const total_quantity = pipe(
  map(p => p.quantity),
  reduce(add),
);

// log(total_quantity(products));

const total_price = pipe(
  map(p => p.price * p.quantity),
  reduce(add),
);

// log(total_price(products));

/**
  total_price 와 total_quantity는 products domain 전용이라고 할 수 있다. 
  따라서 더욱 추상화 레벨을 높여보자
*/

const sum = (f, iter) => go(iter, map(f), reduce(add));

// log(sum(p => p.price * p.quantity, products));
