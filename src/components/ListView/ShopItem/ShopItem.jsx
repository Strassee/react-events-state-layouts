import './ShopItem.css';

export default function ShopItem(props) {
    console.log(props.item);
    return (
        <div className='shopItem'>
        <div className='wrap_img'>
          <img src={props.item.img} alt='' />
        </div>
        <h2 className='heading'>{props.item.name}</h2>
        <p>{props.item.color}</p>
        <span className='bodyCart_price'>${props.item.price}</span>
        <button className='buttonCart'>Add to Cart</button>
      </div>
    );

}