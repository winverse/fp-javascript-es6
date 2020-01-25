import { log } from '../lib/utils';
import { reduce } from '../4.map, filter, reduce/4.reduce';
`
  # 코드를 값으로 다루어 표현력 높이기

  ## go, pipe 
`;

// const go = (...list) => log(list);
export const go = (...args: any) => reduce((a, f) => f(a), args);

// go(
//   0,
//   a => a + 1,
//   a => a + 10,
//   a => a + 100,
//   log,
// );
// 111
