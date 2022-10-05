/**
 * File: Article.js
 * This file contains the schema of the Article
 */
const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  pubyear: {
    type: String,
    required: true,
  },
  doi: {
    type: String,
  },
  claim: {
    type: String,
    required: true,
  },
  evidence: {
    type: String,
    required: true,
  },
  practice: {
    type: String,
    required: true,
  },
});

const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;
