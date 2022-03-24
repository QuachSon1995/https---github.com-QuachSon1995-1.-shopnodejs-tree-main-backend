const category = require('../models/category')

module.exports = {
    add_category: (data) => {
        console.log()
        return new Promise((resolve, reject) => {
            category.create(data).then(category => resolve(category)).catch(err=>reject(err))
        })
    }, 
    update_category: (data, id) => {
        console.log()
        return new Promise((resolve, reject) => {
            category.update(data,  { where: { id: id } }).then(category => resolve(category)).catch(err=>reject(err))
        })
    }
}