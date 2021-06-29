//let seed = 1111111111;

let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d');
let seed, digits;
const seedInput = document.getElementById('seed')

function runLCG() {
  seed = seedInput.valueAsNumber;
  digits = seed.toString().split('').length;
  draw()
}

function nextRand() {
  let n = (seed * seed).toString();
  while (n.length < digits * 2) {
    n = "0" + n;
  }
  let start = Math.floor(digits / 2),
    end = start + digits;
  seed = parseInt(n.substring(start, end));
  return seed;
}

function nextRandFloat() {
  return nextRand() / 9999999999;
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