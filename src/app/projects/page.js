"use client";
import styles from "../../styles/projects.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Projects() {
  const [openProjects, setOpenProjects] = useState(false);

  return (
    <section>
      <Header />
      <main className='main-projects'>
        <section className='section-1-projects'>
          <div className='section-1-container-all-left'>
            <div className='section-1-container-title-left'>
              <p onClick={() => setOpenProjects((o) => !o)}>
                <img
                  src='icon-arrow-about-pleine.svg'
                  style={{
                    transform: openProjects ? "rotate(0deg)" : "rotate(270deg)",
                    transition: "transform 0.2s",
                  }}
                />
                projects
              </p>
            </div>
            <div
              className='section-1-container-content-left'
              style={{
                display: openProjects ? "flex" : "none",
                flexDirection: "column",
                gap: "10px",
                paddingTop: openProjects ? "4px" : "0",
                paddingBottom: openProjects ? "12px" : "0",
              }}>
              <p>
                {" "}
                <input type='checkbox' /> <img src='icon-react.svg' /> React
              </p>
              <p>
                {" "}
                <input type='checkbox' /> <img src='icon-html.svg' /> HTML
              </p>
              <p>
                {" "}
                <input type='checkbox' /> <img src='icon-css.svg' /> CSS
              </p>
              <p>
                {" "}
                <input type='checkbox' /> <img src='icon-vue.svg' /> Vue
              </p>
              <p>
                {" "}
                <input type='checkbox' /> <img src='icon-angular.svg' /> Angular
              </p>
            </div>
          </div>
        </section>
        {/* !!!!!!!!!!!!!!!!!!!!section 2!!!!!!!!!! */}

        <section className='section-2-projects'>
          <div className='section-2-header'>
            <p>
              React <img src='icon-close.svg' />
            </p>
          </div>

          <div className='section-2-content-all'>
            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  {" "}
                  <span>Project 1</span> // _iu-animation
                </p>
              </div>
              <div className='section-2-content-main'>
                <div className='section-2-img-tech'>
                  <img src='icon-react-2.svg' />
                </div>
                <img className='section-2-img-projects' src='project-1.svg' />
                <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                <button>view-project</button>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  {" "}
                  <span>Project 2</span> // _tetris-game
                </p>
              </div>
              <div className='section-2-content-main'>
                <div className='section-2-img-tech'>
                  <img src='icon-react-2.svg' />
                </div>
                <img className='section-2-img-projects' src='project-2.svg' />
                <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                <button>view-project</button>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  {" "}
                  <span>Project 3</span> // _glassy-ui
                </p>
              </div>
              <div className='section-2-content-main'>
                <div className='section-2-img-tech'>
                  <img src='icon-css-2.svg' />
                </div>
                <img className='section-2-img-projects' src='project-3.svg' />
                <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                <button>view-project</button>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  {" "}
                  <span>Project 4</span> // _nimbus
                </p>
              </div>
              <div className='section-2-content-main'>
                <div className='section-2-img-tech'>
                  <img src='icon-vue-2.svg' />
                </div>
                <img className='section-2-img-projects' src='project-4.svg' />
                <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                <button>view-project</button>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  {" "}
                  <span>Project 5</span> // _emberize-ui
                </p>
              </div>
              <div className='section-2-content-main'>
                <div className='section-2-img-tech'>
                  <img src='icon-vue-2.svg' />
                </div>
                <img className='section-2-img-projects' src='project-5.svg' />
                <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                <button>view-project</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
