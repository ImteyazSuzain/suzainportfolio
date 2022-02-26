import React from "react";
import { Card } from "antd";
import "./Education.css";

function Education() {
	return (
		<div className="container-fluid ">
			<Card title="Education">
				<Card
					className="card"
					type="inner"
					title="Computer Engineering"
					extra={<p>2018-2022</p>}
				>
					<p>
						<li className="l">
							Zakir Husain College of Engineering and Technology
							{<li className=" pull-right">9.26 CGPA</li>}
						</li>
					</p>
				</Card>

				<Card
					className="card"
					type="inner"
					title="Class XIIth"
					extra={<p>2016-2018</p>}
				>
					<p>
						<li className="l">
							Senior Secondary School ,AMU , Aligarh
							{<li className=" pull-right">79.6%</li>}
						</li>
					</p>
				</Card>
				<Card
					className="card"
					type="inner"
					title="Class Xth"
					extra={<p>2014-2016</p>}
				>
					<p>
						<li className="l">
							AMU ABK Girls High School , AMU , Aligarh
							{<li className=" pull-right">9.2CGPA</li>}
						</li>
					</p>
				</Card>
			</Card>
		</div>
	);
}

export default Education;
