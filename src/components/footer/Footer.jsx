import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="" className="footer__socials-link">
            <FaTwitter />
          </a>
          <a href="" className="footer__socials-link">
            <FaDribbble />
          </a>
          <a href="" className="footer__socials-link">
            <FaBehance />
          </a>
        </div>

        <p className="footer__cobyright text-cs">
          &coby; 2023 <span>Luique</span>. All Rights Reserved
        </p>
        <p className="footer__cobyright text-cs">
          Developed by <span>Noor H</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
