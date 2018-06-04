
const { simplex3d } = require('../').default;
console.log(simplex3d);

// const canvas = document.getElementsByTagName('canvas')[0];
// const cWidth = 1024;
// const cHeight = 768;
// canvas.width = cWidth;
// canvas.height = cHeight;
// const ctx = canvas.getContext('2d');
// const image = ctx.createImageData(cWidth, cHeight);
// const { data } = image;
// let height = 0;
// const fn = 'simplex3d';

// function drawFrame() {
//   const start = Date.now();
//   let max = -Infinity;
//   let min = Infinity;
//   for (let x = 0; x < cWidth; x++) {
//     for (let y = 0; y < cHeight; y++) {
//       let value = simplex3d(x / 50, y / 50, height);
//       if (max < value) max = value;
//       if (min > value) min = value;
//       value = (1 + value) * 1.1 * 128;
//       const cell = (x + y * cWidth) * 4;
//       data[cell] = data[cell + 1] = data[cell + 2] = value;
//       data[cell + 3] = 255;
//     }
//   }

//   const end = Date.now();
//   ctx.fillColor = 'black';
//   ctx.fillRect(0, 0, 100, 100);
//   ctx.putImageData(image, 0, 0);
//   ctx.font = '16px sans-serif';
//   ctx.textAlign = 'center';
//   ctx.fillText(`${fn} rendered in ${end - start} ms`, cWidth / 2, cHeight - 20);
//   if (console) {
//     console.log(`${fn} rendered in ${end - start} ms`, `range: ${min} to ${max}`);
//   }
//   height += 0.05;
//   requestAnimationFrame(drawFrame);
// }

// // start animation
// requestAnimationFrame(drawFrame);
