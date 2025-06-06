"use client"; // si tu es dans le dossier `/app`
import "../../styles/about-me.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function About() {
  const [openInfo, setOpenInfo] = useState(true);
  const [openContacts, setOpenContacts] = useState(false);

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
              <p>
                <img src='/icon-arrow-bio-grise-about.svg' />
                <img src='/icon-bio-about.svg' /> bio
              </p>
              <p>
                <img src='/icon-arrow-bio-grise-about.svg' />
                <img src='/icon-interests-about.svg' /> interests
              </p>
              <p>
                <img src='/icon-arrow-bio-grise-about.svg' />
                <img src='/icon-education-about.svg' /> education
              </p>
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
        <section className='section-about-2'></section>
        <section className='section-about-3'></section>
      </main>
      <Footer />
    </section>
  );
}
