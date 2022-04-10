const router = require("express").Router()
const TaskController = require("../controller/TaskController")

router.get('/tasks', TaskController.getAllTask)
router.post('/tasks', TaskController.createTask)
router.get("/getById/:id", TaskController.getById)
router.post("/updateOne/:id", TaskController.updateOneTask)
router.get("/deleteOne/:id", TaskController.deleteOneTask)
router.get("/check/:id", TaskController.taskCheck)


module.exports = router