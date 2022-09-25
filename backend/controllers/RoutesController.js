/* eslint-disable indent */
/* eslint-disable padded-blocks */
/* eslint-disable no-empty */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const Article = require('../models/Article.js');

// GET all articles
// api/articles/all-articles
const fetchAllArticles = async (request, response) => {
  const allArticles = await Article.find({});
  response.status(200).json(allArticles);
};

// POST new article
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

module.exports = {
  fetchAllArticles,
  createNewArticle,
};
