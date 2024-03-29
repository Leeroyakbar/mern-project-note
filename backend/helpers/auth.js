const bcrypt = require('bcrypt')

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, hash) => {
            if(err){
                reject(err)
            }
            bcrypt.hash(password, hash, (err, hash) => {
                if(err){
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash)
}

module.exports = {hashPassword, comparePassword}