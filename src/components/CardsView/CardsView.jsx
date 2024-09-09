import ShopCard from './ShopCard/ShopCard';
import './CardsView.css';

export default function CardsView({cards}) {
    let index = 0;
    let result = cards.map((card) => (
        <ShopCard card={card} key={index++} />
    ))
    return (
        <div className="cardsView">
            {result}
        </div>
    );
}