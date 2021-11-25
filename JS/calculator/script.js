function createFormCalculator(types, values) {
  const div = document.querySelector("#calculator");
  const form = document.createElement("form");
  const buttonContainer = document.createElement("div");
  buttonContainer.id = "button-container";
  for (let i = 0; i < values.length; i++) {

    let input = document.createElement("input");
    if (types[i] =="text") {
      input.placeholder = values[i];
      input.value = "0";
    }
    else 
      input.value = values[i];

    form.append(input);
    input.type = types[i];
  }
  div.append(form);
}
function inputsClassification() {
  const inputIDs = ["value1","value2"];
  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    if(
      inputs[i].value == "+" ||
      inputs[i].value == "-" ||
      inputs[i].value == "X" ||
      inputs[i].value == "/"
    )
      inputs[i].className = "operator";
    else if (inputs[i].type == "text"){
      inputs[i].className = "value";
      inputs[i].id = inputIDs[i];
    }
    else if (inputs[i].value != "CE" && inputs[i].value != "=")
      inputs[i].className = "operand";
  }
}
function addOperandsEvents() {
  const operands = document.querySelectorAll(".operand");
  const input = document.querySelector("input");
  for (let i = 0; i < operands.length; i++) {
        operands[i].addEventListener("click", () =>
        {
          input.value += operands[i].value;
        });
  }
}
function addOperatorEvents() {
  const operators = document.querySelectorAll(".operator");
  const input = document.querySelectorAll(".value");
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", () => {
      console.log
    });
  }
}

createFormCalculator(
["text","text","button", "button", "button","button","button", "button","button", "button", "button", "button",
"button", "button", "button", "button", "reset", "submit",],
["valor","valor",'+','-','X', '/','7','8','9','4','5','6','1','2','3','0','CE','=']
);
inputsClassification();
addOperandsEvents();
addOperatorEvents(0);