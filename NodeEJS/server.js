const express = require('express');
const app = express();
const port = 8080;

app.set("view engine","ejs");

app.get("/",function(req, res){
  const items = [
    {
      title:"D", 
      message: "esenvolver aplicações/serviços de forma fácil"
    },
    {
      title:"E", 
      message: "JS usa JavaScript para renderizar HTML"
    },
    {
      title:"M", 
      message: "uito fácil de usar"
    },
    {
      title:"A", 
      message: "morzinho"
    },{
      title:"I", 
      message: "nstall ejs"
    },{
      title:"S", 
      message: "intaxe simples"
    }
  ]

  const subTitle = "Uma linguagem de modelagem para criação de página HTML"
  res.render("pages/index",{
    qualitys: items,
    subTitle: subTitle
  })
})

app.get("/sobre",function(req, res){
  res.render("pages/about")
})

app.listen(port)
console.log("Rodando")