import React from "react";
import "../styles/Intro.css";
import Typist from "react-typist";
import FadeInSection from "./FadeInSection";
import YarModel from "./YarModel";

const Intro = () => {
    return (
      <div id="intro">
        <div id="koray-model">
          <YarModel></YarModel>
        </div>
        <Typist avgTypingDelay={120}>
          <span className="intro-title"> {"hi, "} <span className="intro-name">{"koray"}</span> {" here."}</span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
            I'm a software engineer and ninja based in Plovdiv. I have profound
            interest in machine learning, human-computer interactions, frontend
            development, and everything in between.
          </div>
          <a href="mailto:koray.feyzula@gmail.com" className="intro-contact"> <i class="fas fa-envelope"></i>Say hello</a>
        </FadeInSection>
      </div>
    );
  };

export default Intro;
