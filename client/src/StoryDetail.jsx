import React, {useEffect, useState} from 'react';
import './StoryDetail.css';
import {Link, useParams} from "react-router-dom";

export default function() {
  const { id } = useParams();
  const [fetchedStory, setStory] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `/api/stories/${id}`,
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
      setStory(data);
    })
    .catch((error) => {
      setError('Something went wrong while fetching the stories');
    });
  }, []);

  if (fetchedStory === false) {
    return (
      <article>
        <h1>Loading</h1>
      </article>
    );
  }

  const { author, created, story, title, _id } = fetchedStory;

  return (
    <article className="StoryDetail">
      <section className="content">
        <h1>{title}</h1>
        <section className="StoryDetail-Author">
          <p>{author.name}</p>
          <p>{(new Date(created)).toLocaleDateString()}</p>
        </section>
      </section>
      <section>
        <p>
          {story}
        </p>
      </section>
    </article>
  );
}