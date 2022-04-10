const router = require("express").Router()
const TaskController = require("../controller/TaskController")

router.get('/api/v1/tasks', TaskController.getAllTask)
router.post('/api/v1/tasks', TaskController.createTask)
router.get("/api/v1/getById/:id", TaskController.getById)
router.post("/api/v1/updateOne/:id", TaskController.updateOneTask)
router.get("/api/v1/deleteOne/:id", TaskController.deleteOneTask)
router.get("/api/v1/check/:id", TaskController.taskCheck)


module.exports = router