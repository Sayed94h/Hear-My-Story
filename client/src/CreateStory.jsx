import React, {useState} from 'react';
import './CreateStory.css';
import Field from "./Field";
import ContentField from "./ContentField";
import ProfileNavigation from "./ProfileNavigation";

function CreateStory() {
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
        </form>
      </div>
    </main>
  )
}

export default CreateStory;
