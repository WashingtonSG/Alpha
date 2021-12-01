function calculateVelocity(minVelocity, maxVelocity, skid) {
  let random = Math.floor(Math.random() * (maxVelocity - minVelocity)) + minVelocity;
  result = random - random * skid/100;
  return result
}

function greater(array) {
  let result;

  if(array[0] > array[1] && array[0] > array[2])
    result = 0;

  else if (array[1]> array[2])
    result = 1;

  else
    result = 2;

  return result;
}

function race(laps) {
  let wins = [0, 0 ,0]; // pedro, juca amd edna victories
  let pedro, juca, edna;
  for (let i = 0; i < laps; i++) {

    pedro = calculateVelocity(150, 230, 3);
    juca  = calculateVelocity(120, 260, 5);
    edna  = calculateVelocity(180, 220, 1);
    wins[greater([pedro, juca, edna])] +=1;

  }
  return [greater(wins), wins[greater(wins)]]; 
}

function insertion() {
  const laps = document.querySelector('input[name="race"]:checked').value;
  const winner = race(laps)[0];
  const winnerLaps = race(laps)[1];
  const result = document.getElementById("result")
  result.innerHTML = "";
  result.innerHTML = "Você ganhou:"

  if (winner == 0) {
   result.innerHTML += '<span id="winner">Pedro com '
  + winnerLaps + " voltas";
  } 
  else if(winner ==1) {
    result.innerHTML += '<span id="winner">Juca com '
    + winnerLaps + " voltas";
  }
  else {
    result.innerHTML += '<span id="winner">Edna com '
    + winnerLaps + " voltas";
  }
}