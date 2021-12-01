const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Author extends Model {};

Author.init({
    name: DataTypes.TEXT,
    mail: DataTypes.TEXT,
    password: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT
}, {
    sequelize,
    tableName: "author"
});

module.exports = Author;