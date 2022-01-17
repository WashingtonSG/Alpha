
 function  getData() {
  const inputValue = document.getElementById("text-input").value;
  const selectValue = document.getElementById("data-type-select").value
  // incrementalSearch(selectValue)
  let formResponse =  fetch(`/response?${selectValue}=${inputValue}`)
  formResponse.then(res => res.json()).then(data => renderData(data))
}

function onInput() {
  if (isValid(textInput.value)) {
    z();
  }
}
function isValid(input){
  if(input.length > 3)
    return true
  else
    return false;
}
function renderData(data) {
  const result = data;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = '';
  result.forEach(el => {
    resultDiv.innerHTML +=
    `<div class= "users">
      id:${el.id} <br/>
      nome: ${el.name} <br/>
      email: ${el.email} <br/>
     </div>`
  });
}
// function incrementalSearch(selectValue) {
//   const timeOutId = setTimeout(getData, 2000);

//   
//   clearInterval(timeOutId)
// }
const debounce = (func, delay) => {
  let debouncing;
  return function() {
    clearTimeout(debouncing)
    debouncing = setTimeout(() => 
    func(), delay)   
  }
}
const z = debounce(getData, 2000)
const textInput = document.getElementById("text-input")
textInput.addEventListener("input", onInput);