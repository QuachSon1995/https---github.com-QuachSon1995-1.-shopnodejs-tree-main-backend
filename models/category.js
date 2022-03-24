const {Sequilize, DataTypes} = require('sequelize')
const db = require('../config/db')

const category = db.define('categories', {
    id:{type: DataTypes.INTEGER, autoIncrement:true, allowNull:false, primaryKey:true},
    name:{ type: DataTypes.STRING, allowNull:false},
    parent_id:{ type:DataTypes.INTEGER, allowNull:false, defaultValue:0},
});
db.sync();
module.exports = category
