const EmptyException = require('../Exception/Exception')
const Task = require('../model/Task')
require('../Exception/Exception')

const getAllTask = async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (err) {
        res.status(400).send(err)
    }
}

const createTask = async (req, res) => {
    try {
        const taskList = await Task.find()
        console.log(taskList)
        res.status(200).send(taskList)
    } catch (err) {
        res.status(500).send(err)
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