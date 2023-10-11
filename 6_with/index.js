const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// configurando o handlebars como template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/post", (req, res) => {
  const post = {
    title: "Prender C#",
    category: "C#",
    body: "Este artigo vai te ajudar com a base para programar em C#",
    comments: 4
  }

  res.render("post", { post })
})

app.get("/dashboard", (req, res) => {
  const items = ["Buzzer", "Protoboard", "Resistor"]

  res.render("dashboard", { items });
});

app.get("/", (req, res) => {
  const usuario = {
    nome: "Vivi",
    profissao: "QA",
    idade: 23,
  };

  const auth = true;

  res.render("home", { usuario, auth });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000!");
});
