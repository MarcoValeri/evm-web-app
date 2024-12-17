import { getCurrentYear } from "../../util/dateAndTime";

import "./Footer.scss";

import EventiVicinoAMeLogo from "../../images/eventi-vicino-a-me-logo.png";
import FacebookOfficialLogoSmall from "../../images/facebook-official-logo-small.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container-logo">
                <a href="/">
                    <img loading="lazy" className="footer__logo" src={EventiVicinoAMeLogo} alt="Ape, il logo ufficiale di Eventi Vicino A Me" />
                </a>
            </div>
            <div className="footer__container-social">
                <p className="p-lg">Seguici su:</p>
                <a href="https://www.facebook.com/eventivicinoame/" target="_blank"><img className="footer__social-icon" src={FacebookOfficialLogoSmall} alt="Facebook logo ufficiale by Meta" width="80" height="80" /></a>
            </div>
            <div className="footer__container-content">
                <p className="p"><a className="footer__link-cookie-policy link-effect-load" href="/page/cookie-policy">Cookie Policy</a> - <a className="footer__link-privacy-policy link-effect-load" href="/page/privacy-policy">Privacy Policy</a></p>
                <p className="p">Made with <span className="footer__heart">&hearts;</span>, in London - &copy; {getCurrentYear()} - All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;