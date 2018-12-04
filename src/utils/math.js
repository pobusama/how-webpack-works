import { each } from './array';

export const plus = (a, b) => {
  return a + b;
};

export const minus = (a, b) => {
  return a - b;
};

export const sum = arr => {
  let sum = 0;

  each(arr, arrItem => {
    sum += arrItem;
  });

  return sum;
}

export default minus;