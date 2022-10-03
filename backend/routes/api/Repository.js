/**
 * File Repository.js
 * This file contains all the middleware functions for the app
 */

const express = require('express');
const AppRouter = express.Router();
const AppController = require('../../controllers/RoutesController');

// GET Request
// api/articles/all-articles
AppRouter.get('/all-articles', AppController.fetchAllArticles);

// POST Request
// api/articles/post-new-article
AppRouter.post('/post-new-article', AppController.createNewArticle);

// Export App Router
module.exports = AppRouter;
