const { Task } = require("../models/taskModel")

const addTaskQuery = async (author , title , body ) => {
    try {
        const task = await Task.create({author ,title , body })
        if(task){
            return task
        }
        throw new Error("Sorry Error while adding task")
    } catch (error) {
        throw new Error(error.message)
    }

}

const getTaskByIdQuery = async (taskId , userId) => {
    try {
        const task = await Task.findOne({_id :taskId , author:userId})
        if(task) return task
        else throw new Error("sorry task is not found")
    } catch (error) {
        throw new Error(error.message)
    }
}

const getUserTasksQuery = async (userId , page=1 , pageSizes =10 ) => {
    try {
        const tasks = await Task.find({author :userId})
        .skip(pageSizes * (page - 1))
        .limit(pageSizes)

        if(tasks) return tasks
        else throw new Error("sorry task is not found")
    } catch (error) {
        throw new Error(error.message)
    }
}

const deleteTaskQuery = async (taskId) => {
    try {
        const deletedTask = await Task.deleteOne({ _id: taskId });
        if(deletedTask) return 1
        else throw new Error("sorry Error while deleting a task") 
    } catch (error) {
        throw new Error(error.message)
    }
}

const updateTaskQuery = async ( taskId ,title , body) => {
 try {
    const updatedTask = await Task.findOneAndUpdate({ _id: taskId} , {title , body} ,{new : true ,  runValidators :true})
    if(updatedTask) return updatedTask
    else throw new Error("sorry Error while updating a task")  
 } catch (error) {
    throw new Error(error.message)
 }
}


module.exports = {addTaskQuery ,getTaskByIdQuery , getUserTasksQuery , deleteTaskQuery, updateTaskQuery }