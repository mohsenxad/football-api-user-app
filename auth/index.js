var jwt = require('jsonwebtoken');
module.exports = function(
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET
){
    
    function chechAuth(req,res,next){
        const accessToken = req.headers.token || req.params.token;
        if(accessToken)
            {
                jwt.verify(
                    accessToken,
                    ACCESS_TOKEN_SECRET,
                    (err, user) =>
                        {
                            if(err)
                                {
                                    console.log(err);
                                    res.status(403)
                                        .json(
                                            {
                                                message: 'Access Denied.Error'
                                            }
                                        );
                                }
                            else
                                {
                                    req.user = user 
                                    next();
                                }
                        }
                )
            }
        else
            {
                res.status(403)
                    .json(
                        {
                            message: 'Access Denied.Login Again!'
                        }
                    );
            }
    }

    return Object.freeze(
        {
            chechAuth
        }
    )
}