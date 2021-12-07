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
    commonCar.minVelocity = {min: 110, max: 130};
    commonCar.maxVelocity = {min: 180, max: 200};
    commonCar.skid = {min: 3,max:4};
    return commonCar;  

  } else  if(chance > 0.6 && chance < 0.95){
    const sportCar = new Object ()
    sportCar.minVelocity =  {min: 125, max: 145};
    sportCar.maxVelocity =  {min: 195, max: 215};
    sportCar.skid =  {min: 2, max: 3};
    return sportCar;
  }
  else {
    const superSportCar = new Object ();
    superSportCar.minVelocity =  {min:140, max: 160};
    superSportCar.maxVelocity =  {min:210, max: 230};
    superSportCar.skid =  {min: 1, max: 1.75};
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

    pedroVelocity = calculateVelocity(
      calculateRandom(pedro.minVelocity.min, pedro.minVelocity.max),
      calculateRandom(pedro.maxVelocity.min, pedro.maxVelocity.max),
      calculateRandom(pedro.skid.min, pedro.skid.max)
      );

    jucaVelocity = calculateVelocity(
      calculateRandom(juca.minVelocity.min, juca.minVelocity.max),
      calculateRandom(juca.maxVelocity.min, juca.maxVelocity.max),
      calculateRandom(juca.skid.min, juca.skid.max)
      );

    ednaVelocity = calculateVelocity(
      calculateRandom(edna.minVelocity.min, edna.minVelocity.max),
      calculateRandom(edna.maxVelocity.min, edna.maxVelocity.max),
      calculateRandom(edna.skid.min, edna.skid.max)
      );
      
    wins[ greater([pedroVelocity, jucaVelocity, ednaVelocity]) ] +=1;

  }
  return [greater(wins), wins[greater(wins)]]; 
}

function insertion() {
  const laps = document.querySelector('input[name="race"]:checked').value;
  const winner = race(laps)[0];
  const winnerLaps = race(laps)[1];
  const result = document.getElementById("result")
  result.innerHTML = "";

  if (winner == 0) {
   result.innerHTML += '<span id="winner">Pedro ganhou com '
  + winnerLaps + " voltas";
  } 
  else if(winner ==1) {
    result.innerHTML += '<span id="winner">Juca ganhou com '
    + winnerLaps + " voltas";
  }
  else {
    result.innerHTML += '<span id="winner">Edna ganhou com '
    + winnerLaps + " voltas";
  }
}
console.log( createCar(Math.random()) );