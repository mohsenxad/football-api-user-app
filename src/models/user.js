module.exports = function buildMakeUser
()
    {
        return function makeUser
        (
            {
                registerDate = Date.now(),
                deviceId
            }
        )
            {
                return Object.freeze(
                    {
                        getRegisterDate: () => registerDate,
                        getDeviceId: () => deviceId,
                        toBson: toBson,
                    }
                );

                function toBson(){
                    return {
                        registerDate : {
                            "$date": {
                                "$numberLong": registerDate.toString()
                                }
                        },
                        deviceId: deviceId
                    }
                }
            }
    }