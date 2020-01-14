import { log } from '../lib/utils';
import { products } from './3.filter';
`
  # reduce
`;

const nums = [1, 2, 3, 4, 5];

let total = 0;
for (const n of nums) {
  total = total + n;
}

// log(total);

export const reduce = (f: (a, b) => number, acc: number | any[], iter?: number[] | any) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = (iter as any).next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const add = (a, b): number => a + b;

// log(reduce(add, 0, [1, 2, 3, 4, 5]));

// log(add(add(add(add(add(0, 1), 2), 3), 4), 5));

// log(reduce(add, [1, 2, 3, 4, 5]));

// log(reduce((total_price, product) => total_price + product.price, 0, products));
