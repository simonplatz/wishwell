const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {hashPassword, comparePassword}



function hashPassword(password){
    const hash = bcrypt.hashSync(password, saltRounds)
    return hash
}

function comparePassword(password, passwordDB){
    const compare = bcrypt.compareSync(password, passwordDB)
    return compare 
}