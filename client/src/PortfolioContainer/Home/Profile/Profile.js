import React from "react";
import Typical from "react-typical";

import { useNavigate } from "react-router-dom";

import "./Profile.css";
function Profile() {
	const navigate = useNavigate();
	const handlecontact = () => {
		navigate("/contact");
	};
	return (
		<div className="profile-container">
			<div className="profile-parent">
				<div className="profile-details">
					<div className="colz">
						<div className="colz-icons">
							<a href="https://www.instagram.com/suzain._imtyz/">
								<i className="fa fa-instagram"></i>
							</a>

							<a href="https://www.linkedin.com/in/suzain-imteyaz-769237193/">
								<i className="fa fa-linkedin"></i>
							</a>
						</div>
					</div>
					<div className="profile-details-name">
						<span className="primary-text">
							{" "}
							Hello , I'M <span className="highlighted-text">Suzain</span>
						</span>
					</div>
					<div className="profile-details-role">
						<span className="primary-text">
							{""}
							<h1>
								{" "}
								<Typical
									className="Me"
									loop={Infinity}
									steps={[
										"Final Year CSE Student",
										2000,
										"Full Stack Developer",
										2000,
										"Working on my DSA",
										2000,
										"React Developer",
										2000,
									]}
								/>
							</h1>
							<span className="profile-role-tagline">
								Knack of building applications with front and back end
								operations.
							</span>
						</span>
					</div>
					<div className="profile-options">
						<button
							className="btn primary-btn highlighted-btn"
							onClick={handlecontact}
						>
							{""}
							Hire me {""}
						</button>
						<a href="Resume.pdf " download={"Suzain Resume.pdf"}>
							<button className="btn highlighted-btn">Get Resume</button>
						</a>
					</div>
				</div>
				<div className="profile-picture">
					<div className="profile-picture-background"></div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
