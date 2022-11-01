module.exports = function buildSetTitle
(
    dataAccess
)
    {
        return async function setTitle
        (
            userId,
            title
        )
            {

                const updateResult  = await dataAccess.dataApi.setTitle(
                    userId,
                    title
                )

                return updateResult;
                
            }
    }