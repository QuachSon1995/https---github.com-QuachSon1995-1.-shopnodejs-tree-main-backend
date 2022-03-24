const account = require('../models/account')
module.exports = {
    check_info: (email) => {
        return new Promise((resolve, reject) => {
            account.findOne({ where: {email: email} }).then(account => resolve(account)).catch(err=>reject(err))
        })
    },
    addAccount: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            account.create(data).then(account => resolve(account)).catch(err=>reject(err))
        })
    }
}