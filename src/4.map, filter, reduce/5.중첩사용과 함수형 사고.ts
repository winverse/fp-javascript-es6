import { map } from './1.map';
import { filter, products } from './3.filter';
import { reduce } from './4.reduce';
import { log } from '../lib/utils';

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
