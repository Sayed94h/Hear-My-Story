import React, {useEffect, useState} from 'react';
import './Stories.css';
import Story from "./Story";
import BigStory from "./BigStory";
import SmallStory from "./SmallStory";

export default function() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `/api/stories`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    .then(response => response.json())
    .then((data) => {
      setStories(data);
    })
    .catch((error) => {
      setError('Something went wrong while fetching the stories');
    });
  }, []);

  const bigStories = [0, 8, 15, 21];
  const smallStories = [3, 6, 12, 20, 18, 23];

  return (
    <main className="Stories">
      {
        stories.map((story, index) => {
          if (bigStories.indexOf(index) !== -1) {
            return <BigStory key={story._id} {...story}/>
          }

          if (smallStories.indexOf(index) !== -1) {
            return <SmallStory key={story._id} {...story}/>
          }

          return <Story key={story._id} {...story}/>
        })
      }
      {error ? <p className="error">{error}</p> : null}
    </main>
  );
}