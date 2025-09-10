import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import Study from "../assets/study.png"
import Ecommerce from "../assets/Ecommerce.png"
import Rice from "../assets/rice.jpg"

// Projects.jsx
const projects = [
  {
    title: "Study Circle Website",
    shortDesc:"Platform for students to join or create study groups.",
    fullDesc:
     " Our Study Group Website is a collaborative online platform that allows students to join or create study groups based on their interests or subjects. It provides features like secure signup/login, group discussions, and resource sharing to make learning more interactive. Users can browse available groups, post updates, and communicate with peers in real time. The platform encourages peer-to-peer learning and teamwork, helping students prepare more effectively for exams.",
    demoLink: "https://pavithra2ur.github.io/Bootstrap-website/",
    image: Study
  },
  {
    title: "Ecommerce Website",
    shortDesc: "UI-focused online store showcasing products with elegant layouts and interactive elements.",
    fullDesc:
      "The eCommerce Website features a clean and modern user interface built for smooth navigation and visual appeal. The layout showcases products with attractive cards, clear categories, and responsive grids for all screen sizes. It uses vibrant color schemes, typography, and spacing to highlight products effectively. Interactive elements like hover effects, buttons, and banners make the shopping experience lively. ",
    demoLink: "https://resonant-shortbread-7233c7.netlify.app/",
    image: Ecommerce
  },
  {
    title:  "Rice Leaf Disease Detection",
    shortDesc: "Deep CNN model to detect rice leaf diseases.",
    fullDesc:
      "The Rice Leaf Disease Detection project is an AI-powered solution designed to assist farmers and agricultural experts in identifying diseases affecting rice plants. Using a Deep Convolutional Neural Network (Deep CNN), the system analyzes images of rice leaves to automatically detect and classify various types of diseases with high accuracy. This helps in early diagnosis and enables timely treatment, reducing crop losses and improving yield. The model was trained on an enhanced dataset of rice leaf images to ensure robust performance in real-world conditions.",
    demoLink: "https://drive.google.com/file/d/1g3tP-CDHESXj5T6kvS44y2GyK5YGfVoI/view?usp=drivesdk",
    image: Rice
  }
];


const Projects = () => {
  return (
    <section className={styles.projectsSection} id="Projects">
      <h2>Projects</h2>
      
   <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          shortDesc={project.shortDesc}
          fullDesc={project.fullDesc}
          demoLink={project.demoLink}
           image={project.image} 
        />
      ))}
    </div>
    </section>
  );
};

export default Projects;
