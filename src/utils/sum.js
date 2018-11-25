import { each } from './array';

export const sum = arr => {
  let sum = 0;

  each(arr, arrItem => {
    sum += arrItem;
  });

  return sum;
}