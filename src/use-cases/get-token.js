module.exports = function buildGetToken
(
    ACCESS_TOKEN_SECRET,
    dataAccess,
    createUser,
    jwt
)
    {
        return async function getToken
        (
            getTokenInfo
        )
            {
                const userId = await createUser(
                    getTokenInfo
                );

                const accessToken = jwt.sign(userId, ACCESS_TOKEN_SECRET);
                
                return accessToken;
            }
    }