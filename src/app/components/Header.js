import "../../styles/components/Header.css";

export default function Header() {
  return <header>
    <div className="header-all-container">
        <div className="header-nav-container">
            <p className="header-nav-name">Samuel-Pouard</p>
            <p className="header-nav-hello">_Hello</p>
            <p className="header-nav-about-me">_About-Me</p>
            <p className="header-nav-projects">_Projects</p>
        </div> 
        <div className="header-contact-container">
        <p className="header-nav-contact">_Contact-me</p>
        </div>
    </div>
  </header>;
}