import React from "react";
import "./About.css";
const  profileImg = "https /src\Components\Kishorekumar S  profile.jpeg";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About Me</h1>

        <div className="about-content">
          <div className="about-text">
            <p>
              I’m a Front-End Developer focused on building clean, responsive,
              and user-friendly web applications.
            </p>

            <p>
              I work mainly with React, JavaScript, HTML, and CSS, and I enjoy
              converting UI designs into real, working products.
            </p>

            <p>
              Outside of coding, I spend time learning new web technologies and
              improving my problem-solving skills.
            </p>
          </div>

          <div className="about-image">
            <img src={profileImg} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
