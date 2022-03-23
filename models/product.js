const {Sequilize, DataTypes} = require('sequelize')
const db = require('../config/db')

const category = db.define('categories', {
    id:{type: DataTypes.INTEGER, autoIncrement:true, allowNull:false, primaryKey:true},
    title:{ type: DataTypes.STRING, allowNull:false},
    slug:{ type: DataTypes.STRING, allowNull:false},
    price:{ type: DataTypes.INTEGER, allowNull:false},
    image:{ type: DataTypes.STRING, allowNull:false},
    description:{ type: DataTypes.STRING, allowNull:false},
    content:{ type: DataTypes.STRING, allowNull:false},
    name:{ type: DataTypes.STRING, allowNull:false},
    status:{ type: DataTypes.STRING, allowNull:false},
    category_id:{ type:DataTypes.STRING, allowNull:false},
});
db.sync();
module.exports = category
