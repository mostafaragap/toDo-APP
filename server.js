const express = require("express")
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');
require('dotenv').config()
const app = new express()


app.use(express.json())

app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);


const PORT = process.env.PORT || 3000
app.listen(PORT , () => { 
    console.log(`app is running at port ${PORT}`);
})