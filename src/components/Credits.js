import React from "react";
import FadeInSection from "./FadeInSection";
import "../styles/Credits.css";

const Credits = () => {
  return (
      <FadeInSection>
        <div id="credits">
          <div className="ending-credits">
            <div>Built and designed by Koray Feyzula. </div>
            <div>All rights reserved. ©</div>
          </div>
        </div>
      </FadeInSection>
    );
}


export default Credits;
