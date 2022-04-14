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
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']

}))

app.options('/api/v1/tasks', cors ())
app.post('/api/v1/tasks', cors (), function(req, res, next) {
    res.json({msg: 'this is CORS DE CORNO.'})
})

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
