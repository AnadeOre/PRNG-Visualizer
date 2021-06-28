let a = 16843009, c = 826366247, m = Math.pow(2, 32), seed = 15;

function nextRand() {
  seed = (a * seed + c) % m;
  return seed
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
  if (y < 600) {
    requestAnimationFrame(draw);
  }
}