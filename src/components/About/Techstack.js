import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
	DiAws,
	DiJava,
	DiJavascript1,
	DiMongodb,
	DiNodejs,
	DiPython,
	DiReact,
} from "react-icons/di";
import {
	SiAmazonaws,
	SiCss3,
	SiExpress,
	SiHtml5,
	SiJsonwebtokens,
	SiMysql,
} from "react-icons/si";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiJava />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<CgCPlusPlus />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPython />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiExpress />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiAws />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiHtml5 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiCss3 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAmazonaws />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMysql />
			</Col>
		</Row>
	);
}

export default Techstack;
