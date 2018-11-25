
export const each = (arr, fn) => {
  for(let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}