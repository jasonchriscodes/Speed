const express = require('express');
const router = express.Router();

// @route GET api/articles
// @description Get all articles
// @access Public
router.get('/', (req, res) => {
  Repository.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ nobooksfound: 'No Repository found' }));
});

module.exports = router;