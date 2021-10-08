import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";


export function Social() {
  return (
    <div className="social d-none d-lg-flex">
      <a href="https://www.facebook.com/portalcatalao" target="_blank" rel="noreferrer" className="icon-circle">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/portalcatalao" target="_blank" rel="noreferrer" className="icon-circle">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/company/portal-catalao-internet-service/mycompany/" target="_blank" rel="noopener noreferrer" className="icon-circle">
        <FaLinkedinIn />
      </a>
      <a href="https://twitter.com/portalcatalao" target="_blank" rel="noreferrer" className="icon-circle">
        <FaTwitter />
      </a>
    </div >
  );
}
