const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://root:admin@todo-api.5iu9y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => console.log("Mongodb connected!")
    ).catch((err) => console.log(err))
}

module.exports = connectToDb