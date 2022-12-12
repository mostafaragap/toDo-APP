const {login }  = require("../sevecis/userService")

const signIn = async (req, res) => {
    try {
     const { email, password} = req.body ; 
    const user = await login(email , password)
    return res.status(200).send({user})    
    } catch (error) {
        return res.status(400).send({message : error.message})
    }
}


module.exports = {signIn}
