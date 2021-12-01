const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Article extends Model {};

Article.init({
    title: DataTypes.TEXT,
    content: DataTypes.TEXT,
    image: DataTypes.TEXT,
    author_id: DataTypes.INTEGER
}, {
    sequelize,
    tableName: "article"
});

module.exports = Article;