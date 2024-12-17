import { Link } from "react-router";
import "./CategoryCard.scss";

type Props = {
    categoryCardLink: string;
    categoryCardTitle: string;
    categoryCardDescription: string;
}

const CategoryCard = (props: Props) => {
    return (
        <div className="category-card">
            <Link to={props.categoryCardLink} className="link-no">
                <div className="category-card__wrapper">
                    <h2 className="h2">{props.categoryCardTitle}</h2>
                    <p className="p-xl">{props.categoryCardDescription}</p>
                </div>
            </Link>
            <div className="category-card__load"></div>
        </div>
    )
}

export default CategoryCard;