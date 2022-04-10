const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        require: true
    },
    check: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model("Task", taskSchema)