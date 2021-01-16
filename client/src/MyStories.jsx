import React, {useEffect, useState} from 'react';
import './MyStories.css';
import ProfileNavigation from "./ProfileNavigation";
import Story from "./Story";

function MyStories() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `/api/stories/profile`,
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
        setStories(data)
      })
      .catch((error) => {
        setError('Something went wrong while fetching the stories');
      });
  }, []);


  return (
    <main className="MyStories">
      <ProfileNavigation />
      <div className="MyStories-Content">
        <h3 className="input__header">My Stories</h3>
        {
          stories.map((story, index) => {
            return <Story key={story._id} {...story}/>
          })
        }
      </div>
    </main>
  )
}

export default MyStories;
