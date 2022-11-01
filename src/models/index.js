const buildMakeUser = require('./user');


const makeUser = buildMakeUser();

module.exports = Object.freeze(
    {
        makeUser
    }
)