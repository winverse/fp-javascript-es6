import { log } from '../lib/utils';
import { go } from './1.go';
`
  pipe 함수들이 나열되어 있는 합성 된 함수를 return 함
`;

export const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const f = pipe(
  (a, b) => a + b,
  a => a + 10,
  a => a + 100,
);

// log(f(0, 1));
