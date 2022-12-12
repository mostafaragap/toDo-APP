const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const taskSchema = new Schema({
  author: {type: mongoose.Schema.Types.ObjectId,ref:'User'},
  title: {type:String , required:true},
  body: {type:String , required:true},
},
{
    timeStamp : true
});
const Task = mongoose.model('Task', taskSchema);

module.exports = {Task}