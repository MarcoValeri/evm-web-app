import "./Main.scss";

import FacebookOfficialLogoSmall from "../../images/facebook-official-logo-small.png";

type Props = {
    children: React.ReactNode;
}

const Main = (props: Props) => {
    return (
        <main className="main">
            <div className="main__container-content">{props.children}</div>
            <aside className="main__container-sidebar">
                <div className="main__container-sidebar-single-menu">
                    <h2 className="h2">Segui <em>Eventi Vicino a Me</em> su:</h2>
                    <div className="main__sidebar-single-menu-wrapper-icon">
                        <a href="https://www.facebook.com/eventivicinoame/" target="_blank"><img className="main__sidebar-menu-icon" src={FacebookOfficialLogoSmall} alt="Facebook logo ufficiale by Meta" width="80" height="80" /></a>
                    </div>
                </div>
                <div className="main__container-sidebar-single-menu main__container-sidebar-single-menu--button">
                    <h2 className="main__sidebar-menu-title h2">Cerca tra le sagre di <em>Eventi Vicino a Me</em></h2>
                    <a className="button" href="/sagre-cerca/">Scopri tutte le sagre</a>
                </div>
                <div className="main__container-sidebar-single-menu">
                    <h2 className="h2">Le Sagre dell'anno di <em>Eventi Vicino a Me</em></h2>
                    <ul className="list-ul-ol-menu">
                        <li className="list-item"><p className="p-lg"><a className="link" href="/sagre/sagre-gennaio">Le sagre di gennaio 2025</a></p></li>
                        <li className="list-item"><p className="p-lg"><a className="link" href="/sagre/sagre-ottobre">Le sagre di ottobre 2025</a></p></li>
                        <li className="list-item"><p className="p-lg"><a className="link" href="/sagre/sagre-novembre">Le sagre di novembre 2025</a></p></li>
                        <li className="list-item"><p className="p-lg"><a className="link" href="/sagre/sagre-dicembre">Le sagre di dicembre 2024</a></p></li>
                    </ul>
                </div>
                <div className="main__container-sidebar-single-menu">
                    <h2 className="h2">Le Sagre di <em>Eventi Vicino a Me</em> stagione per stagione</h2>
                    <ul className="list-ul-ol-menu">
                        <li className="list-item"><p className="p-lg"><a className="link" href="/sagre/sagre-autunno">Le sagre in autunno 2024</a></p></li>
                    </ul>
                </div>
                <div className="main__container-sidebar-single-menu main__container-sidebar-single-menu--button">
                    <h2 className="main__sidebar-menu-title h2">Cerca tra gli eventi di <em>Eventi Vicino a Me</em></h2>
                    <a className="button" href="/eventi-cerca/">Scopri tutte gli eventi</a>
                </div>
                <div className="main__container-sidebar-single-menu">
                    <h2 className="h2">Gli eventi dell'anno di <em>Eventi Vicino a Me</em></h2>
                    <ul className="list-ul-ol-menu">
                        <li className="list-item"><p className="p-lg"><a className="link" href="/eventi/eventi-gennaio">Eventi di gennaio 2025</a></p></li>
                        <li className="list-item"><p className="p-lg"><a className="link" href="/eventi/eventi-novembre">Eventi di novembre 2025</a></p></li>
                        <li className="list-item"><p className="p-lg"><a className="link" href="/eventi/eventi-dicembre">Eventi di dicembre 2024</a></p></li>
                    </ul>
                </div>
                <div className="main__container-sidebar-single-menu">
                    <h2 className="h2">Gli eventi imperdibili di <em>Eventi Vicino a Me</em></h2>
                    <ul className="list-ul-ol-menu">
                        <li className="list-item"><p className="p-lg"><a className="link" href="/eventi/mercatini-di-natale">Mercatini di Natale 2024</a></p></li>
                    </ul>
                </div>
            </aside>
        </main>
    )
}

export default Main;