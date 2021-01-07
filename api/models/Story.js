const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    author : { type : Schema.Types.ObjectId, ref : 'User' },
    story: {type: String, required: true},
    created: { type: Date, default: Date.now }

module.exports = mongoose.model('Story', StorySchema);
