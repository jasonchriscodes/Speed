/**
 * File: SubmitArticle.js
 * This file contains the schema of the article submitted by the user
 */
 const mongoose = require('mongoose');

 const SubmitArticleSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true,
      },
      authors: {
        type: String,
        required: true,
      },
      journalName: {
        type: String,
        required: true,
      },
      volume: {
        type: String,
        required: true,
      },
      number: {
        type: String,
      },
      pages: {
        type: String,
        required: true,
      },
      doi: {
        type: String,
        required: true,
      }, 
      pubyear: {
        type: String, 
        required: true, 
      }
 });

const SubmitArticle = mongoose.model('SubmitArticle', SubmitArticleSchema);
module.exports = SubmitArticle;
