/**
 * File Repository.js
 * This file contains all the middleware functions for the app
 */

const express = require('express');
const AppRouter = express.Router();
const AppRoutesController = require('../../controllers/RoutesController');
const SubmitArticlesController = require('../../controllers/SubmitArticlesController');

// GET Request
// api/articles/all-articles
AppRouter.get('/all-articles', AppRoutesController.fetchAllArticles);

// POST Request
// api/articles/post-new-article
AppRouter.post('/post-new-article', AppRoutesController.createNewArticle);

// POST Request
// api/articles/post-new-submit-article
AppRouter.post('/post-new-submit-article', SubmitArticlesController.postNewSubmittedArticle);

// Export App Router
module.exports = AppRouter;
