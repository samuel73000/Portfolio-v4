"use client"; // si tu es dans le dossier `/app`
import styles from "../styles/Home.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Typewriter from "typewriter-effect";
import { Snake } from "react-snake-lib";

export default function Home() {
  return (
    <section className='section-home'>
      <Header />
      <main>
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
                <Snake
                  // onScoreChange={onScoreChange}
                  // onGameOver={onGameOver}
                  // onGameStart={onGameStart}
                  width='100%'
                  height='38.2vh'
                  bgColor='silver'
                  innerBorderColor='#b1b0b0'
                  snakeSpeed={90}
                  borderColor='black'
                  snakeColor='#3e3e3e'
                  snakeHeadColor='#1a1a1a'
                  appleColor='tomato'
                  borderRadius={5}
                  snakeHeadRadius={1}
                  borderWidth={0}
                  shakeBoard={true}
                  boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                  size={20}
                  startGameText='Start Game'
                  startButtonStyle={{
                    color: "white",
                    padding: "6px 20px",
                    backgroundColor: "#1a1a1a",
                    borderRadius: "10px",
                    fontSize: "17px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  startButtonHoverStyle={{
                    backgroundColor: "#4f4d4d",
                  }}
                  noWall={false}
                />
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
                    <img src='snake-food.svg' alt='snake food' />
                    <img src='snake-food.svg' alt='snake food' />
                    <img src='snake-food.svg' alt='snake food' />
                    <img src='snake-food.svg' alt='snake food' />
                    <img src='snake-food.svg' alt='snake food' />
                    <img src='snake-food.svg' alt='snake food' />
                    <img src='snake-food.svg' alt='snake food' />
                    <img src='snake-food.svg' alt='snake food' />
                    <img src='snake-food.svg' alt='snake food' />
                    <img src='snake-food.svg' alt='snake food' />
                    <img src='snake-food.svg' alt='snake food' />
                    <img src='snake-food.svg' alt='snake food' />
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
