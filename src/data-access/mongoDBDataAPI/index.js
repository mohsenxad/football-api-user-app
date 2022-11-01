var fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

module.exports  = function
(
    APPID,
    APIKEY,
    proxyUrl
)
    {

        if(!APPID){
            throw new Error("MongoDB Data Api must have an APPID");
        }

        if(!APIKEY){
            throw new Error("MongoDB Data Api must have an APIKEY");
        }

        let proxyAgent = undefined;
        if(proxyUrl){
            proxyAgent = new HttpsProxyAgent(proxyUrl);
        }


        const { addUser } = require('./user/add-user')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        );

        const { setTitle } = require('./user/set-title')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )

        return Object.freeze(
            {
                addUser,
                setTitle
            }
        );

    }