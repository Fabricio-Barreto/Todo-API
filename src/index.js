const express = require('express')
const path = require("path")
const routes = require("../routes/routes")
const cors = require('cors')
const connectToDb = require("../database/db")

connectToDb()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });

const viewsPath = path.join(__dirname, '../templates/views')

app.set("view engine", "ejs")
app.set('views', viewsPath)

app.get('/', cors(), (req, res) => {
    res.render('index', {
 
    })
})     

app.listen(port, () => {
    console.log(`Servidor rodando na Porta ${port}`)
})
