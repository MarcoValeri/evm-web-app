import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

import "./Home.scss";

const Home = () => {
    return (
        <>
            <Header pageTitle="Eventi vicino a me: oggi, domani e nel fine settimana" />
            <Main>
                <div className="home">
                    <div className="home__container-section">
                        <div className="home__container-category">
                            <CategoryCard
                                categoryCardLink="eventi-cerca/"
                                categoryCardTitle="Eventi"
                                categoryCardDescription="Vivi una vita piena di eventi"
                            />
                            <CategoryCard
                                categoryCardLink="/sagre-cerca/"
                                categoryCardTitle="Sagre"
                                categoryCardDescription="Scopri l'Italia tramite i suoi sapori"
                            />
                            <CategoryCard
                                categoryCardLink="/news-cerca/"
                                categoryCardTitle="News"
                                categoryCardDescription="Rimani aggiornato con le ultime novità"
                            />
                        </div>
                    </div>
                </div>
            </Main>
            <Footer />
        </>
    )
}

export default Home;