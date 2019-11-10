const dalFunc = require('./dal');
const dal = dalFunc('phones/token.json');
const uuidv4 = require('uuid/v4');

function createToken(newUser, callback) {
    let token = uuidv4();
    newUser.key = token;
    
    dal.saveOne(newUser, function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null, newUser);
        }
    })
}

module.exports.createToken = createToken;