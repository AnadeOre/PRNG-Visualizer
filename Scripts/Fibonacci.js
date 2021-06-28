let j = 5, k = 17, m = Math.pow(2, 32), seed = 64211615387315687894313546846513546846893;

function nextRand() {
  let n = seed.toString().split('')
  let num1 = parseInt(n[j - 1]), num2 = parseInt(n[k - 1]);
  let random = (num1 + num2) % m;
  seed = (seed.toString() + random.toString()).substring(1)
  console.log(random, seed)
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
  if (y < 600) {
    requestAnimationFrame(draw);
  }
}