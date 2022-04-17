const EmptyException = require('../Exception/Exception')
const Task = require('../model/Task')
require('../Exception/Exception')

const getAllTask = async (req, res) => {
    try {
        var limit
        if(!req.query.limit) {
            limit = 5
        } else {
            limit = req.query.limit
        }
        const taskList = await Task.find().skip(req.query.page * limit).limit(limit)
        console.log(limit)
        res.status(200).send(taskList)
    } catch (err) {
        res.status(500).send(err)
    }
}

const createTask = async (req, res) => {

    req.body.date = new Date(Date.now())
    req.body.updated_at = new Date(Date.now())

    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (err) {
        res.status(400).send(err)
    }
}

const getById = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id})
        res.status(200).send(task) 
    } catch (err) {
        res.status(500).send(err)
    }
}

const updateOneTask = async (req, res) => {
    try {
        const task = req.body
    
        req.body.updated_at = new Date(Date.now())

        await Task.updateOne({ _id: req.params.id}, task)
        
        res.status(200).send(task) 
    } catch (err) {
        res.status(500).send(err)
    }
}

const deleteOneTask = async (req, res) => {
    try {
        await Task.deleteOne({ _id: req.params.id})
        res.status(200).send("Task Deleted")
    } catch (err) {
        res.status(500).send(err)
    }
}

const taskCheck = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id})

        task.check ? task.check = false : task.check = true

        await Task.updateOne({ _id: req.params.id}, task)

        res.status(200).send(task)
    } catch (err) {
        res.status(500).send(err)
    }
}



module.exports = {
    getAllTask,
    createTask,
    getById,
    updateOneTask,
    deleteOneTask,
    taskCheck

}