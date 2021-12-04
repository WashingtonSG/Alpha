let turn = 0;

function fillDiv(id) {
  const button = document.getElementById(id);
  button.value = letterXandO()
}
function letterXandO() {
  let letter;

  if (turn) {
    letter = "X";
    turn = 0;

  } else {
    letter = "O";
    turn = 1;
  }
  return letter;
}

function winner() {
  const boxes = document.querySelectorAll(".box")
  boxes.forEach(element => {
    console.log(element.value)
  });
  console.log(boxes)
}
