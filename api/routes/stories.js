const express = require('express');
const router = express.Router();
const storiesController = require('../controllers/stories')
const { auth } = require('../middleware');

router.post('/', auth, storiesController.createStory);
router.get('/', storiesController.showStories);
router.get('/profile', auth, storiesController.showMyStories);
router.get('/:id', storiesController.showStory);

module.exports = router