import { f, eulerMethod } from '../index.js';

const answer1 = [
  [0, 1],
  [0.1, 0.8],
  [0.2, 0.641],
  [0.30000000000000004, 0.5168],
  [0.4, 0.42244000000000004],
  [0.5, 0.35395200000000004],
  [0.6, 0.30816160000000004],
  [0.7, 0.28252928000000005],
  [0.7999999999999999, 0.275023424],
  [0.8999999999999999, 0.2840187392],
  [0.9999999999999999, 0.30821499135999997],
  [1, 0.30821499136]
];

test('does it work', () => {
  expect(eulerMethod()).toEqual(answer1);
});