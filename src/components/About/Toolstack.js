import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiVisualstudiocode,
	SiPostman,
	SiSlack,
	SiVercel,
	SiMacos,
	SiWindows,
	SiMongodb,
	SiMicrosoftsqlserver,
	SiAnaconda,
	SiGit,
	SiChatbot,
} from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiWindows />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMongodb />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMicrosoftsqlserver />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAnaconda />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiChatbot />
			</Col>
		</Row>
	);
}

export default Toolstack;
