
let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d');
let j, k, m, seed;
const jInput = document.getElementById('j')
const kInput = document.getElementById('k')
const mInput = document.getElementById('m')
const seedInput = document.getElementById('seed')


function runFibonacci() {
  j = parseInt(jInput.value);
  k = parseInt(kInput.value);
  m = parseInt(mInput.value);
  seed = parseInt(seedInput.value);

  seed = seed.toString().split('');
  seed = seed.map(num => {
    return parseInt(num)
  })

  draw()
}


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


let y = 0;
function draw() {
  for (let x = 0; x < 800; x++) {
    if (nextRandFloat() < 0.5) {
      context.fillStyle = 'black'
      context.fillRect(x, y, 1, 1);
    } else {
      context.fillStyle = 'white'
      context.fillRect(x, y, 1, 1)
    }
  }
  y++;
  if (y < 800) {
    requestAnimationFrame(draw);
  }
}