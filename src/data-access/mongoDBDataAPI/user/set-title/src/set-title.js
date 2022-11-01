module.exports = function buildSetTitle
(
    APPID,
    fetch,
    createSetTitleRequest,
    translateSetTitleResponses
)
    {
        return async function setTitle
        (
            userId,
            title
        )
            {
                const options = createSetTitleRequest(
                    userId,
                    title
                );

                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/updateOne`;

                const request = await fetch(
                    url,
                    options
                );

                const response = await request.json();

                const result = translateSetTitleResponses(response);
                
                return result;
            }
    }