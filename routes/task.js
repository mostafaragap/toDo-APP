
const express = require("express")
const {isAuth} = require("../utils")
const {tasksValidatorsRules ,validate } = require("../validators/userValidator")

const { createTask, getTask, getUserTasks, removeTask, updateTask, getAllTasks } = require("../controllers/taskController")

const tasksRouter= express.Router();

//tasksRouter.use(isAuth)
tasksRouter.get('/allTasks' , getAllTasks)
tasksRouter.get('/mytasks' , getUserTasks )
tasksRouter.route('/:taskId').get(getTask).put(updateTask).delete(removeTask)
tasksRouter.post( '/create',tasksValidatorsRules() , validate, createTask)




module.exports =  tasksRouter ; 