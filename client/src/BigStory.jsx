import React, {useState} from 'react';
import './BigStory.css';
import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody";
import StoryFooter from "./StoryFooter";
import {Redirect} from "react-router-dom";

export default function (props) {
  const { author, created, story, title, _id } = props;
  const [redirectToStoryDetail, setRedirectToStoryDetail] = useState(false);

  const onStoryClick = () => {
    setRedirectToStoryDetail(true);
  };

  if (redirectToStoryDetail === true) {
    return <Redirect to={`/stories/${_id}`} />;
  }

  return (
      <article onClick={onStoryClick} className="BigStory">
        <StoryHeader author={author} created={created} />
        <StoryBody story={story} title={title} />
        <StoryFooter storyId={_id} />
      </article>
  );
}