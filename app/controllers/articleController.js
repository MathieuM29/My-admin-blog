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

    createOne: async (req,res) => {

        try {

            const title = req.body.title;
            const content = req.body.content;
            const image = req.body.image;
            const author_id = req.body.author_id;

            if (!title)
            {
                res.status(400).json('Vous devez renseigner un titre pour votre article !');
            }

            if (!content)
            {
                res.status(400).json('Vous devez renseigner un contenu pour votre article !');
            }

            if (!image)
            {
                res.status(400).json('Vous devez renseigner une image pour votre article !');
            }

            const newArticle = await Article.create({

                title,
                content,
                image,
                author_id
            });

            res.json(newArticle);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },
};

module.exports = articleController;