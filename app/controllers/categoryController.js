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

    createOne: async (req,res) => {

        try {

            const name = req.body.name;
            const color = req.body.color;

            if (!name)
            {
                res.status(400).json('Vous devez renseigner un nom pour votre categorie !');
            }

            if (!color)
            {
                res.status(400).json('Vous devez renseigner une couleur pour votre categorie !');
            }


            const newCategory = await Category.create({

                name,
                color
            });

            res.json(newCategory);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },

    updateOne: async (req,res) => {

        try {

            const categoryId = Number(req.params.id);
            const category = await Category.findByPk(categoryId, {});

            if (!category)
            {
                return res.status(500).json(`Il n'y a pas d'auteur avec l'id ${authorId}`);
            }

            const name = req.body.name;
            const color = req.body.color;

            if (name && color)
            {
                category.name = name;
                category.color = color;
            }

            await category.save();

            res.json(category);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },

    deleteOne: async (req,res) => {

        try {

            const categoryId = Number(req.params.id);
            const category = await Category.findByPk(categoryId, {});

            if (!category)
            {
                return res.status(500).json(`Il n'y a pas de catégorie avec l'id ${categoryId}, je ne peut donc pas la supprimer !`);
            }

            await category.destroy();

            res.json(`La catégorie avec l'id : ${categoryId} à bien été supprimée !`);

            
        } catch (error){
           console.trace(error);
           res.status(500).json(error.toString()); 
        }
    },
};

module.exports = categoryController;