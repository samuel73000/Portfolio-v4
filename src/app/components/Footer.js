import "../../styles/components/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className='footer-all-container'>
        <div className='footer-nav-container'>
          <p className='footer-nav-name'>Find me in:</p>
          <p className='footer-nav-hello'>
            {" "}
           <a href="https://www.linkedin.com/in/samuel-pouard/"> <img src='/icon-linkedin.svg' alt='linkedin' /></a>
          </p>
        </div>
        <p className='footer-nav-name'>© 2025 Samuel-Pouard</p>
        <div className='footer-contact-container'>
          <div className='footer-nav-contact'>
           <a href="https://github.com/samuel73000"> <span>@samuel73000</span></a>
            <img src='/icon-git.svg' alt='git' />
          </div>
        </div>
      </div>
    </footer>
  );
}
