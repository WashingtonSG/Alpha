let purchases = [];


function getValues() {
  const name = document.getElementById("name");
  const dueDate = document.getElementById("due-date");
  const purchase = document.getElementById("purchase");
  purchases.push(
    ({
      "name": name.value,
      "dueDate": dueDate.value,
      "purchase": purchase.value
    })
  );
  name.value = '';
  dueDate.value= '';
  purchase.value = '';
  createTable()
}

function createTable() {
  let table = '';
  const tableBody = document.getElementById("tbody");
  
    purchases.forEach(item => 
    table += "<tr>"+
    `<td>${item.name}</td>` +
    `<td>${item.dueDate}</td>` +
    `<td>${item.purchase}</td>`+
    `<td>${item.fee || ''}</td>`+
    "</tr>"
    );
  tableBody.innerHTML = table;
}
function calculateFees() {
  const now = new Date().getTime();
  purchases = purchases.map(item => {
    let dueDate = new Date(item.dueDate).getTime();
    let period = ( now - dueDate) / (24 * 3600 * 1000);
    let fee = (0.02 + period * item.purchase * 0.001);
    if(now > dueDate) {
      return {
        "name": item.name,
        "dueDate": item.dueDate,
        "purchase": item.purchase,
        "fee": Math.floor(fee * 100) / 100
      }
  }
    else {
      return {
        "name": item.name,
        "dueDate": item.dueDate,
        "purchase": item.purchase
      }
    }
  });
  createTable()
}
