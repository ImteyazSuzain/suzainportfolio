import React from "react";
import "./About.css";
export default function About() {
	const SCREEN_CONSTSANTS = {
		description:
			"Full stack web developer with background knowledge of MERN stack and also have understanding of next.js. Willing to work with your company for better professional opportunities that help me for better future.",
		highlights: {
			bullets: [
				"Data Structure and Algorithms",
				"Web Development using Mern",
				"Full Stack Developer",
				"React Developer",
				"C++ Programming Languages",

				"Managing database with Mongodb",
			],
			heading: "Here are a Few Highlights:",
		},
	};
	const renderHighlight = () => {
		return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
			<div className="highlight" key={i}>
				<div className="highlight-blob"></div>
				<span>{value}</span>
			</div>
		));
	};
	return (
		<div className="about container-fluid">
			<div className="about-me">
				<div className="about-left">
					<div className="about-card bg"></div>
					<div className="about-card">
						<img
							src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
							alt=""
							className="about-img"
						/>
					</div>
				</div>

				<div className="about-right">
					<h1 className="about-title">About Me</h1>
					<p className="sub-title">
						<span className="about-me-description">
							{SCREEN_CONSTSANTS.description}
						</span>
					</p>
					<div className="about-me-highlights">
						<div className="highlight-heading">
							<span>Here are few Highlights</span>
						</div>
						{renderHighlight()}
					</div>
				</div>
			</div>
		</div>
	);
}
