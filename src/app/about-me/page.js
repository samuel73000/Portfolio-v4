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
  const [openEducation, setOpenEducation] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [displayedContent, setDisplayedContent] = useState({
    title: "Samuel Pouard",
    content: `/** * About me * I have 5 years of еxperience in web *
    development lorem ipsum dolor sit amet, * consectetur adipiscing
    elit, sed do eiusmod * tempor incididunt ut labore et dolore *
    magna aliqua. Ut enim ad minim veniam, * quis nostrud
    exercitation ullamco laboris * nisi ut aliquip ex ea commodo
    consequat. * Duis aute irure dolor in reprehenderit in * * Duis
    aute irure dolor in reprehenderit in * voluptate velit esse
    cillum dolore eu fugiat * nulla pariatur. Excepteur sint
    occaecat * officia deserunt mollit anim id est laborum. */`,
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
          content: `/** * About me * I have 5 years of еxperience in web *
          development lorem ipsum dolor sit amet, * consectetur adipiscing
          elit, sed do eiusmod * tempor incididunt ut labore et dolore *
          magna aliqua. Ut enim ad minim veniam, * quis nostrud
          exercitation ullamco laboris * nisi ut aliquip ex ea commodo
          consequat. * Duis aute irure dolor in reprehenderit in * * Duis
          aute irure dolor in reprehenderit in * voluptate velit esse
          cillum dolore eu fugiat * nulla pariatur. Excepteur sint
          occaecat * officia deserunt mollit anim id est laborum. */`,
        });
        setIsHeaderVisible(true);
        break;
      case "interests":
        setDisplayedContent({
          title: "Passion",
          content: `/** * My interests and passions * I am passionate about web development,
          * particularly in creating beautiful and * functional user interfaces.
          * I enjoy exploring new technologies * and staying up to date with
          * the latest trends in web development. * I also love photography
          * and outdoor activities. */`,
        });
        setIsHeaderVisible(true);
        break;
      case "education":
        setDisplayedContent({
          title: "High-school",
          content: `/** * Education * I completed my high school education with
          * a focus on computer science and mathematics. * This foundation
          * helped me develop strong analytical * and problem-solving skills
          * that I use in my daily work. */`,
        });
        setIsHeaderVisible(true);
        break;
      case "close":
        setDisplayedContent({
          title: "",
          content: "",
        });
        setIsHeaderVisible(false);
        break;
    }
  };

  return (
    <section>
      <Header />
      <main className='main-about'>
        <div className='container-logo'>
          <img src='/about-menu-icons-1.svg' />
          <img src='/about-menu-icons-2.svg' />
          <img src='/about-menu-icons-3.svg' />
        </div>
        <section className='section-about-1'>
          <div className='container-persoInfo-about-1'>
            <p
              className={"titre-persoInfo-about-1"}
              onClick={() => setOpenInfo((o) => !o)}>
              <img
                className='fleche-titre-about-1'
                src='/icon-arrow-about-pleine.svg'
                style={{
                  transform: openInfo ? "rotate(0deg)" : "rotate(270deg)",
                  transition: "transform 0.2s",
                }}
              />{" "}
              personal-info
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
                  src='/icon-arrow-bio-grise-about.svg'
                  style={{
                    transform: openBio ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
                <img src='/icon-bio-about.svg' /> bio
              </p>
              {openBio && (
                <div className='content-section-about'>
                  <p>
                    <img src='icon-markdown-about.svg' />
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
                  src='/icon-arrow-bio-grise-about.svg'
                  style={{
                    transform: openInterests ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
                <img src='/icon-interests-about.svg' /> interests
              </p>
              {openInterests && (
                <div className='content-section-about'>
                  <p>
                    <img src='icon-markdown-about.svg' />
                    <span
                      onClick={() => handleContentClick("interests")}
                      style={{ cursor: "pointer" }}>
                      Passsion
                    </span>
                  </p>
                </div>
              )}
              <p
                className='titre-section-about'
                onClick={() => setOpenEducation((o) => !o)}
                style={{ cursor: "pointer" }}>
                <img
                  src='/icon-arrow-bio-grise-about.svg'
                  style={{
                    transform: openEducation ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
                <img src='/icon-education-about.svg' /> education
              </p>
              {openEducation && (
                <div className='content-section-about'>
                  <p>
                    <img src='icon-markdown-about.svg' />
                    <span
                      onClick={() => handleContentClick("education")}
                      style={{ cursor: "pointer" }}>
                      High-school
                    </span>
                  </p>
                </div>
              )}
            </div>
            <p
              className={`contacts-persoInfo-about-1`}
              onClick={() => setOpenContacts((o) => !o)}>
              <img
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
                <img src='/icon-mail-about.svg' /> samuelpouardpro@gmail.com
              </p>
              <p>
                <img src='/icon-phone-about.svg' /> +33 7 43 33 55 48
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
            <div className='numero--content-about-2'>
              {[...Array(41)].map((_, index) => (
                <p key={index}>{index + 1}</p>
              ))}
            </div>
            <div className='texte-content-about-2'>
              <h2>About me</h2>
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
              <h2 className='titre-about-3'>// Code snippet showcase:</h2>

              <div>
                <div className='container-main-content-code-about-3'>
                  <div className='container-code-texte-content-about-3'>
                    <img src='avatar-1-about.svg' />
                    <div className='container-code-texte-username-all-content-about-3'>
                      <div className='container-code-texte-username-content-about-3'>
                        <h3>@username</h3>
                        <p>created 5 months ago</p>
                      </div>
                      <div className='container-code-texte-details-content-about-3'>
                        <p>
                          {" "}
                          <img src='Icon-comment-about.svg' /> details
                        </p>
                        <p>
                          {" "}
                          <img src='Stars-Icon-pleine-about.svg' /> 3 stars
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
                  <img src='avatar-2-about.svg' />
                  <div className='container-code-texte-username-all-content-about-3'>
                    <div className='container-code-texte-username-content-about-3'>
                      <h3>@username</h3>
                      <p>created 5 months ago</p>
                    </div>
                    <div className='container-code-texte-details-content-about-3'>
                      <p>
                        {" "}
                        <img src='Icon-comment-about.svg' /> details
                      </p>
                      <p>
                        {" "}
                        <img src='Stars-Icon-vide-about.svg' /> 3 stars
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
