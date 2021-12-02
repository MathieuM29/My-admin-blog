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
};

module.exports = authorController;