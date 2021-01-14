const Story = require('../models/Story');
const User = require('../models/User')

// create a story
module.exports.createStory =  async (req, res, next) => {
    
    if(!req.body.title || !req.body.story) return res.status(400).json({
        error: true,
        message: "title or story not provided"
    });
    const story = new Story(req.body);
    let token = req.cookies.auth;
    
    User.findByToken(token, async (err, user) => {
        if(err) {
            return res(err)
        }
        if(user) {
            story.author = user._id;
            await story.save();

            return res.status(200).json({
                story  
              });
        }
    })
    
   
    
}

// show all stories
module.exports.showStories = async (req, res) => {
    const stories = await Story.find({}).populate('author', 'name');
    res.send(stories);
}

// show a story by id
module.exports.showStory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const story = await Story.findById(id).populate('author', 'name');
        res.send(story)
    } catch (e) {
        return res.status(404).json({
            error: true,
            message: `id not found`
        });
    }
    
}

    
