const sequelize = require('../database');
const { Author } = require('../models');

const authorController = {

    getAll: async (req, res) => {

        try {

            const authors = await Author.findAll({
                include: { association: 'articles', include: ['categories']}
            });

            res.json(authors);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },

    getOne: async (req,res) => {

        try {

            const authorId = Number(req.params.id);

            const author = await Author.findByPk(authorId, {
                include: { association: 'articles', include: ['categories']},
                // order: ['id', 'ASC']
            });

            res.json(author);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },

    createOne: async (req,res) => {

        try {

            const name = req.body.name;
            const mail = req.body.mail;
            const password = req.body.password;
            const description = req.body.description;
            const image = req.body.image;

            if (!name)
            {
                res.status(400).json('Vous devez renseigner un nom pour votre profil !');
            }

            if (!mail)
            {
                res.status(400).json('Vous devez renseigner une adresse e-mail pour votre profil !');
            }

            if (!password)
            {
                res.status(400).json('Vous devez renseigner un mot de passe pour votre profil !');
            }

            if (!description)
            {
                res.status(400).json('Vous devez renseigner une description pour votre profil !');
            }

            if (!image)
            {
                res.status(400).json('Vous devez renseigner une image pour votre article !');
            }

            const newAuthor = await Author.create({

                name,
                mail,
                password,
                description,
                image
            });

            res.json(newAuthor);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },

    updateOne: async (req,res) => {

        try {

            const authorId = Number(req.params.id);
            const author = await Author.findByPk(authorId, {
                include: ['categories'],
                // order: ['id', 'ASC']
            });

            if (!author)
            {
                return res.status(500).json(`Il n'y a pas d'auteur avec l'id ${authorId}`);
            }

            const name = req.body.name;
            const mail = req.body.mail;
            const password = req.body.password;
            const description = req.body.description;
            const image = req.body.image;

            if (name && mail && password && description && image)
            {
                author.name = name;
                author.mail = mail;
                author.password = password;
                author.description = description;
                author.image = image;
            }

            await author.save();

            res.json(author);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },

    deleteOne: async (req,res) => {

        try {

            const authorId = Number(req.params.id);
            const author = await Author.findByPk(authorId, {});

            if (!author)
            {
                return res.status(500).json(`Il n'y a pas d'auteur avec l'id ${authorId}, je ne peut donc pas le supprimer !`);
            }

            await author.destroy();

            res.json(`L'auteur avec l'id : ${authorId} à bien été supprimé !`);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },
};

module.exports = authorController;