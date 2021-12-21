function calcRandom(max) {
  return Math.ceil(Math.random() * max);
}

const numbers = [];
function playLottery() {
  const id = setInterval(() => {
    let random = calcRandom(60);
      while (numbers.includes(random))
        random = calcRandom(60);

  numbers.push(random);
  render(random);
  if (numbers.length == 6)
    clearInterval(id);
  }, 1000);
}

function render(number) {
  const div = document.querySelector("div");
  div.innerHTML +=  `${number}`
}