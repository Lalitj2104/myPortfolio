import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify.png";
import shop from "../../Assets/Projects/shop.png";
import maxy from "../../Assets/Projects/Maxy.png";
import mind from "../../Assets/Projects/mind.png";
import price from "../../Assets/Projects/price.png";
import chatly from "../../Assets/Projects/chatly.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mind}
              isBlog={false}
              title="MindEase"
              description="MindEase is a comprehensive mental health and wellness application designed to help users manage their well-being through videos, music, guided activities, and a virtual assistant. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrated with AI/ML capabilities, the app offers personalized recommendations and support. Users can also connect with volunteers for real-time chat support if they need additional help. The app features two-step authentication for enhanced security and includes user, volunteer, and admin panels for seamless management. MindEase combines technology and mental health support, offering a holistic approach to wellness with a user-friendly interface and robust backend functionality."
              ghLink="https://github.com/Lalitj2104/MindEase"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatly}
              isBlog={false}
              title="Chatly"
              description="Chatly is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for seamless, instant messaging. The app features user authentication, friend request functionality, and a responsive, user-friendly interface. Users can send and receive messages in real-time, manage friend requests, and enjoy a smooth chat experience. The backend is powered by Express.js and Node.js, while React.js handles the dynamic frontend. Socket.IO ensures real-time communication, and MongoDB manages user data and chat history efficiently. This project showcases expertise in full-stack development, real-time communication, and modern web technologies."
              ghLink="https://github.com/Lalitj2104/Chatly"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Shop-Drop"
              description="Shop & Drop is a sophisticated e-commerce website featuring a virtual assistant, an integrated gaming zone, and a well-structured Admin, Retailer, and User panel system. Designed to handle 50+ RESTful APIs, the platform ensures smooth data flow and real-time updates across all functionalities. The project leverages Redux for efficient state management, enabling seamless interactions and dynamic UI updates. Key features include secure authentication, product catalog management, order tracking, and an interactive gaming zone for user engagement. This project demonstrates expertise in full-stack development, API integration, and scalable state management, making it a robust and modern e-commerce solution."
              ghLink="https://github.com/Lalitj2104/Shop-Drop"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={price}
              isBlog={false}
              title="House-Price-Prediction"
              description="Developed a comprehensive House Price Prediction System using Machine Learning in Python, leveraging multiple algorithms to predict prices and compare their performance for optimal accuracy. The system achieved state-of-the-art results on the Bengaluru House Price dataset, with 85% of the work focused on data analysis, feature engineering, and model training. The project also includes a Flask-based web framework for the backend, with HTML, CSS, and JavaScript for frontend development, enabling dynamic and interactive client-side functionality. This end-to-end solution demonstrates expertise in data science, machine learning, and full-stack development, showcasing the ability to build scalable and accurate predictive systems."
              ghLink="https://github.com/Lalitj2104/House-Price-prediction"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maxy}
              isBlog={false}
              title="MaxyBuy"
              description="MaxyBuy is a modern, responsive e-commerce platform built using React.js, offering a seamless shopping experience for fashion enthusiasts. The website features a user-friendly interface with dynamic product displays, easy navigation, and real-time updates. Key functionalities include product filtering, a shopping cart, and secure checkout. Designed with a focus on performance and scalability, MaxyBuy ensures a smooth and enjoyable shopping experience across all devices. This project highlights expertise in React.js, state management, and front-end development, making it a perfect showcase for building interactive and visually appealing web applications."
              ghLink="https://github.com/Lalitj2104/Affiliate-Ecommerce-Website-Maxybuy"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="spotify-clone"
              description="This project is a web-based clone of Spotify, built using HTML, CSS, and JavaScript. It replicates the core features of Spotify.This project demonstrates strong front-end development skills, including DOM manipulation, event handling, and CSS styling. Perfect for showcasing your ability to create interactive and visually appealing web applications!"
              ghLink="https://github.com/Lalitj2104/spotify-Clone"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
