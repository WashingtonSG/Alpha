const cars = {
  "popular": {
    "maxVelocity": {
      "min": "180",
      "max": "200"
    },
    "minVelocity": {
      "min": "110",
      "max": "130"
    },
    "skid": {
      "min": "3",
      "max": "4"
    },
    "rarity": "0.6"
  },
  "sport": {
    "maxVelocity": {
      "min": "195",
      "max": "215"
    },
    "minVelocity": {
      "min": "125",
      "max": "145"
    },
    "skid": {
      "min": "2",
      "max": "3"
    },
    "rarity": "0.94"
  },
  "supersport": {
    "maxVelocity": {
      "min": "210",
      "max": "230"
    },
    "minVelocity": {
      "min": "140",
      "max": "160"
    },
    "skid": {
      "min": "1",
      "max": "1.75"
    },
    "rarity": "0.95"
  }
}
const players = [
  {
    player: {
      car: {
       minVelocity: "",
       maxVelocity: "",
       skid: ""
      },

    name: "Pedro",
    experience: "450",
    level : ""
    }
  },
  {
    player: {
      car: {
       minVelocity: "",
       maxVelocity: "",
       skid: ""
      },

      name: "Juca",
      experience: "900000000",
      level: "",
      
    },
  },
  {
    player: {
      car: {
        minVelocity: "",
        maxVelocity: "",
        skid: ""
        },

      name: "Edna",
      experience: "200",
      level: "",
    },
  },


];


function calculateRandom (min, max) {
  return Math.random() * (max-min) + min;
}
function calculateVelocity(minVelocity, maxVelocity, skid) {
  let random = Math.floor(Math.random() * (maxVelocity - minVelocity)) + minVelocity;
  result = random - random * skid/100;
  return result
}

function whichCar (chance) {
  if ( chance < cars.popular.rarity ) {
    return cars.popular;  

  } else  if( chance < cars.sport.rarity ){
    return cars.sport;
  }
  else {
    return cars.supersport;
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

  const wins = [
    {
    name: "Pedro",
    wins: "",
    },

    {
    name: "Juca",
    wins: "",
    },

    {
    name: "Edna",
    wins: "",
    }      
  ];
  let pedro, juca, edna;
  for (let i = 0; i < laps; i++) {

    pedro = whichCar( Math.random() );
    juca  = whichCar( Math.random() );
    edna  = whichCar( Math.random() );

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
      
    wins[ greater([pedroVelocity, jucaVelocity, ednaVelocity]) ].wins += 1 ;

  }
  return wins;
}

function insertion() {
  const laps = document.querySelector('input[name="race"]:checked').value;
  const winner = race(laps)[0];
  const winnerLaps = race(laps)[1];
  const experience = raceExperience(laps);

  const result = document.getElementById("result")
  result.innerHTML = "";
  function experienceUp(item) {
    item.player.experience +=  experience;
  }
  players.forEach(experienceUp)

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

function levelUp (item) {
  item.player.level = Math.floor (item.player.experience/450)
  if(item.player.level > 10)
    item.player.level = 10
  console.log(item.player.level)
}
function raceExperience(laps) {
  if(laps == 10)
    return [200, 120, 50];
  if(laps == 70)
    return [220, 130, 75];
  if(laps == 160)
    return [250, 150, 90];
}
console.log(race(70))