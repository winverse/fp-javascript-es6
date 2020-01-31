import { go } from '../5.코드를 값으로 다루어 표현력 높이기/1.go';
import { L } from '../7.지연성/1.range 와 느긋한 L.range';
import { take } from '../7.지연성/2.take';
import { log } from '../lib/utils';

go(
  L.range(10),
  L.map(n => n + 10),
  L.filter(n => n % 2),
  take(2),
  log,
);


// 평가 순서를 알아보자

// [0,1,2,3,4,5,6,7,8,9,10]
// [10, 11, 12, ...],
// [11,13,15...]
// [11,13]

// 이렇게 실행되는 순서가 지연평가 아닌 일반 평가 실행 순서이며

// [0]   
// [10]
// false
// [1]
// [11]
// true

// 지연평가는 이렇게 실행 된다.