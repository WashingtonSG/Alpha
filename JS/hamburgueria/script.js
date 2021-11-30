function calculatePrice() {
  const inputs = document.querySelectorAll("input");

  let price = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      price += parseFloat(inputs[i].value);
    }
  }
  document.getElementById("result").innerHTML = String(price);
}
