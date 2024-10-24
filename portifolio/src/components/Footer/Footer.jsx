import "./Footer.css";

// Context
import { useLanguage } from "../../context/LanguageContext";

// SVGs
import Instagram from "../../assets/icons/instagram.svg";
import Github from "../../assets/icons/github.svg";
import Gmail from "../../assets/icons/gmail.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="footer">
      <h2 className="contact-title">{t("footer", "contact")}</h2>
      <div className="contact-card">
        <a
          href="https://www.instagram.com/eros_netto"
          target="_blank"
          rel="noopener noreferrer"
          className="socialContainer containerOne"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
        <a
          href="https://github.com/ErosNetto"
          target="_blank"
          rel="noopener noreferrer"
          className="socialContainer containerTwo"
        >
          <img src={Github} alt="GitHub" />
        </a>
        <a
          href="mailto:erosnetto1002@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="socialContainer containerThree"
        >
          <img src={Gmail} alt="Email" />
        </a>
        <a
          href="https://www.linkedin.com/in/eros-netto/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialContainer containerFour"
        >
          <img src={Linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://wa.me/5541984942439"
          target="_blank"
          rel="noopener noreferrer"
          className="socialContainer containerFive"
        >
          <img src={Whatsapp} alt="WhatsApp" />
        </a>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} {t("footer", "copyright")}
      </p>
    </footer>
  );
};

export default Footer;
