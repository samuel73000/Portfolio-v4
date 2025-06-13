"use client";
import styles from "../../styles/projects.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <section>
      <Header />
      <main className='main-projects'>
        <section className='section-2-projects'>
          <div className='section-2-content-all'>
            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  {" "}
                  <span>Project 1</span> // _Kasa
                </p>
              </div>
              <div className='section-2-content-main'>
                <div className='section-2-img-tech'>
                  <img src='icon-react-2.svg' />
                </div>
                <img className='section-2-img-projects' src='kasa.svg' />
                <p>
                  Plateforme de réservation de logements réalisée avec React,
                  Redux et Ts.
                </p>
                <a href='https://kasa-4.netlify.app/'>
                  {" "}
                  <button>voir_projet</button>
                </a>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  {" "}
                  <span>Project 2</span> // _Print-it
                </p>
              </div>
              <div className='section-2-content-main'>
                <div className='section-2-img-tech'>
                  <img src='icon-react-2.svg' />
                </div>
                <img className='section-2-img-projects' src='print.svg' />
                <p>
                  Plateforme d'une agence d'impression créée avec JavaScript,
                  HTML et CSS.
                </p>
                <a href='https://print-it-3.netlify.app/'>
                  {" "}
                  <button>voir_projet</button>
                </a>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  {" "}
                  <span>Project 3</span> // _Les-petits-plats
                </p>
              </div>
              <div className='section-2-content-main'>
                <div className='section-2-img-tech'>
                  <img src='icon-css-2.svg' />
                </div>
                <img
                  className='section-2-img-projects'
                  src='lespetitsplats.svg'
                />
                <p>
                  Site de recettes variées conçu en JavaScript, HTML et CSS.
                </p>
                <a href='https://les-petits-plats-sp.netlify.app/'>
                  {" "}
                  <button>voir_projet</button>{" "}
                </a>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  {" "}
                  <span>Project 4</span> // _77events
                </p>
              </div>
              <div className='section-2-content-main'>
                <div className='section-2-img-tech'>
                  <img src='icon-vue-2.svg' />
                </div>
                <img className='section-2-img-projects' src='77events.svg' />
                <p>
                  Site d'une agence événementielle développé en React.js et CSS.
                </p>
                <a href='https://724events-6.netlify.app/'>
                  {" "}
                  <button>voir_projet</button>
                </a>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  {" "}
                  <span>Project 5</span> // _portfolio
                </p>
              </div>
              <div className='section-2-content-main'>
                <div className='section-2-img-tech'>
                  <img src='icon-vue-2.svg' />
                </div>
                <img className='section-2-img-projects' src='portfolio.png' />
                <p>Ancien portfolio développé avec Next.js, React et CSS.</p>
                <a href='https://portfolio-v2-sp.netlify.app/'>
                  <button>voir_projet</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
