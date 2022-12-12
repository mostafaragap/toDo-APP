
const { addTaskQuery, deleteTaskQuery, getTaskByIdQuery, updateTaskQuery , getUserTasksQuery , getAllTasksQuery} = require("../sevecis/taskService")



const createTask = async (req, res) => {
try {
    const {title , body} = req.body
    const {_id} = req.user
    const task = await addTaskQuery(_id , title ,body )
    return res.status(201).send({task})
} catch (error) {
    return res.status(500).send({message :error.message })
}
}


const removeTask = async (req, res) => {
    try {
        const {taskId} = req.params
        const task = await deleteTaskQuery(taskId)
        if(task == 1) return res.status(200).send({message : "task is deleted successfully"})
        else return res.status(400).send({message : "error while deleting task"})
    } catch (error) {
        return res.status(500).send({message :error.message })
      }
    }


const updateTask  = async (req, res) => {
try {
    const {taskId} = req.params
    const { title , body } = req.body ; 
    const updatedTask  = await updateTaskQuery(taskId, title,body )
    return res.status(200).send({updatedTask})
    } catch (error) {
    return res.status(500).send({message : error.message})
   }
 }

 const getTask  = async (req, res) => {
    try {
        const {taskId} = req.params
        const { _id } = req.user
        const task  = await getTaskByIdQuery(taskId ,_id)
        return res.status(200).send({task})
        } catch (error) {
        return res.status(500).send({message : error.message})
       }
     }


const getUserTasks = async (req, res) => {
    try {
        let { page , pageSize } = req.query;
        const { _id } = req.user
        const userTasks = await getUserTasksQuery(_id, page ,pageSize )
        return res.status(200).send({userTasks})
    } catch (error) {
        return res.status(400).send({message : error.message})
    }
} 

const getAllTasks = async (req, res) => {
    try {
        const {page , pageSize} = req.query 
      
        let pageNum  = +page || 1
        let pageSizes  = +pageSize || 10
        const allTasks = await getAllTasksQuery(pageNum ,pageSizes )
        return res.status(200).send({allTasks})
    } catch (error) {
        return res.status(400).send({message : error.message})
    }
}

module.exports = {createTask,removeTask,updateTask,getTask, getUserTasks, getAllTasks   }