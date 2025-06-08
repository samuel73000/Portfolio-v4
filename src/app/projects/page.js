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
      <main>
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

          
        </section>
      </main>
      <Footer />
    </section>
  );
}
