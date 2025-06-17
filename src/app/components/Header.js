"use client";
import { usePathname } from "next/navigation";
import "../../styles/components/Header.css";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header>
      <div className='header-all-container'>
        <div className='header-left-group'>
          <p className='header-nav-name'>Samuel-Pouard</p>
          <div className='header-nav-container'>
            <a
              href='/'
              className={`header-nav-hello${
                pathname === "/" ? " active" : ""
              }`}>
              _Home
            </a>
            <a
              href='/about-me'
              className={`header-nav-about-me${
                pathname === "/about-me" ? " active" : ""
              }`}>
              _À_propos_de_moi
            </a>
            <a
              href='/projects'
              className={`header-nav-projects${
                pathname === "/projects" ? " active" : ""
              }`}>
              _Projets
            </a>
          </div>
        </div>
        <div className='header-contact-container'>
          <a
            href='/contact-me'
            className={`header-nav-contact${
              pathname === "/contact-me" ? " active" : ""
            }`}>
            _Me_Contacter
          </a>
        </div>
        <button className='hamburger-icon' onClick={toggleMobileMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div
          className={`mobile-menu-overlay${isMobileMenuOpen ? " open" : ""}`}>
          <div className='mobile-menu-header'>
            <a
              href='/'
              className='header-nav-name-menu'
              onClick={toggleMobileMenu}>
              Samuel-Pouard
            </a>
            <button className='close-icon' onClick={toggleMobileMenu}>
              &times; {/* Close icon */}
            </button>
          </div>
          <div className='mobile-menu-links'>
            <p className='navigate-text'># navigate:</p>
            <a
              href='/'
              className={`mobile-nav-link${pathname === "/" ? " active" : ""}`}
              onClick={toggleMobileMenu}>
              _hello
            </a>
            <a
              href='/about-me'
              className={`mobile-nav-link${
                pathname === "/about-me" ? " active" : ""
              }`}
              onClick={toggleMobileMenu}>
              _À_propos_de_moi
            </a>
            <a
              href='/projects'
              className={`mobile-nav-link${
                pathname === "/projects" ? " active" : ""
              }`}
              onClick={toggleMobileMenu}>
              _Projets
            </a>
            <a
              href='/contact-me'
              className={`mobile-nav-link${
                pathname === "/contact-me" ? " active" : ""
              }`}
              onClick={toggleMobileMenu}>
              _Me_Contacter
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
