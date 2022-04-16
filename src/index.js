const express = require('express')
const path = require("path")
const routes = require("../routes/routes")
const cors = require('cors')
const connectToDb = require("../database/db")

connectToDb()
const app = express()
const port = process.env.PORT || 3000
var allowedOrigins = ['http://localhost:3000',
                      'https://todoapiplancto.herokuapp.com/',
                        ]

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)



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
