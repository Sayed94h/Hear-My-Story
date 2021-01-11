import React from 'react';
import './CreateStory.css';
import ProfileNavigation from "./ProfileNavigation";

function MyStories() {

  // Make API call to get stories

  return (
    <main className="story__header">
      <ProfileNavigation />
      <div className="story__form">
        <h3 className="input__header">My Stories</h3>
      </div>
    </main>
  )
}

export default MyStories;
