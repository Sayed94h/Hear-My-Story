import React, {useState} from 'react';
import './CreateStory.css';
import Field from "./Field";
import ContentField from "./ContentField";
import ProfileNavigation from "./ProfileNavigation";
import { Redirect } from "react-router-dom";

function CreateStory() {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [redirectToMyStories, setRedirectToMyStories] = useState(false);
  const [error, setError] = useState(false);

  const handleStory = async () => {

    fetch(
      `/api/stories`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          story,
        })
      }
    )
      .then(response => response.json())
      .then((data) => {
        if (!data.error) {
          setRedirectToMyStories(true);
        }

        if (data.error === true) {
          setError('Something went wrong')
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (redirectToMyStories === true) {
    return <Redirect to={'/profile/stories'} />
  }

  return (
    <main className="story__header">
      
      <ProfileNavigation/>

      <div className="story__form">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleStory();
        }}>
          <h3 className="input__header">Create Story</h3>

          <Field
            inputName={"title"}
            type={"text"}
            placholder={"Title"}
            label={"Title"}
            onChange={(inputName, value) => {
              setTitle(value)
            }}
          />

          <ContentField
            inputName={"content"}
            type={"text"}
            placholder={"Content"}
            label={"Content"}
            onChange={(inputName, value) => {
              setStory(value)
            }}
          />

          <button className="Button" type="submit">Save Story</button>

          {error ? <p className="error">{error}</p> : null}
        </form>
      </div>
    </main>
  )
}

export default CreateStory;
