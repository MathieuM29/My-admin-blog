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

    updateOne: async (req,res) => {

        try {

            const articleId = Number(req.params.id);
            const article = await Article.findByPk(articleId, {
                include: ['categories'],
                // order: ['id', 'ASC']
            });

            if (!article)
            {
                return res.status(500).json(`Il n'y a pas d'article avec l'id ${articleId}`);
            }

            const title = req.body.title;
            const content = req.body.content;
            const image = req.body.image;
            const author_id = req.body.author_id;

            if (title && content && image && author_id)
            {
                article.title = title;
                article.content = content;
                article.image = image;
                article.author_id = author_id;
            }

            await article.save();

            res.json(article);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },

    deleteOne: async (req,res) => {

        try {

            const articleId = Number(req.params.id);
            const article = await Article.findByPk(articleId, {});

            if (!article)
            {
                return res.status(500).json(`Il n'y a pas d'article avec l'id ${articleId}, je ne peut donc pas le supprimer !`);
            }

            await article.destroy();

            res.json(`L'article avec l'id : ${articleId} à bien été supprimé !`);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },
};

module.exports = articleController;