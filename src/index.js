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

app.listen(port, () => {
    console.log(`Servidor rodando na Porta ${port}`)
})