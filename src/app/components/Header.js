"use client";
import { usePathname } from "next/navigation";
import "../../styles/components/Header.css";

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <div className='header-all-container'>
        <div className='header-nav-container'>
          <p className='header-nav-name'>Samuel-Pouard</p>
          <a
            href='/'
            className={`header-nav-hello${pathname === "/" ? " active" : ""}`}>
            _Hello
          </a>
          <a
            href='/about-me'
            className={`header-nav-about-me${
              pathname === "/about-me" ? " active" : ""
            }`}>
            _About-Me
          </a>
          <a
            href='/projects'
            className={`header-nav-projects${
              pathname === "/projects" ? " active" : ""
            }`}>
            _Projects
          </a>
        </div>
        <div className='header-contact-container'>
          <p className='header-nav-contact'>_Contact-me</p>
        </div>
      </div>
    </header>
  );
}
