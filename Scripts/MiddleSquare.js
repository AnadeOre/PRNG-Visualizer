let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d');
let seed, digits;
const seedInput = document.getElementById('seed')
const warning = document.getElementById('warning')


function refresh() {
  window.location.reload(false)
}

function runMiddleSquare() {
  seed = seedInput.valueAsNumber;
  digits = seed.toString().split('').length;
  if (isNaN(seed)) {
    warning.classList.remove('hidden');
    warning.classList.add('warning-visible');
    return
  }
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
  return nextRand() / digits;
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
  if (y < 600) {
    requestAnimationFrame(() => { draw() });
  }
}