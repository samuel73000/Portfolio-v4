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
                  <span>Project 1</span> // _Popsy
                </p>
              </div>
              <div className='section-2-content-main'>
                <img className='section-2-img-projects' src='popsy.png' />
                <p>
                  Site de présentation moderne et rapide pour un éditeur de site
                  Notion. Développé en Next.js.
                </p>
                <a href='https://popsy.co' target='_blank'>
                  <button>voir_projet</button>
                </a>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  <span>Project 2</span> // _Typogram
                </p>
              </div>
              <div className='section-2-content-main'>
                <img className='section-2-img-projects' src='typogram.png' />
                <p>
                  Landing page épurée pour un outil de création de logos. Conçu
                  avec Next.js et Tailwind.
                </p>
                <a href='https://typogram.co' target='_blank'>
                  <button>voir_projet</button>
                </a>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  <span>Project 3</span> // _Linear
                </p>
              </div>
              <div className='section-2-content-main'>
                <img className='section-2-img-projects' src='linear.png' />
                <p>
                  Interface moderne d'outil de gestion de projets. Fait en
                  Next.js avec animations fluides.
                </p>
                <a href='https://linear.app' target='_blank'>
                  <button>voir_projet</button>
                </a>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  <span>Project 4</span> // _Paul James Photography
                </p>
              </div>
              <div className='section-2-content-main'>
                <img className='section-2-img-projects' src='pauljames.png' />
                <p>
                  Portfolio d'un photographe. Design minimaliste avec galerie
                  responsive sous WordPress.
                </p>
                <a href='https://www.pauljamesphotography.com' target='_blank'>
                  <button>voir_projet</button>
                </a>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  <span>Project 5</span> // _Eleven Madison Park
                </p>
              </div>
              <div className='section-2-content-main'>
                <img className='section-2-img-projects' src='eleven.png' />
                <p>
                  Site d'un restaurant étoilé. Expérience immersive, intégration
                  réservation et menu.
                </p>
                <a href='https://www.elevenmadisonpark.com' target='_blank'>
                  <button>voir_projet</button>
                </a>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  <span>Project 6</span> // _Blue Star Coffee
                </p>
              </div>
              <div className='section-2-content-main'>
                <img className='section-2-img-projects' src='bluestar.png' />
                <p>
                  Boutique WooCommerce pour torréfacteur local. Mise en avant
                  des produits et blog intégré.
                </p>
                <a
                  href='https://www.bluestarcoffeeroasters.com'
                  target='_blank'>
                  <button>voir_projet</button>
                </a>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  <span>Project 7</span> // _Soapbox
                </p>
              </div>
              <div className='section-2-content-main'>
                <img className='section-2-img-projects' src='soapbox.png' />
                <p>
                  Boutique en ligne simple et efficace sous WooCommerce.
                  Produits d'hygiène naturelle.
                </p>
                <a href='https://soapboxsoaps.com' target='_blank'>
                  <button>voir_projet</button>
                </a>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  <span>Project 8</span> // _Gymshark
                </p>
              </div>
              <div className='section-2-content-main'>
                <img className='section-2-img-projects' src='gymshark.png' />
                <p>
                  Site officiel de la marque de sport. Shopify avancé avec UI
                  personnalisée.
                </p>
                <a href='https://www.gymshark.com' target='_blank'>
                  <button>voir_projet</button>
                </a>
              </div>
            </div>

            <div className='section-2-content'>
              <div className='section-2-content-titre'>
                <p>
                  <span>Project 9</span> // _Allbirds
                </p>
              </div>
              <div className='section-2-content-main'>
                <img className='section-2-img-projects' src='allbirds.png' />
                <p>
                  E-commerce Shopify écoresponsable. Design sobre et rapide,
                  optimisé pour mobile.
                </p>
                <a href='https://www.allbirds.com' target='_blank'>
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
