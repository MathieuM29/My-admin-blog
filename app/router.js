const express = require('express');
const router = express.Router();

const articleController = require('./controllers/articleController');
const authorController = require('./controllers/authorController');
const categoryController = require('./controllers/categoryController');

//méthodes pour les articles
router.get('/articles', articleController.getAll);
router.get('/articles/:id', articleController.getOne);
router.post('/articles', articleController.createOne);

//méthodes pour les auteurs
router.get('/authors', authorController.getAll);
router.get('/authors/:id', authorController.getOne);
router.post('/authors', authorController.createOne);

//méthodes pour les categories
router.get('/categories', categoryController.getAll);
router.get('/categories/:id', categoryController.getOne);
router.post('/categories', categoryController.createOne);

module.exports = router;