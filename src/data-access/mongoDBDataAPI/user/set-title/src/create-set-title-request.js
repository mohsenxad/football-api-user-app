module.exports = function buildCreateSetTitleRequest
(
    apikey,
    proxyAgent
)
    {
        return function createSetTitleRequest
        (
            userId,
            title
        )
            {
                const query = {
                    "_id": 
                        { 
                            "$oid": userId
                        } 
                };

                const update = {
                    "$set": {
                        title: title
                    }
                };

                const headers = {
                    "api-key": apikey,
                    "content-type":"application/json"
                };

                const body = JSON.stringify(
                    {
                        collection:"users",
                        database:"Football",
                        dataSource:"FootballDB",
                        filter: query,
                        update: update
                    }
                );

                var options= {
                    method:"POST",
                    headers: headers,
                    body: body
                };

                if(proxyAgent){
                    options.agent = proxyAgent;
                }
        
        
                return options;
            }
    }