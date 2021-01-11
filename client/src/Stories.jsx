import React, {useState} from 'react';
import './Stories.css';
import {Link} from "react-router-dom";

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
    <main className="story__header">
      <nav className="story__navigation">
        <ul>
          <li>
            <Link to={'/'}>Create Story</Link>
          </li>
          <li>
            <Link to={'/'}>Show Stories</Link>
          </li>
          {/*<li>*/}
          {/*  <Link to={'/'}>Saved Stories</Link>*/}
          {/*</li>*/}
          <li>
            <Link to={'/'}>Reactions</Link>
          </li>
        </ul>
      </nav>
      <div className="story__form">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleStory();
        }}>
          <h3 className="input__header">Create Story</h3>
          <label>Title</label>
          <input className="title__input" value={title}
                 onChange={e => setTitle(e.target.value)}
                 type="text"/>
          <br/><label>Content</label>
          <input className="content__input" value={story}
                 onChange={e => setStory(e.target.value)}
                 type="text"/><br/>
          <button className="save__button" type="submit">Save Story</button>
        </form>
      </div>
    </main>
  )
}

export default Story;
