const express = require("express");
const app = express();
const PORT = 3000;
const staticPath = __dirname + '/public'
const htmlPath = __dirname+'/public/index.html'
const data = require("./public/users.json");

app.use(express.static(staticPath))

app.use("/", function(req, res, next) {
  res.sendFile(htmlPath);
  next();
});
app.get("/response", (req, res) => {
  const {id, name, email} = req.query;
  let response
  if(name){
    response = data.filter(el => 
      el.name.toLowerCase().includes(name.toLowerCase())
    )
  }
  else if(id) {
    response = data.filter(el => el.id === id)
  }
  else {
    response = data.filter(el =>el.email === email)
  }
  res.send(response)
})
app.listen(PORT, () => console.log(`server listen ${PORT}`));
