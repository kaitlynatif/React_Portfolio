import React from "react";
import Project from "./Project";
import WorkDayScheduler from "../images/WorkDayPlanner.png";
import JavaScriptQuiz from "../images/JavaScriptQuiz.png";
import Weather from "../images/Weather.png";
import TechBlog from "../images/TechBlog.png";
import Password from "../images/Password.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio component
function Portfolio() {
  return (
        // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "Tech Blog",
              description: "CMS-Style Model View Controller Blog",
              imgSrc: TechBlog,
              deployedLink:
                "https://obscure-beach-63742.herokuapp.com",
              githubLink:
                "https://github.com/kaitlynatif/Tech_Blog",
            },
            {
              title: "Random Password Generator",
              description: "...",
              imgSrc: Password,
              deployedLink:
                "https://kaitlynatif.github.io/Random_Password_Generator",
              githubLink:
                "https://github.com/kaitlynatif/Random_Password_Generator",
            },
            {
              title: "Online Workday Scheduler",
              description: "Third-Party API Scheduler ft. Day.js",
              imgSrc: WorkDayScheduler,
              deployedLink:
                "https://kaitlynatif.github.io/WorkDay_Scheduler",
              githubLink:
                "https://github.com/kaitlynatif/WorkDay_Scheduler",
            },
            {
              title: "Java Script Quiz",
              description: "Dynamically updated HTML & CSS JavaScript quiz game.",
              imgSrc: JavaScriptQuiz,
              deployedLink:
                "https://kaitlynatif.github.io/Coding_Quiz",
              githubLink:
                "https://github.com/kaitlynatif/Coding_Quiz",
            },
            {
              title: "Weather Dashboard",
              description: "Server-Side APIs: Five Day Weather Dashboard.",
              imgSrc: Weather,
              deployedLink:
                "https://kaitlynatif.github.io/Weather_Forecast_Dashboard",
              githubLink:
                "https://github.com/kaitlynatif/Weather_Forecast_Dashboard",
            },
          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;
