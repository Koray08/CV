import React from 'react'
import '../styles/About.css'
import FadeInSection from "./FadeInSection";
import image from "./assets/levay.png";

function About() {
    
    const one = (
      <p>
        I am currently studying <b>Software engineering</b> at{" "}
        <b> University of Plovdiv </b>, with a focus in Ninjitsu.
        I am also currently on a one year internship at{" "}
        <a className="badelema" href="https://www.google.com/search?q=Badelema%2C+the+capital+of+the+world&biw=1366&bih=671&sxsrf=AOaemvKveeGy-QSGA9OE2EI1j2nQEU5FCg%3A1637239770781&ei=2kuWYdGKL8udkgXLmakw&ved=0ahUKEwjR38u3-aH0AhXLjqQKHctMCgYQ4dUDCA4&uact=5&oq=Badelema%2C+the+capital+of+the+world&gs_lcp=Cgdnd3Mtd2l6EAM6BQgmELADOgkIABCwAxAHEB46BwgjELACECc6BAguEA06CAgAEA0QBRAeOgIIJjoGCAAQBRAeOgUIIRCgAToFCAAQzQI6BQghEJIDOgcIIxDqAhAnOgQIIxAnOgYIIxAnEBM6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARCjAjoFCAAQgAQ6CAgAEIAEELEDOggIABCxAxCDAToICC4QgAQQsQM6DgguEIAEELEDEMcBEK8BOgsIABCABBCxAxCLAzoFCC4QgAQ6DQguEIAEEAoQqAMQnQM6EAguEIAEEAoQiwMQqAMQngM6CggAEIAEEAoQiwM6BwgAEIAEEAo6BQgAEMsBOggIABDJAxDLAToFCC4QywE6FAguEMcBEK8BEMsBEIsDEKgDEKYDOggIABDLARCLAzoHCAAQChDLAToECAAQHjoHCCEQChCgAToECCEQFUoECEEYAVCsFFibzQFggtYBaBhwAHgEgAGFA4gB90SSAQg3LjQ5LjQuMpgBAKABAbABCsgBBLgBAsABAQ&sclient=gws-wiz" target="_blank">Block 17 №=V </a> as an{" "}
        <b>Associate Full-stack friend</b>.
      </p>
    );
    const two = (
      <p>
        I'm into <b>machine learning</b>, <b>human-computer interactions</b> and{" "}
        <b>frontend development</b>. I also like my fair share of visual arts
        and creativity. In my spare time, I eat salat and play with my stupid little life.
      </p>
    );

    const desc_items = [one, two];

    const tech_stack = [
        "Javascript ES6+",
        "Python",
        "React.js",
        "Flask",
        "HTML & CSS",
        "React Native",
        "Java",
        "Express.js"
    ];

    return (
        <div id="about">
            <FadeInSection>
                <div className="section-header">
                    <span className="section-title">/ about me</span>
                </div>

                <div className="about-content">
                    <div className="about-description">
                        {desc_items}
                        {"Here are some technologies I have been working with: "}
                        <ul className="tech-stack">
                            {tech_stack.map((item,i) => (
                                <FadeInSection delay={`${i}00ms`}>
                                    <li>{item}</li>
                                </FadeInSection>
                            ))}
                        </ul>
                    </div>

                    <div className="about-image">
                        <img className='levi' src={image} alt={"image"}/>
                    </div>

                </div>

            </FadeInSection>
        </div>        
    )
}



export default About
