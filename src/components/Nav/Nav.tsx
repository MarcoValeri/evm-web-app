import { Link, useLocation } from "react-router";
import "./Nav.scss";

const Nav = () => {

    const location = useLocation();
    const highlightTheLink = (getLocation: string) => location.pathname === getLocation ? 'link-mark' : '';

    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <label htmlFor="nav menu" aria-label="nav menu"></label>
                <input id="nav menu" name="nav menu" className="nav__input" type="checkbox" aria-label="nav menu" />
                <span className="nav__span"></span>
                <span className="nav__span"></span>
                <span className="nav__span"></span>
                <ul className="nav__menu">
                    <li className="nav__menu-item"><Link to="/" className={`link-no p-lg link-effect-load ${highlightTheLink('/')}`} rel="noopener noreferrer">Home</Link></li>
                    <li className="nav__menu-item"><Link to="/" className={`link-no p-lg link-effect-load ${highlightTheLink('/news-cerca')}`} rel="noopener noreferrer">News</Link></li>
                    <li className="nav__menu-item"><Link to="/" className={`link-no p-lg link-effect-load ${highlightTheLink('/eventi-cerca')}`} rel="noopener noreferrer">Eventi</Link></li>
                    <li className="nav__menu-item"><Link to="/" className={`link-no p-lg link-effect-load ${highlightTheLink('/sagre-cerca')}`} rel="noopener noreferrer">Sagre</Link></li>
                    <li className="nav__menu-item"><Link to="/" className={`link-no p-lg link-effect-load ${highlightTheLink('/page/chi-siamo')}`} rel="noopener noreferrer">Chi Siamo</Link></li>
                    <li className="nav__menu-item"><Link to="/" className={`link-no p-lg link-effect-load ${highlightTheLink('/page/contatti')}`} rel="noopener noreferrer">Contatti</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;