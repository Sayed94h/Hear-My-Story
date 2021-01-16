import React, { Component } from "react";
import "./SmallStory.css";
import { Link } from "react-router-dom";
export default class SmallStory extends Component {
	render() {
		const { author, created, story, title } = this.props;

		return (
			<article className="SmallStory">
				<section className="content">
					<h1>{title}</h1>
					<section>
						<p>{author.name}</p>
						<p>{(new Date(created)).toLocaleDateString()}</p>
					</section>
				</section>
				<section className="reactions-link">
					<figure>
						<img src="./ear.svg" alt="Reaction sign" />
					</figure>
					<Link to="/">Read more</Link>
				</section>
			</article>
		);
	}
}
