import { log } from '../lib/utils';
import { odds } from './2.odds';
`
  # for of, 전개 연산자, 구조 분해, 나머지 연산자
`;

// log(...odds(10));
// log([...odds(10), ...odds(20)]);

const [heap, ...tail] = odds(5);

const [a, b, ...rest] = odds(10);

// log(a);
// log(b);
