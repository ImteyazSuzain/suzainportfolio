import React, { useState } from "react";
import "./ContactMe.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ContactMe = () => {
	const navigate = useNavigate();
	const [email, setemail] = useState("");
	const [name, setname] = useState("");
	const [summary, setsummary] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(`/contact`, {
				name,
				email,
				summary,
			});
			if (data.error) {
				toast.error(data.error);
			} else {
				navigate("/");
				toast.success("An Email Sent to Suzain Imteyaz");
				setemail("");
				setname("");
				setsummary("");
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<div className="container-fluid">
				<div className="row py-5 bg-default-image text-light">
					<div className="col text text-center">
						<h1>Contact Me</h1>
					</div>
				</div>
				<div className="container-fluid col-md-8 offset-md-2">
					<form onSubmit={handleSubmit}>
						<div className="form-group p-2">
							<small>
								<label className="text-muted">Enter Your Email</label>
							</small>
							<input
								value={email}
								onChange={(e) => setemail(e.target.value)}
								type="email"
								className="form-control"
								placeholder="Enter Your Email"
							/>
						</div>
						<div className="form-group p-2">
							<small>
								<label className="text-muted">Enter Your Name</label>
							</small>
							<input
								value={name}
								onChange={(e) => setname(e.target.value)}
								type="text"
								className="form-control"
								placeholder="Enter Your Name"
							/>
						</div>
						<div className="form-group p-2">
							<small>
								<label className="text-muted">Enter Summary</label>
							</small>
							<input
								value={summary}
								onChange={(e) => setsummary(e.target.value)}
								type="text"
								className="form-control"
								placeholder="Enter Summary"
							/>
						</div>

						<div className="form-group p-2 button">
							<button
								disabled={!name || !email || !summary}
								className="btn btn-primary col-12 "
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default ContactMe;
