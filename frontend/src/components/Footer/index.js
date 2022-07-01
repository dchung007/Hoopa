import { NavLink } from 'react-router-dom';
import githubLogo from '../../images/github.png';
import linkedinLogo from '../../images/linkedIn.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logos">
        <a href="https://github.com/dchung007">
          <img className="logo" src={githubLogo} />
        </a>
      </div>
      <div className="footer-aboutme">
        <NavLink to="/about">About Me</NavLink>
      </div>
      <div className="footer-logos" id="footer-logo-linkedIn">
        <a href="https://www.linkedin.com/in/david-chung-98a5651aa/">
          <img className="logo" src={linkedinLogo} />
        </a>
      </div>
    </div>

  );
}

export default Footer;
