import ArticleCard from "../../components/ArticleCard/ArticleCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

import { SAGRE } from "../../data/sagre";

import "./Home.scss";

const Home = () => {
    console.log(SAGRE);
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
                    <div className="home__container-section">
                        <div className="home__container-title">
                            <h2 className="h2">Le ultime sagre ti <em>Eventi Vicino a Me</em></h2>
                        </div>
                        {
                        SAGRE
                        ?
                        SAGRE.map(
                            (sagra, index) => <ArticleCard
                                    key={index} 
                                    articleCardTitle={sagra.sagraTitle}
                                    articleCardDescription={sagra.sagraDescription}
                                    articleCardUrl={sagra.sagraURL}
                                    articleImageUrl={sagra.sagraImageUrl}
                                    articleImageAlt={sagra.sagraImageAlt}
                                    />
                        )
                        :
                        <div className="home__container-no-found">
                            <h4 className="h4">Nessuna sagra disponibile al momento</h4>
                        </div>
                        }
                    </div>
                </div>
            </Main>
            <Footer />
        </>
    )
}

export default Home;