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
    category: {
        type: String,
        require: true
    },
    check: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        
    },
    updated_at: {
        type: Date,
        default: 0,
    }
})

module.exports = mongoose.model("Task", taskSchema)