const jwt = require("jsonwebtoken")

exports.generateToken = (user) =>{
    return jwt.sign({
        _id:user._id , 
    } , process.env.JWT_SECRET  , {
        expiresIn: '30d',
    })
}

exports.isAuth = (req, res , next)=>{
    const authorization = req.headers.authorization ; 
    if(authorization){
      
        const token = authorization.slice(7 , authorization.length);
        jwt.verify(
            token , 
            process.env.JWT_SECRET , 
            (err , decode) =>{
                if(err){
                    res.status(401).send({message:"invalid Token"});
                }else
                {
                    req.user = decode;
                    next();
                }
            }
        );
    }else{
        res.status(401).send({message: 'sorry user is not authenticated'});
    }
}

