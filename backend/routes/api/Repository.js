/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
const express = require('express');
const AppRouter = express.Router();
const AppController = require('../../controllers/RoutesController');

// api/articles/all-articles
AppRouter.get('/all-articles', AppController.fetchAllArticles);

// api/articles/post-new-article
AppRouter.post('/post-new-article', AppController.createNewArticle);

module.exports = AppRouter;
