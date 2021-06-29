let j = 3, k = 7, m = Math.pow(2, 32), seed = 18578318535451054;
seed = seed.toString().split('');
seed = seed.map(num => {
  return parseInt(num)
})
function nextRand() {
  let num1 = seed[j - 1];
  let num2 = seed[k - 1];
  let random = (num1 + num2) % m;
  seed.push(random)
  seed.shift()
  return random
}

function nextRandFloat() {
  return nextRand() / m;
}

let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d');

let y = 0;
function draw() {
  for (let x = 0; x < 800; x++) {
    if (nextRandFloat() < 0.5) {
      context.fillRect(x, y, 1, 1);
    }
  }
  y++;
  if (y < 800) {
    requestAnimationFrame(draw);
  }
}