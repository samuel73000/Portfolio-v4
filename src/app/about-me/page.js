"use client"; // si tu es dans le dossier `/app`
import "../../styles/about-me.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function About() {
  const [openInfo, setOpenInfo] = useState(true);
  const [openContacts, setOpenContacts] = useState(false);
  const [openBio, setOpenBio] = useState(false);
  const [openInterests, setOpenInterests] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);

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
                  <p><img src="icon-markdown-about.svg"/>Samuel Pouard</p>
                </div>
              )}
              <p
                className='titre-section-about'
                onClick={() => setOpenInterests((o) => !o)}
                style={{ cursor: "pointer" }}>
                <img
                  src='/icon-arrow-bio-grise-about.svg'
                  style={{
                    transform: openInterests
                      ? "rotate(90deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
                <img src='/icon-interests-about.svg' /> interests
              </p>
              {openInterests && (
                <div className='content-section-about'>
                 <p><img src="icon-markdown-about.svg"/> Passsion</p>
                </div>
              )}
              <p
                className='titre-section-about'
                onClick={() => setOpenEducation((o) => !o)}
                style={{ cursor: "pointer" }}>
                <img
                  src='/icon-arrow-bio-grise-about.svg'
                  style={{
                    transform: openEducation
                      ? "rotate(90deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
                <img src='/icon-education-about.svg' /> education
              </p>
              {openEducation && (
                <div className='content-section-about'>
                    <p><img src="icon-markdown-about.svg"/> High-school</p>
    
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
            <div className="container-header-all-about-2">
        <div className="container-header-about-2">
            <p>education </p>
            <img src="icon-close.svg"/>
        </div>
        <div className="container-header-2-about-2"></div>
        </div>
        <div className="container-content-about-2">
            <div className="numero--content-about-2"></div>
            <div className="texte-content-about-2"></div>
        </div>
        </section>
        <section className='section-about-3'></section>
      </main>
      <Footer />
    </section>
  );
}
