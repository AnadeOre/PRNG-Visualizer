let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d');
let a, m, seed;
const aInput = document.getElementById('a')
const mInput = document.getElementById('m')
const seedInput = document.getElementById('seed')
const warning = document.getElementById('warning')

function refresh() {
  window.location.reload(false)
}

function runLehmer() {
  a = aInput.valueAsNumber;
  m = mInput.valueAsNumber;
  seed = seedInput.valueAsNumber;
  if (isNaN(a) || isNaN(m) || isNaN(seed)) {
    warning.classList.remove('hidden');
    warning.classList.add('warning-visible');
    return
  }
  draw()
}
function nextRand() {
  seed = (a * seed) % m;
  return seed
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
  if (y < 600) {
    requestAnimationFrame(() => { draw() });
  }
}