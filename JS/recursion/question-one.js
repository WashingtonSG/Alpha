function factorial(_number) {
  const number = _number;

  if(number < 0){
    console.error("TEM QUE SER POSITIVO FILHA DA PUTA")
    return false;
  }
  if(!number)
    return 1

  else
    return number * factorial(number-1)
}

console.log(factorial(1))