function createForm(types, placeholders) {
  const form = document.querySelector("form");
  const buttonContainer = document.createElement("div");
  buttonContainer.id = "button-container";
  for (let i = 0; i < types.length; i++) {

    let input = document.createElement("input");
    input.type = types[i];
    input.placeholder = placeholders[i];

    if(types[i] == "submit" || types[i] == "reset") {
      input.value = placeholders[i];
      input.className = "input-button";
      buttonContainer.append(input);
      form.append(buttonContainer);
      if (types[i] == "submit")
        input.onclick = "() => console.log('hello')";
    }
    
    
    else {
      input.name = placeholders[i];
      input.className = "input-text"
      form.append(input);
    }
  }
}
function getForm() {
  const form = new FormData(document.querySelector('form'));
  console.log(form);

}


title = document.getElementById("title");
title.innerHTML = "Faça o seu Mapa astral"
createForm(
  ["text", "date","time","text","numeric","numeric", "numeric","reset","submit"],
["nome","Mês de nascimento","hora de nascimento", "signo","CPF", "numero do cartão", "CVV","resetar","enviar"]
);
