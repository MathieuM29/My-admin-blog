const express = require('express');
const router = express.Router();

const articleController = require('./controllers/articleController');
const authorController = require('./controllers/authorController');
const categoryController = require('./controllers/categoryController');

//méthodes pour les articles
router.get('/articles', articleController.getAll);
router.get('/articles/:id', articleController.getOne);

//méthodes pour les auteurs
router.get('/authors', authorController.getAll);
router.get('/authors/:id', authorController.getOne);

//méthodes pour les categories
router.get('/categories', categoryController.getAll);
router.get('/categories/:id', categoryController.getOne);

module.exports = router;