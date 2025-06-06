"use client"; // si tu es dans le dossier `/app`
import "../../styles/about-me.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
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
            <p className='titre-persoInfo-about-1'> <img  src="/icon-arrow-about-pleine.svg"/>   personal-info</p>
            <div className='container-menu-persoInfo-about-1'>
              <p>
                <img src='/icon-bio-about.svg' /> bio
              </p>
              <p>
                {" "}
                <img src='/icon-interests-about.svg' /> interests
              </p>
              <p>
                {" "}
                <img src='/icon-education-about.svg' /> education
              </p>
            </div>
            <p className='contacts-persoInfo-about-1'><img src="/icon-arrow-about-pleine.svg"/>  contacts</p>
            <div className='container-persoInfo-mail-about-1'>
              <p>
                {" "}
                <img src='/icon-mail-about.svg' /> samuelpouardpro@gmail.com
              </p>
              <p>
                {" "}
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
