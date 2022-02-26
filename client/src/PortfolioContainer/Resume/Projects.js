import React from "react";

import { Card } from "antd";

function Projects() {
	return (
		<div className="container-fluid">
			<Card title="Projects">
				<Card className="card" type="inner" title="MERN Stack Bootcamp">
					<p>
						In this course I have learnt about react framework next.js. First I
						understand about the authentication using jwt token after that
						create the user profile and for the profile image I have implement
						cloudinary for that . Further create the post routes for creating
						the post with like and comments features.Display the follower and
						following list of the user and many more features I learnt using
						this course.
					</p>
				</Card>

				<Card className="card" type="inner" title="Covid-19 tracker">
					<p>
						With the help of this I learnt about how we get the data's using api
						and fetch the data of a particular country based on the selected
						country and getting the total ,active , recovered and deaths
						cases.Using Chart js to create chart and also add the state wise
						data
					</p>
				</Card>
				<Card className="card" type="inner" title="E-commerce Website">
					<p>
						In this I create an e-commerce website with stripe payment
						functionalities. In this I also using firebase for authentication
						using google and for storage and hosting.
					</p>
				</Card>
				<Card className="card" type="inner" title=" C++ Language">
					<p>Prefer C++ langauge for Programming and DSA </p>
				</Card>
			</Card>
		</div>
	);
}

export default Projects;
