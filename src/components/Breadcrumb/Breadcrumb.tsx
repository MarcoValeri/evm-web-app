import { Link } from "react-router";

import "./Breadcrumb.scss";

const Breadcrumb = () => {
    return (
        <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol className="breadcrumb__menu">
                <li className="breadcrumb__menu-list"><Link to="/" className="link-content p">Home</Link></li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;