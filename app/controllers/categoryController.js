const sequelize = require('../database');
const { Category } = require('../models');

const categoryController = {

    getAll: async (req, res) => {

        try {

            const categories = await Category.findAll({});

            res.json(categories);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },

    getOne: async (req,res) => {

        try {

            const categoryId = Number(req.params.id);

            const category = await Category.findByPk(categoryId, {});

            res.json(category);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },
};

module.exports = categoryController;