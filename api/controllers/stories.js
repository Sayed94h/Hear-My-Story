const Story = require('../models/Story');
const User = require('../models/User')


module.exports.createStory =  async (req, res, next) => {
    
    if(!req.body.story) return res.status(400).json({
        error: true,
        message: "No text provided"
    });
    const story = new Story(req.body);
    let token = req.cookies.auth;
    
    User.findByToken(token, (err, user) => {
        if(err) {
            return res(err)
        }
        if(user) {
            story.author = user._id;
            console.log(story);
            story.save();

            return res.status(200).json({
                story  
              });
        }
    })
    
   
    
}

    