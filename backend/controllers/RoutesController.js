/**
 * File: RoutesController.js
 * This file contains the controlling functions for each routes.
 *
 * Current Functions:
 *    # fetchAllArticles()
 *    # createNewArticle()
 */

 const mongoose = require('mongoose');
 const Article = require('../models/Article.js');
 
 // GET all articles
 // PATH: api/articles/all-articles
 const fetchAllArticles = async (request, response) => {
   try {
     const allArticles = await Article.find({});
     return response.status(200).json(allArticles);
   } catch (error) {
     return response.status(404).json({ message: error });
   }
 };
 
 // POST new article
 // PATH: api/articles/post-new-article
 const createNewArticle = async (request, response) => {
   const {
     id,
     title,
     authors,
     source,
     pubyear,
     doi,
     claim,
     evidence,
     practice,
   } = request.body;
 
   try {
     const newArticle = await Article.create({
       id,
       title,
       authors,
       source,
       pubyear,
       doi,
       claim,
       evidence,
       practice,
     });
     response.status(200).json(newArticle);
   } catch (error) {
     // response.status(404).json({ error: 'Could Not Post New Article :(' });
     response.status(404).json({ message: error });
   }
 };
 
 // export functions
 module.exports = {
   fetchAllArticles,
   createNewArticle,
 };