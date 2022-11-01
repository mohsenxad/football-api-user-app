var jwt = require('jsonwebtoken');
const buildCreateUser = require('./create-user');
const buildGetToken = require('./get-token');
const buildSetTitle = require('./set-title');

module.exports = function(
    {
        MONGODB_DATAAPI_APPID,
        MONGODB_DATAAPI_APIKEY
    },
    proxyUrl,
    {
        ACCESS_TOKEN_SECRET,
        REFRESH_TOKEN_SECRET
    }
    
)
    {
        const dataAccess = require('../data-access')(
            {
                MONGODB_DATAAPI_APPID,
                MONGODB_DATAAPI_APIKEY
            },
            proxyUrl
        );

        const createUser = buildCreateUser(dataAccess);
        const getToken = buildGetToken(
            ACCESS_TOKEN_SECRET,
            dataAccess,
            createUser,
            jwt
        );
        const setTitle = buildSetTitle(dataAccess)
        

        const services =  Object.freeze(
            {
                setTitle,
                getToken,
            }
        );

        return services;
    }