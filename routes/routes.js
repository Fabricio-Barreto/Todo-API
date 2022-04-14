const router = require("express").Router()
const cors = require ('cors')
const TaskController = require("../controller/TaskController")

router.get('/api/v1/tasks', cors (), TaskController.getAllTask)
router.post('/api/v1/tasks', cors (), TaskController.createTask)
router.get("/api/v1/getById/:id", cors (), TaskController.getById)
router.post("/api/v1/updateOne/:id", cors (), TaskController.updateOneTask)
router.get("/api/v1/deleteOne/:id", cors (), TaskController.deleteOneTask)
router.get("/api/v1/check/:id", cors (), TaskController.taskCheck)


module.exports = router