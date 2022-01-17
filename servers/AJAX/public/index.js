// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.responseType = "json";

//   xhttp.onload = function () {
//     const response = Array.from(this.response);
//     const id = document.getElementById("id-input").value;
//     document.getElementById("result").innerHTML = '';
//     let result = response.filter( el => el.id == id)
//     if(result.length > 0)
//       result.forEach(el => {
//         document.getElementById("result").innerHTML += 
//         `</br> id do produto: ${el.id} <br/>
//         nome do produto: ${el.nome}`
//       });
//     else
//     document.getElementById("result").innerHTML = `Não existem produtos com o id ${id} `
//   } 

//   xhttp.open("GET", "products.json", true);
//   xhttp.send();
// }
const products = 
[
  {
    "id": "1",
    "nome": "Produto A"
  },
  {
    "id": "3",
    "nome": "Produto B"
  },
  {
    "id": "6",
    "nome": "Produto C"
  },
  {
    "id": "3",
    "nome": "Produto D"
  },
  {
    "id": "1",
    "nome": "Produto E"
  },
  {
    "id": "3",
    "nome": "Produto F"
  },
  {
    "id": "6",
    "nome": "Produto G"
  },
  {
    "id": "3",
    "nome": "Produto H"
  },
  {
    "id": "1",
    "nome": "Produto I"
  },
  {
    "id": "3",
    "nome": "Produto J"
  },
  {
    "id": "6",
    "nome": "Produto K"
  },
  {
    "id": "3",
    "nome": "Produto L"
  },
  {
    "id": "1",
    "nome": "Produto M"
  },
  {
    "id": "3",
    "nome": "Produto N"
  },
  {
    "id": "6",
    "nome": "Produto O"
  },
  {
    "id": "3",
    "nome": "Produto P"
  },
  {
    "id": "1",
    "nome": "Produto Q"
  },
  {
    "id": "3",
    "nome": "Produto R"
  },
  {
    "id": "6",
    "nome": "Produto S"
  },
  {
    "id": "3",
    "nome": "Produto T"
  },
  {
    "id": "1",
    "nome": "Produto U"
  },
  {
    "id": "3",
    "nome": "Produto V"
  },
  {
    "id": "6",
    "nome": "Produto W"
  },
  {
    "id": "3",
    "nome": "Produto X"
  },
  {
    "id": "6",
    "nome": "Produto Y"
  },
  {
    "id": "3",
    "nome": "Produto Z"
  },
]
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  const id = document.getElementById("id-input").value;

  xhttp.onload = function() {
    const result = document.getElementById("result");
    const num = parseInt(this.responseText);
    console.log(this.responseText)
    const response = products.filter(el => el.id == num)
    result.innerHTML = '';
    if(response.length == 0 && Number.isInteger(num))
      result.innerHTML = '<h2> Não existe produtos com esse id </h2>';
    else if(!Number.isInteger(num))
      return false;
    else{
      response.forEach(el => {
            result.innerHTML += `
            <div class="products">
            id:${el.id} <br/> nome:${el.nome} <br />
            </div>`
          });
        }
    }
  xhttp.open("GET", `/result?id=${id}`, true);
  xhttp.send();
}