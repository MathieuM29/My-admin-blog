const sequelize = require('../database');
const { Article } = require('../models');

const articleController = {

    getAll: async (req, res) => {

        try {

            const articles = await Article.findAll({
                include: ['categories'],
                // order: ['id', 'ASC']
            });

            res.json(articles);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },

    getOne: async (req,res) => {

        try {

            const articleId = Number(req.params.id);

            const article = await Article.findByPk(articleId, {
                include: ['categories'],
                // order: ['id', 'ASC']
            });

            res.json(article);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },
};

module.exports = articleController;