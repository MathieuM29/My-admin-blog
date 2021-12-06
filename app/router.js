const express = require('express');
const router = express.Router();

const articleController = require('./controllers/articleController');
const authorController = require('./controllers/authorController');
const categoryController = require('./controllers/categoryController');

//méthodes pour les articles
router.get('/articles', articleController.getAll);
router.get('/articles/:id', articleController.getOne);
router.post('/articles', articleController.createOne);
router.patch('/articles/:id', articleController.updateOne);
router.delete('/articles/:id', articleController.deleteOne);

//méthodes pour les auteurs
router.get('/authors', authorController.getAll);
router.get('/authors/:id', authorController.getOne);
router.post('/authors', authorController.createOne);
router.patch('/authors/:id', authorController.updateOne);
router.delete('/authors/:id', authorController.deleteOne);

//méthodes pour les categories
router.get('/categories', categoryController.getAll);
router.get('/categories/:id', categoryController.getOne);
router.post('/categories', categoryController.createOne);
router.patch('/categories/:id', categoryController.updateOne);
router.delete('/categories/:id', categoryController.deleteOne);

module.exports = router;