import React from 'react';
import FadeInSection from "./FadeInSection";
import "../styles/SidebarNav.css";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const isMobile = window.innerWidth < 600;
    
    function SidebarNav() {    
    
    const links = [
        <a href=".">/home</a>,
        <a href="#about">/about</a>,
        <a href="#experience">/experience</a>,
        <a href="#projects">/software-creations</a>
    ];

    return (
        <div class="sidebar">
        {!isMobile && (
            <div class="sidebar-links">
                {links.map((link, i) => (
                    <FadeInSection delay={`${i + 1}00ms`}> 
                        {link}
                    </FadeInSection>
                ))}
            </div>
        )}

        {!isMobile && (
            <div className="logos" href="/">
                <a href="mailto:koray.feyzula@gmail.com">
                    <EmailIcon style={{ fontSize: 20 }}></EmailIcon>
                </a>
                <a href="https://github.com/Koray08" target={"_blank"}>
                    <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
                </a>
                <a href="https://www.linkedin.com/in/koray-feyzula-27a4a11b4/" target={"_blank"}>
                    <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
                </a>
            </div>
        )}
        </div>
    
    )
}

export default SidebarNav
