function fillDiv(id) {
  const div = document.getElementById(id);

  div.innerHTML = '';
  div.append(letterXandO());
  div.value = letterXandO();

}
function letterXandO() {
  const letter = document.createElement("span");
  if (turn) {
    letter.innerHTML = "O";

  } else {
    letter.innerHTML = "X";
  }
  return letter;
}

function winner() {
  const boxes = document.querySelector(".box");

}