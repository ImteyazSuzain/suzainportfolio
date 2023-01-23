import React from "react";
import { Progress } from "antd";
import { Card } from "antd";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
	SiJavascript,
	SiCplusplus,
	SiNextdotjs,
	SiMongodb,
	SiFirebase,
} from "react-icons/si";
function Programming() {
	const gridStyle = {
		width: "33.33%",
		textAlign: "center",
		border: "red",
	};
	return (
		<>
			<div className="container-fluid ">
				<Card
					className="site-card-border-less-wrapper"
					title="Programming "
					bordered={1}
				>
					<Card.Grid className="grid" bordered={false} style={gridStyle}>
						<p>
							C++ {""}
							<SiCplusplus />
						</p>
						<Progress
							className="percent"
							strokeColor={{
								"0%": "#db6a0e",
								"100%": "#db6a0e",
							}}
							percent={80}
							format={() => ""}
						/>
					</Card.Grid>
					<Card.Grid className="grid" bordered={false} style={gridStyle}>
						<p>
							React {""}
							<FaReact />
						</p>
						<Progress
							strokeColor={{
								"0%": "#db6a0e",
								"100%": "#db6a0e",
							}}
							percent={70}
							format={() => ""}
						/>
					</Card.Grid>
					<Card.Grid className="grid" style={gridStyle}>
						<p>
							JavaScript <SiJavascript />
						</p>
						<Progress
							strokeColor={{
								"0%": "#db6a0e",
								"100%": "#db6a0e",
							}}
							percent={70}
							format={() => ""}
						/>
					</Card.Grid>
					<Card.Grid className="grid" style={gridStyle}>
						<p>
							NodeJs <FaNodeJs />
						</p>

						<Progress
							strokeColor={{
								"0%": "#db6a0e",
								"100%": "#db6a0e",
							}}
							percent={70}
							format={() => ""}
						/>
					</Card.Grid>
					<Card.Grid className="grid" style={gridStyle}>
						<p>
							NextJs {""}
							<SiNextdotjs />
						</p>
						<Progress
							strokeColor={{
								"0%": "#db6a0e",
								"100%": "#db6a0e",
							}}
							percent={60}
							format={() => ""}
						/>
					</Card.Grid>
					<Card.Grid className="grid" style={gridStyle}>
						<p>
							MongoDB {""}
							<SiMongodb />
						</p>
						<Progress
							strokeColor={{
								"0%": "#db6a0e",
								"100%": "#db6a0e",
							}}
							percent={65}
							format={() => ""}
						/>
					</Card.Grid>
					<Card.Grid className="grid" style={gridStyle}>
						<p>
							Firebase <SiFirebase />
						</p>
						<Progress
							strokeColor={{
								"0%": "#db6a0e",
								"100%": "#db6a0e",
							}}
							percent={70}
							format={() => ""}
						/>
					</Card.Grid>
				</Card>
			</div>
		</>
	);
}

export default Programming;
