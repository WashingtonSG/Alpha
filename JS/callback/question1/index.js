function hello(name) {
  const main = document.querySelector("main")
  main.innerHTML = `Hello ${name}`;
}
function callCallback(callback) {
  const name = prompt('What is your name?');
  callback(name);
}

callCallback(hello)