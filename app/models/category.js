const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Category extends Model {};

Category.init({
    name: DataTypes.TEXT,
    color: DataTypes.TEXT,
}, {
    sequelize,
    tableName: "category"
});

module.exports = Category;