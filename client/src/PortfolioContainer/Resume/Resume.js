import React from "react";

import "antd/dist/antd.css";
import { Tabs } from "antd";

import Education from "./Education";
import Projects from "./Projects";
import Programming from "./Programming";
import "./Resume.css";

const { TabPane } = Tabs;

function Resume() {
	return (
		<div className="tab container-fluid col-md-8 offset-md-2">
			<h1 className="heading">Resume</h1>
			<Tabs defaultActiveKey="3">
				<TabPane
					tab={
						<span>
							<i class="fa fa-graduation-cap" aria-hidden="true">
								{"            "}
							</i>
							{"      "}
							Education
						</span>
					}
					key="1"
				>
					<Education />
				</TabPane>
				<TabPane
					tab={
						<span>
							<i class="fa fa-list-alt" aria-hidden="true">
								{"            "}
							</i>
							{"      "}
							Projects
						</span>
					}
					key="2"
				>
					<Projects />
				</TabPane>
				<TabPane
					tab={
						<span>
							<i class="fa fa-spinner" aria-hidden="true"></i>
							{"      "}
							Programming
						</span>
					}
					key="3"
				>
					<Programming />
				</TabPane>
			</Tabs>
		</div>
	);
}

// ReactDOM.render(<TabsCard />, mountNode);
export default Resume;
