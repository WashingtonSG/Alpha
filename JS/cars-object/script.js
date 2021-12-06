function calculateRandom (min, max) {
  return Math.random() * (max-min) + min;
}
function calculateVelocity(minVelocity, maxVelocity, skid) {
  let random = Math.floor(Math.random() * (maxVelocity - minVelocity)) + minVelocity;
  result = random - random * skid/100;
  return result
}

function createCar (chance) {
  if (chance < 0.6) {
    const commonCar = new Object ();
    commonCar.minVelocity = calculateRandom(110,130);
    commonCar.maxVelocity = calculateRandom(180,200);
    commonCar.skid = calculateRandom(3,4);

    commonCar.velocity = calculateVelocity(
      commonCar.minVelocity, 
      commonCar.maxVelocity, 
      commonCar.skid);

    return commonCar;  

  } else  if(chance > 0.6 && chance < 0.95){
    const sportCar = new Object ()
    sportCar.minVelocity =  calculateRandom(125, 145);
    sportCar.maxVelocity =  calculateRandom(195, 215);
    sportCar.skid =  calculateRandom(2, 3);
    sportCar.velocity = calculateVelocity(
      sportCar.minVelocity, 
      sportCar.maxVelocity, 
      sportCar.skid);

    return sportCar;
  }
  else {
    const superSportCar = new Object ();
    superSportCar.minVelocity =  calculateRandom(140, 160);
    superSportCar.maxVelocity =  calculateRandom(210, 230);
    superSportCar.skid =  calculateRandom(1, 1.75);
    
    superSportCar.velocity = calculateVelocity(
      superSportCar.minVelocity, 
      superSportCar.maxVelocity,
      superSportCar.skid);

    return superSportCar;
  }
}
// skid * Math.floor( Math.random() *(maxVelocity - minVelocity)) + minVelocity  )
// i = i + 1


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

    pedro = createCar( Math.random() );
    juca  = createCar( Math.random() );
    edna  = createCar( Math.random() );

    wins[greater([pedro.velocity, juca.velocity, edna.velocity])] +=1;

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
console.log( createCar(Math.random()) );