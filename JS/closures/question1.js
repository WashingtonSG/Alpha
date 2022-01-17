function createMultiplier(firstFactor) {
  return function multiplyBy(secondFactor) {
    return firstFactor * secondFactor;
  }
}
const multiplyBy5 = createMultiplier(5);
console.log(multiplyBy5(10));
console.log(multiplyBy5(12));
console.log(multiplyBy5(7));