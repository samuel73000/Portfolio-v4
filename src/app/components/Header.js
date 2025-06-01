import "../../styles/components/Header.css";

export default function Header() {
  return <header>
    <div className="header-all-container">
        <div className="header-nav-container">
            <p>Samuel-Pouard</p>
            <p>_hello</p>
            <p>_about-me</p>
            <p>_projects</p>
        </div> 
        <div className="header-contact-container">
        <p>_contact</p>
        </div>
    </div>
  </header>;
}