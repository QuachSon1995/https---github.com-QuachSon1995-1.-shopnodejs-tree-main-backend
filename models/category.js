const {Sequilize, DataTypes} = require('sequelize')
const db = require('../config/db')

const category = db.define('categories', {
    id:{type: DataTypes.INTEGER, autoIncrement:true, allowNull:false, primaryKey:true},
    name:{ type: DataTypes.STRING, allowNull:false},
    parent_id:{ type:DataTypes.STRING, allowNull:false},
});
db.sync();
module.exports = category
