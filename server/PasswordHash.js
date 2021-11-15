const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {hashPassword, comparePassword}



function hashPassword(password){
    const hash = bcrypt.hashSync(password, saltRounds)
    return hash
}

function comparePassword(password, hashedPassword){
    if (bcrypt.compareSync(password, hashedPassword) == true) {
        return true
    } else {
        return false
    }
    

}