import { Link } from "react-router";
import "./ArticleCard.scss";

type Props = {
    articleCardTitle: string;
    articleCardDescription: string;
    articleCardUrl: string;
    articleImageUrl: string;
    articleImageAlt: string;
}

const ArticleCard = (props: Props) => {
    return (
        <div className="article-card home__card-article">
            <Link className="link-no" to={props.articleCardUrl}>
                <div className="article-card__wrapper">
                    <div className="article-card__container-image">
                        <img loading="lazy" className="article-card__image" src={props.articleImageUrl} alt={props.articleImageAlt} />
                    </div>
                    <div className="article-card__container-content">
                        <h2 className="article-card__title h3">{props.articleCardTitle}</h2>
                        <p className="h4">{props.articleCardDescription}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ArticleCard;