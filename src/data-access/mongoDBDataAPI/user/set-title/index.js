const buildTranslateSetTitleResponse = require('./src/translate-set-title-response');
const buildCreateSetTitleRequest = require('./src/create-set-title-request');
const buildSetTitle = require('./src/set-title');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateSetTitleResponse = buildTranslateSetTitleResponse();
        const createSetTitleRequest = buildCreateSetTitleRequest(
            APIKEY,
            proxyAgent
        );
        const setTitle = buildSetTitle(
            APPID,
            fetch,
            createSetTitleRequest,
            translateSetTitleResponse
        );

        return Object.freeze(
            {
                setTitle
            }
        )
    }