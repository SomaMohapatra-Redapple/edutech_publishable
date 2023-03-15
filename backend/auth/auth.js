
    const checkToken = (req,res,next) => {
        const bearerHeader = req.headers["authorization"];
        if(typeof bearerHeader !=='undefined'){
            const bearer = bearerHeader.split("");
            const token = bearer[1];
            req.token = token;
            next();

        }else{
            res.json({
                success : 0,
                message : "Access denied ! unauthorized user"
                
            })
            next();
        }

        

    }

    module.exports = checkToken;
