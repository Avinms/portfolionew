import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="projects">
      <div className="container">
        <h3>PORTFOLIO</h3>
        <h1>Each project is a unique piece of development</h1>
        <div className="all-projects">
          <div className="project-reverse">
            <div className="project-text">
              <h3>Ensemble Model</h3>
              <p className="project-desc">
                Pioneered the development and implementation of an inovative
                ensemble model for predicting volcanic ash cloud dispertion
                and an early warning system for evacuation.
              </p>
              <div className="project-stack">
                <p>Machine Learning</p>
                <p>python</p>
                <p>R</p>
                <p>Statistics</p>
                <p>Data analysis</p>
                <p>python library</p>
                
              </div>
              <div className="project-links">
                <a href="#" target="_blank">
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a
                href="#"
                target="_blank"
              >
                <img src="assets/ensemble.png" alt="Ensemble" />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <a href="#" target="_blank">
                <img src="assets/Wipro.png" alt="Wipro" />
              </a>
            </div>
            <div className="project-text">
              <h3>Wipro</h3>
              <p className="project-desc">
                Developed various React websites for my client in Wipro,
                The client was a multination logistics company whose headquater's
                is in the US.
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
              <div className="project-links">
                <a
                  href="#"
                  target="_blank"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          

          

          
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
