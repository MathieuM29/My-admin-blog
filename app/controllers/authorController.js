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
};

module.exports = authorController;