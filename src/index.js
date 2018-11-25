document.write('Hello webpack!\n');

window.setTimeout(() => {
  import('./utils/sum').then(sumUtil => {
    console.log(sumUtil.sum([1, 2, 3, 4]));
  });
}, 2000);
