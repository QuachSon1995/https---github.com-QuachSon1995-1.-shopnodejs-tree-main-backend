const account = require('../models/account')
module.exports = {
    check_info: () => {
        return new Promise((resolve, reject) => {
            account.check_info({ raw: true }).then(account => resolve(account))
        })
    }
}