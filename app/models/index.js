const Article = require('./article');
const Author = require('./author');
const Category = require('./category');

Author.hasMany(Article, {
    as: 'articles',
    foreignKey: 'author_id'
});

Article.belongsTo(Author, {
    as: 'author',
    foreignKey: 'author_id'
});


Article.belongsToMany(Category, {
    as: 'categories',
    through: 'article_has_category',
    foreignKey: 'article_id',
    otherKey: 'category_id',
    timestamps: false,
});

Category.belongsToMany(Article, {
    as: 'articles',
    through: 'article_has_category',
    foreignKey: 'category_id',
    otherKey: 'article_id',
    timestamps: false,
});

module.exports = { Article, Author, Category };