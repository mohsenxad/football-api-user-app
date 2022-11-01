const models = require('../models');
module.exports = function buildCreateUser
(
    dataAccess
)
    {
        return async function createUser
        (
            userInfo
        )
            {
                const user = models.makeUser(userInfo);
                
                const userId = await dataAccess.dataApi.addUser(user);
                
                return userId;
            }
    }