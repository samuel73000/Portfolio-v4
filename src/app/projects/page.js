"use client";
import styles from "../../styles/projects.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <section>
      <Header />
      <main>
        <section className='section-1-projects'>
          <div className='section-1-container-all-left'>
            <div className='section-1-container-title-left'>
              <p> <img src="icon-arrow-about-pleine.svg"/>projects</p>
            </div>
            <div className='section-1-container-content-left'>
              <p>  <input type="checkbox"/>     <img src="icon-react.svg"/>     React</p>
              <p>  <input type="checkbox"/>     <img src="icon-html.svg"/>     HTML</p>
              <p>  <input type="checkbox"/>     <img src="icon-css.svg"/>     CSS</p>
              <p>  <input type="checkbox"/>     <img src="icon-vue.svg"/>     Vue</p>
              <p>  <input type="checkbox"/>     <img src="icon-angular.svg"/>     Angular</p>
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
