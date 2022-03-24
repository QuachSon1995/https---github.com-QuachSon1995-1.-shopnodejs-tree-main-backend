const {Sequilize, DataTypes} = require('sequelize')
const db = require('../config/db')

const account = db.define('accounts', {
    id:{type: DataTypes.INTEGER, autoIncrement:true, allowNull:false, primaryKey:true},
    name:{ type: DataTypes.STRING, allowNull:false},
    email:{ type:DataTypes.STRING, allowNull:false},
    password:{type:DataTypes.STRING, allowNull:false}
});
db.sync();
module.exports = account
