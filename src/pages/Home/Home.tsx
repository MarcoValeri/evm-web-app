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
                    <h1>Home</h1>
                </div>
            </Main>
            <Footer />
        </>
    )
}

export default Home;