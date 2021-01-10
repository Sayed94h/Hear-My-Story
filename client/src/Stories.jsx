import React, { useState } from 'react';
import './Stories.css';



function Story() {
    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');
   
    const handleStory = async () => {

    try {
            

    console.log(title, story)
  } catch (err) {
    console.error(err);
  }
};

    return (

        <div className="story__header" >
            <div className="story__leftButton">
                <button>
                  Create Story
                </button>
                <button>
                  View Story
                </button>
                <button>
                  Saved Story
                </button>
                <button>
                  Reactions
                </button>
              </div>
              <div>
                  <button className="setting__button">
                    Settings
                  </button>
                </div>
              <div className="story__form">
                <form onSubmit= {(e) => {
                 e.preventDefault();
                handleStory();
                }}>
                  <h3 className="input__header">Create Story</h3>
              <label>Title</label>
              <input className="title__input"value={title}
               onChange={e => setTitle(e.target.value)}
              type="text" />
            <br /><label>Content</label>
            <input className="content__input"value={story}
               onChange={e => setStory(e.target.value)}
              type="text" /><br/>
                <button className="save__button"type="submit">Save Story</button>
          </form>
       </div>
        
        </div> 
             
    
    )
}

export default Story;
