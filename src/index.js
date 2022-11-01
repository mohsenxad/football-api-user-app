const userServices = require('./use-cases')(
    {
        MONGODB_DATAAPI_APPID: process.env.MONGODB_DATAAPI_APPID,
        MONGODB_DATAAPI_APIKEY: process.env.MONGODB_DATAAPI_APIKEY
    },
    process.env.PROXY_URL,
    {
        ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
        REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET
    }
);

module.exports = userServices;