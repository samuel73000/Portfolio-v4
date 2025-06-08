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
          <a  href="/contact-me" className={`header-nav-projects${
              pathname === "/contact-me" ? " active" : ""
            }`}>_Contact-me</a>
        </div>
      </div>
    </header>
  );
}
