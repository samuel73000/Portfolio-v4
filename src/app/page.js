'use client'; // si tu es dans le dossier `/app`
import styles from "../styles/Home.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <section className="section-home">
      <Header />
      <main>
        <div className="container-home-all">
        <div className="container-home-text">
          <div className="container-home-text-content-1">
          <p className="container-home-text-content-1-text-1">hi all.I am</p>
          <h1 className="container-home-text-content-1-text-2">Samuel Pouard</h1>
          <div className="container-home-text-content-1-text-3">
          <Typewriter
  options={{
    strings: [
      'const role = "Développeur Web";',
      'const stack = ["React", "Next.js"];',
      'let freelance = true;',
    ],
    autoStart: true,
    loop: true,
    delay: 50,
    deleteSpeed: 30,
  }}
/>
</div>
          </div>
          <div className="container-home-text-content-2">
          <p className="container-home-text-content-2-text-1">// complete the game to continue</p>
          <p className="container-home-text-content-2-text-1">// find my profile on Github</p>
          <p className="container-home-text-content-2-text-2"><span>const</span> <span className="span-home-2">githubLink</span> = <a href="https://github.com/samuel73000" className="span-home-3"> "https://github.com/samuel73000"</a></p>
          </div>
        </div>
        <div className="container-home-game">
         game
        </div>
        </div>
      </main>
      <Footer />
    </section> 
  );
}
