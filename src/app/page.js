import styles from "../styles/Home.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <section className="section-home">
      <Header />
      <main>
        <div className="container-home-all">
        <div className="container-home-text">
          <h1>Hello</h1>
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
