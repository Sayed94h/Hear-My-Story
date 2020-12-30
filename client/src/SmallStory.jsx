import React, { Component } from "react";
import "./SmallStory.css";
import { Link } from "react-router-dom";
export default class SmallStory extends Component {
	render() {
		return (
			<section className="small-story">
				<section className="content">
					<h1>"The Center causes stress and frustration"</h1>
					<section>
						<p>Yared</p>
						<p>20-12-2020</p>
					</section>
				</section>
				<section className="reactions-link">
					<figure>
						<img src="./ear.svg" alt="Reaction sign" />
					</figure>
					<Link to="/">Read more</Link>
				</section>
			</section>
		);
	}
}
