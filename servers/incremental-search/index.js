const express = require("express");
const app = express();
const PORT = 3000;

const data = require("./public/users.json");

app.use(express.static(__dirname + '/public'))

app.get("/response", (req, res) => {
  const value = Object.values(req.query)[0]
  const key = Object.keys(req.query)[0]
  const response = data.filter(el =>
    el[key].toLowerCase().includes(value.toLowerCase())
  )
 res.send(response)
})
app.listen(PORT, () => console.log(`server listen ${PORT}`));
