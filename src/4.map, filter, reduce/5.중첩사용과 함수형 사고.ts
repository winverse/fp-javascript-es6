import { map } from './1.map';
import { filter, products } from './3.filter';
import { reduce } from './4.reduce';
import { log } from '../lib/utils';
import { go } from '../5.코드를 값으로 다루어 표현력 높이기/1.go';

const add = (a, b) => a + b;
// log(
//   reduce(
//     add,
//     map(
//       p => p.price,
//       filter(p => p.price < 20000, products),
//     ),
//   ),
// );

// 위의 코드보다 훨씬 가독성이 좋다

// go(
//   products,
//   products => filter(p => p.price < 20000, products),
//   products => map(p => p.price, products),
//   prices => reduce(add, prices),
//   log,
// );
