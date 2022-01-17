async function  getData() {
  const id = document.getElementById("input-id").value;
  const name = document.getElementById("input-name").value;
  const email = document.getElementById("input-email").value;

  let formResponse = await fetch(`/response?id=${id}&name=${name}&email=${email}`)

  formResponse = await formResponse.json();
  renderData(Array.from(formResponse))
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