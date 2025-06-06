"use client"; // si tu es dans le dossier `/app`
import styles from "../styles/Home.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Typewriter from "typewriter-effect";
import Snake from "./components/SnakeGame";
import { useState } from "react"; // déjà présent normalement

export default function Home() {
  const [foodLeft, setFoodLeft] = useState(30); // AJOUTE CETTE LIGNE

  return (
    <section className='section-home'>
      <Header />
      <main>
        <div className='container-effet--home'>
          <img src='effet-green-home.svg' className='effet-green-home' />
          <img src='effet-bleu-home.svg' className='effet-bleu-home' />
        </div>

        <div className='container-home-all'>
          <div className='container-home-text'>
            <div className='container-home-text-content-1'>
              <p className='container-home-text-content-1-text-1'>
                hi all.I am
              </p>
              <h1 className='container-home-text-content-1-text-2'>
                Samuel Pouard
              </h1>
              <div className='container-home-text-content-1-text-3'>
                <Typewriter
                  options={{
                    strings: [
                      'const role = "Développeur Web";',
                      'const stack = ["React", "Next.js"];',
                      "let freelance = true;",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>
            </div>
            <div className='container-home-text-content-2'>
              <p className='container-home-text-content-2-text-1'>
                // complete the game to continue
              </p>
              <p className='container-home-text-content-2-text-1'>
                // find my profile on Github
              </p>
              <p className='container-home-text-content-2-text-2'>
                <span>const</span>{" "}
                <span className='span-home-2'>githubLink</span> ={" "}
                <a
                  href='https://github.com/samuel73000'
                  className='span-home-3'>
                  {" "}
                  "https://github.com/samuel73000"
                </a>
              </p>
            </div>
          </div>
          <div className='container-home-game'>
            <div className='container-home-game-content'>
              <div className='container-home-game-content-game'>
                <Snake onFoodLeftChange={setFoodLeft} />
              </div>
              <div className='container-home-game-content-touche-all'>
                <div className='container-home-game-content-touche'>
                  <p className='container-home-game-content-touche-text-1'>
                    // use keyboard
                  </p>
                  <p className='container-home-game-content-touche-text-1'>
                    // arrows to play
                  </p>
                  <div className='arrow-keys-layout'>
                    <div className='arrow-row'>
                      <img src='/arrow-up.svg' alt='Up' className='arrow' />
                    </div>
                    <div className='arrow-row'>
                      <img src='/arrow-left.svg' alt='Left' className='arrow' />
                      <img src='/arrow-down.svg' alt='Down' className='arrow' />
                      <img
                        src='/arrow-right.svg'
                        alt='Right'
                        className='arrow'
                      />
                    </div>
                  </div>
                </div>

                <div className='container-home-game-content-food'>
                  <p className='container-home-game-content-touche-text-1'>
                    // food left
                  </p>
                  <div className='container-home-content-food-img'>
                    {[...Array(foodLeft)].map((_, index) => (
                      <img key={index} src='snake-food.svg' alt='snake food' />
                    ))}
                  </div>
                </div>

                <bouton className='btn-home-game-content-touche'>Skip</bouton>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
