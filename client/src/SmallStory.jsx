import React, {useState} from "react";
import "./SmallStory.css";
import {Link, Redirect} from "react-router-dom";

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
		<article onClick={onStoryClick} className="SmallStory">
			<section className="content">
				<h1>{title}</h1>
				<section>
					<p>{author?.name}</p>
					<p>{(new Date(created)).toLocaleDateString()}</p>
				</section>
			</section>
			<section className="reactions-link">
				<figure>
					<img src="./ear.svg" alt="Reaction sign" />
				</figure>
				<Link to={`/stories/${_id}`}>Read more</Link>
			</section>
		</article>
	);
}
