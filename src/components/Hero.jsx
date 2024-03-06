import React from "react";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-main">
          <div className="hero-overall">
            <div className="hero-text">
              <h1>
                React  <br /> Developer{" "}
                
              </h1>
              <p>
               Hi, I am Avin. Passionate Web Developer. 
               <br/>
               Feel Free to connect with me.
              </p>
              <div className="profile-links">
                <a href="#">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <img src="assets/profile.png" alt="profile" />
          </div>

          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;
