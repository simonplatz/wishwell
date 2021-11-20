const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {hashPassword, comparePassword}


//Hashes a given password based on the saltRounds(cost factor) 
function hashPassword(password){
    const hash = bcrypt.hashSync(password, saltRounds)
    return hash
}

//Compares a given password, with an encrypted password from the database
function comparePassword(password, passwordDB){
    const compare = bcrypt.compareSync(password, passwordDB)
    return compare 
}