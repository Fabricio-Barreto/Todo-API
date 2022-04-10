const express = require('express')
const Task = require('../model/Task')
const router = require("express").Router()

router.post('/tasks', async (req, res) => {  
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const taskList = await Task.find()
        console.log(taskList)
        res.status(200).send(taskList)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router