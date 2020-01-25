`
  curry 함수를 받고 인자를 받아서 인자의 개수 많큼 순회를 한뒤에 함수를 평가 한다.
`;

export const curry = f => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));

const curry1 = f => (a, ..._) => {
  console.log('a', a);
};

curry1((a, b) => a + b);
const mult = curry((a, b) => a * b);

const mult3 = mult(3);
console.log('m', mult3(2));
