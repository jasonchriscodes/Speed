const SubmitArticle = require('../models/SubmitArticle.js');

// POST new article
// PATH: api/articles/post-new-article
const postNewSubmittedArticle = async (request, response) => {
    const {
      title,
      authors,
      journalName,
      volume,
      number,
      pages,
      doi,
      pubyear,
    } = request.body;
  
    try {
      const newSubmitArticle = await SubmitArticle.create({
        title,
        authors,
        journalName,
        volume,
        number,
        pages,
        doi,
        pubyear,
      });
  
      response.status(200).json(newSubmitArticle);
    } catch (error) {
      response.status(404).json({ message: error });
    }
  };

  module.exports = {
    postNewSubmittedArticle,
  };