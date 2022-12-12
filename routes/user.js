
const express = require("express")
const {isAuth} = require("../utils")
const {userValidationRules , validate} = require("../validators/userValidator")

const { signIn } = require("../controllers/userController")
const userRouter= express.Router();


userRouter.post('/signin' , userValidationRules() ,validate, signIn);



module.exports =  userRouter ;