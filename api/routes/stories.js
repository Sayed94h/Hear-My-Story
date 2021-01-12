const express = require('express');
const router = express.Router();
const storiesController = require('../controllers/stories')
const { auth } = require('../middleware');


router.post('/', auth, storiesController.createStory);



module.exports = router