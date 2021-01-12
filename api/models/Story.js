const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StorySchema = new mongoose.Schema({
    author : { type : Schema.Types.ObjectId, ref : 'User' },
    title: {type: String, required: true},
    story: {type: String, required: true},
    created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Story', StorySchema);
