function multiply(_param1, _param2, _param3, _param4) {
  const result = _param1 * _param2 * _param3 * _param4;
  return result
}
const numbers = [1,2,3,4]
console.log(multiply(...numbers))

//
function concat(_param1, _param2) {
  const result = [..._param1, ..._param2]
  return result
}

const string1 = "Javascript ";
const string2 = "nodeJS"
console.log(concat(string1,string2))

function randomNumbers() {
  const randomNumbers = [];
  for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 101);
    randomNumbers.push(randomNumber)
  }
  return randomNumbers
}
console.log(randomNumbers())
console.log( Math.min(...randomNumbers()) )