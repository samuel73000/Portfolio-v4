"use client"; // si tu es dans le dossier `/app`
import "../../styles/about-me.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function About() {
  const [openInfo, setOpenInfo] = useState(true);
  const [openContacts, setOpenContacts] = useState(false);
  const [openBio, setOpenBio] = useState(false);
  const [openInterests, setOpenInterests] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [displayedContent, setDisplayedContent] = useState({
    title: "Samuel Pouard",
    content: `/**
 * À propos de moi
 *
 * Je suis doublement diplômé de l'école OpenClassRooms,
 * avec un diplôme d'intégrateur web et un diplôme de
 * développeur front-end spécialisé React.
 *
 * Après mes études, je me suis lancé en freelance,
 * où j'exerce depuis plus de 2 ans.
 *
 * Mes compétences clés incluent React et Next.js,
 * avec une forte appétence pour le développement
 * d'interfaces modernes, performantes et accessibles.
 *
 * Ce portfolio a pour objectif de présenter mon travail,
 * dans l'espoir de trouver à la fois des clients
 * et des opportunités d'emploi.
 *
 * Je privilégie une approche professionnelle,
 * rigoureuse et orientée résultats.
 */`,
  });
  const code = `
 function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}
  `;

  const handleContentClick = (type) => {
    switch (type) {
      case "bio":
        setDisplayedContent({
          title: "Samuel Pouard",
          content: `/**
 * À propos de moi
 *
 * Je suis doublement diplômé de l'école OpenClassRooms,
 * avec un diplôme d'intégrateur web et un diplôme de
 * développeur front-end spécialisé React.
 *
 * Après mes études, je me suis lancé en freelance,
 * où j'exerce depuis plus de 2 ans.
 *
 * Mes compétences clés incluent React et Next.js,
 * avec une forte appétence pour le développement
 * d'interfaces modernes, performantes et accessibles.
 *
 * Ce portfolio a pour objectif de présenter mon travail,
 * dans l'espoir de trouver à la fois des clients
 * et des opportunités d'emploi.
 *
 * Je privilégie une approche professionnelle,
 * rigoureuse et orientée résultats.
 */
`,
        });
        setIsHeaderVisible(true);
        setIsContentVisible(true);
        break;
      case "interests":
        setDisplayedContent({
          title: "Passion",
          content: `/**
 * Centres d'intérêt et passions
 *
 * Je suis passionné par le développement web,
 * en particulier par la création d'interfaces
 * utilisateurs à la fois élégantes et fonctionnelles.
 *
 * J'aime explorer de nouvelles technologies
 * et rester à jour sur les dernières tendances du web.
 *
 * En dehors du code, je m'intéresse également
 * à la photographie et aux activités en plein air.
 */
`,
        });
        setIsHeaderVisible(true);
        setIsContentVisible(true);
        break;
      case "close":
        setDisplayedContent({
          title: "",
          content: "",
        });
        setIsHeaderVisible(false);
        setIsContentVisible(false);
        break;
    }
  };

  return (
    <section>
      <Header />
      <main className='main-about'>
        <div className='container-logo'>
          <img
            src='/about-menu-icons-1.svg'
            alt='icons'
            className='about-menu-icon'
          />
          <img
            src='/about-menu-icons-2.svg'
            alt='icons'
            className='about-menu-icon'
          />
          <img
            src='/about-menu-icons-3.svg'
            alt='icons'
            className='about-menu-icon'
          />
          <p className='apropos-mobile-text'>_À-propos-de-moi</p>
        </div>
        <section className='section-about-1'>
          <div className='container-persoInfo-about-1'>
            <p
              className={"titre-persoInfo-about-1"}
              onClick={() => setOpenInfo((o) => !o)}>
              <img
                alt='icons'
                className='fleche-titre-about-1'
                src='/icon-arrow-about-pleine.svg'
                style={{
                  transform: openInfo ? "rotate(0deg)" : "rotate(270deg)",
                  transition: "transform 0.2s",
                }}
              />{" "}
              Info-personnelles
            </p>
            <div
              className='container-menu-persoInfo-about-1'
              style={{
                display: openInfo ? "flex" : "none",
                flexDirection: "column",
                gap: "10px",
                paddingTop: openInfo ? "4px" : "0",
                paddingBottom: openInfo ? "12px" : "0",
              }}>
              <p
                className='titre-section-about'
                onClick={() => setOpenBio((o) => !o)}
                style={{ cursor: "pointer" }}>
                <img
                  alt='icons'
                  src='/icon-arrow-bio-grise-about.svg'
                  style={{
                    transform: openBio ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
                <img src='/icon-bio-about.svg' alt='icons' /> bio
              </p>
              {openBio && (
                <div className='content-section-about'>
                  <p>
                    <img src='icon-markdown-about.svg' alt='icons' />
                    <span
                      onClick={() => handleContentClick("bio")}
                      style={{ cursor: "pointer" }}>
                      Samuel Pouard
                    </span>
                  </p>
                </div>
              )}
              <p
                className='titre-section-about'
                onClick={() => setOpenInterests((o) => !o)}
                style={{ cursor: "pointer" }}>
                <img
                  alt='icons'
                  src='/icon-arrow-bio-grise-about.svg'
                  style={{
                    transform: openInterests ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
                <img src='/icon-interests-about.svg' alt='icons' />
                centres-d'intérêt
              </p>
              {openInterests && (
                <div className='content-section-about'>
                  <p>
                    <img src='icon-markdown-about.svg' alt='icons' />
                    <span
                      onClick={() => handleContentClick("interests")}
                      style={{ cursor: "pointer" }}>
                      Passsion
                    </span>
                  </p>
                </div>
              )}
            </div>

            <p
              className={`contacts-persoInfo-about-1`}
              onClick={() => setOpenContacts((o) => !o)}>
              <img
                alt='icons'
                className='fleche-contact-about-1'
                src='/icon-arrow-about-pleine.svg'
                style={{
                  transform: openContacts ? "rotate(0deg)" : "rotate(270deg)",
                  transition: "transform 0.2s",
                }}
              />{" "}
              contacts
            </p>
            <div
              className='container-persoInfo-mail-about-1'
              style={{
                visibility: openContacts ? "visible" : "hidden",
                height: openContacts ? "auto" : 0,
                opacity: openContacts ? 1 : 0,
                transition: "opacity 0.2s",
              }}>
              <p>
                <img src='/icon-mail-about.svg' alt='icons' />{" "}
                samuelpouardpro@gmail.com
              </p>
              <p>
                <img src='/icon-phone-about.svg' alt='icons' /> +33 7 43 33 55
                48
              </p>
            </div>
          </div>
        </section>
        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!section 2!!!!!!!!!!!!!!!!!!!!! */}
        <section className='section-about-2'>
          <div className='container-header-all-about-2'>
            <div
              className='container-header-about-2'
              style={{
                borderRight: isHeaderVisible ? "1px solid #314158" : "none",
              }}>
              <p>{displayedContent.title}</p>
              <img
                alt='icons'
                src='icon-close.svg'
                onClick={() => handleContentClick("close")}
                // style={{ cursor: "pointer" }}
                style={{
                  display: isHeaderVisible ? "flex" : "none",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className='container-header-2-about-2'></div>
          </div>

          <div className='container-content-about-2'>
            <div
              className='numero--content-about-2'
              style={{ display: isContentVisible ? "block" : "none" }}>
              {[...Array(41)].map((_, index) => (
                <p key={index}>{index + 1}</p>
              ))}
            </div>
            <div
              className='texte-content-about-2'
              style={{ display: isContentVisible ? "block" : "none" }}>
              <h1>À propos de moi</h1>
              <p>{displayedContent.content}</p>
            </div>
          </div>
        </section>
        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!section 3 !!!!!!!!!!!!!!!!!!!!!!! */}
        <section className='section-about-3'>
          <div className='container-header-about-3'></div>

          <div className='container-content-all-about-3'>
            <div className='container-content-left-about-3'>
              <div className='bloc-about'></div>
            </div>

            <div className='container-content-about-3'>
              <h2 className='titre-about-3'>
                // Extrait de code à l'honneur :
              </h2>

              <div>
                <div className='container-main-content-code-about-3'>
                  <div className='container-code-texte-content-about-3'>
                    <img src='avatar-1-about.svg' alt='icons' />
                    <div className='container-code-texte-username-all-content-about-3'>
                      <div className='container-code-texte-username-content-about-3'>
                        <h3>@username</h3>
                        <p>créé il y a 5 mois</p>
                      </div>
                      <div className='container-code-texte-details-content-about-3'>
                        <p>
                          {" "}
                          <img src='Icon-comment-about.svg' alt='icons' />{" "}
                          details
                        </p>
                        <p>
                          {" "}
                          <img
                            src='Stars-Icon-pleine-about.svg'
                            alt='icons'
                          />{" "}
                          3 stars
                        </p>
                      </div>
                    </div>
                  </div>
                  <SyntaxHighlighter
                    language='javascript'
                    style={vscDarkPlus}
                    className='container-code-content-about-3'>
                    {code}
                  </SyntaxHighlighter>
                </div>
              </div>

              <div className='container-main-content-code-about-3'>
                <div className='container-code-texte-content-about-3'>
                  <img src='avatar-2-about.svg' alt='icons' />
                  <div className='container-code-texte-username-all-content-about-3'>
                    <div className='container-code-texte-username-content-about-3'>
                      <h3>@username</h3>
                      <p>créé il y a 5 mois</p>
                    </div>
                    <div className='container-code-texte-details-content-about-3'>
                      <p>
                        {" "}
                        <img src='Icon-comment-about.svg' alt='icons' /> details
                      </p>
                      <p>
                        {" "}
                        <img src='Stars-Icon-vide-about.svg' alt='icons' /> 3
                        stars
                      </p>
                    </div>
                  </div>
                </div>
                <SyntaxHighlighter
                  language='javascript'
                  style={vscDarkPlus}
                  className='container-code-content-about-3'>
                  {code}
                </SyntaxHighlighter>
              </div>
            </div>

            <div className='container-content-right-about-3'>
              <div className='bloc-about'></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
