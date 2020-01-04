import { log } from '../lib/utils';

`
  # 일급 함수
    - 함수를 값으로 다를 수 있다. -> 변수에 함수를 담을 수 있다는 이야기
    - 조합성과 추상화의 도구이다.
`;

const add5 = a => a + 5;

log('add', add5(5));
