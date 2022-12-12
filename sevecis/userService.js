const { User } = require("../models/userModel")
var bcrypt = require('bcryptjs');
const { generateToken } = require("../utils")


const login = async (email , password ) => {
    try {
        const findUser = await User.findOne({ email }) 
         if( findUser ){
         const isPasswordValid = bcrypt.compareSync( password, hash);
         if(isPasswordValid){
            var token = generateToken(findUser) 
            const user = {email :findUser.email , userName : findUser.userName , token}
            return user
         }
         throw new Error("sorry email Or password is not valid ")
        }
        throw new Error("sorry user is Not Found ")
    } catch (error) {
        throw new Error(error.message)
    }

}

module.exports = {login}