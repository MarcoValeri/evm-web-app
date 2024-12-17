import Nav from "../Nav/Nav";

import "./Header.scss";

import EventiVicinoAMeLogo from "../../images/eventi-vicino-a-me-logo.png";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const Header = ({ pageTitle }: {pageTitle: string}) => {
    return (
        <header className="header">
            <div className="header__container-nav">
                <Nav />
            </div>
            <div className="header__container-title">
                <h1 className="h1">Eventi Vicino A Me +</h1>
                <h2 className="h2">{pageTitle}</h2>
                <a href="/">
                    <img loading="lazy" className="header__logo" src={EventiVicinoAMeLogo} alt="Ape, il logo ufficiale di Eventi Vicino A Me" width="250" height="150" />
                </a>
            </div>
            <Breadcrumb />
            {/* <nav aria-label="Breadcrumb" className="breadcrumb">{{template "breadcrumb" .}}</nav> */}
        </header>
    )
}

export default Header;