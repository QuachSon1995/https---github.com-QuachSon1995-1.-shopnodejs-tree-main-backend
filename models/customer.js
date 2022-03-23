const {Sequilize, DataTypes} = require('sequelize')
const db = require('../config/db')

const customer = db.define('customers', {
    id:{type: DataTypes.INTEGER, autoIncrement:true, allowNull:false, primaryKey:true},
    name:{ type: DataTypes.STRING, allowNull:false},
    phone:{ type:DataTypes.INTEGER, allowNull:false},
    email:{ type:DataTypes.STRING, allowNull:false},
    address:{ type:DataTypes.STRING, allowNull:false},
    password:{type:DataTypes.STRING, allowNull:false}
});
db.sync();
module.exports = customer
