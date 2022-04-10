const express = require('express')
const path = require("path")
const taskRouter = require("../routes/TaskRoutes")
const connectToDb = require("../database/db")

connectToDb()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(taskRouter)

const viewsPath = path.join(__dirname, '../templates/views')

app.set("view engine", "ejs")
app.set('views', viewsPath)

app.get('/', (req, res) => {
    res.render('index', {
 
    })
})     

app.listen(port, () => {
    console.log(`Servidor rodando na Porta ${port}`)
})