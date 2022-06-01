import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";

const Projects = () => {
    const projects = {
      "Socket.io": {
        desc:
          "Chat App.",
        techStack: "React - Socket.io",
        link: "https://github.com/Koray08/Socket.IO-with-React",
      },
      "Adam A.I.": {
        desc:
          "A self-learning A.I.",
        techStack: "Javascript, HTML / CSS",
        link: "https://github.com/Koray08/adam-ai",
        // open: "https://koray08.github.io/adam-ai/"
      },
      Tesla: {
        desc:
          "Tesla website clone",
        techStack: "Reaact, styled components, Redux, React-Router",
        link: "https://github.com/Koray08/Tesla-Website-with-Redux"
      },
      "Discord Bot": {
        desc:
          "A Discord bot that helps you get a motivation.",
        techStack: "Python",
        link: "https://github.com/Koray08/discordBot",
        open: ""
      },
      "Tesla React-Native": {
        desc:
          "Tesla mobile app clone",
        techStack: "React Native",
        link: "https://github.com/Koray08/React-Native-Tesla-app",
        open: ""
      },
      "MySQL CRUD": {
        desc:
          "MySQL - React CRUD",
        techStack: "React, Axios, SQL",
        link: "https://github.com/Koray08/MySQL-crud",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <span className="external-links">
                      <a className="github-icon" href={projects[key]["link"]} target="_blank">
                        <GitHubIcon
                          style={{
                            fontSize: 20,
                            color: "var(--lightest-slate)"
                          }}
                        ></GitHubIcon>
                      </a>
                      {projects[key]["open"] && (
                        <a className="open-icon" href={projects[key]["open"]} target="_blank">
                          <OpenInBrowserIcon
                            style={{
                              fontSize: 25,
                              color: "var(--lightest-slate)"
                            }}
                          ></OpenInBrowserIcon>
                        </a>
                      )}
                    </span>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Projects;
