import './ShopCard.css';

export default function ShopCard(props) {
    return (
      <div className='shopCard'>
        <h2 className='heading'>{props.card.name}</h2>
        <p>{props.card.color}</p>
        <img src={props.card.img} alt='' />
        <div className='bodyCart'>
          <span className='bodyCart_price'>${props.card.price}</span>
          <button className='buttonCart'>Add to Cart</button>
        </div>
      </div>
    );

}