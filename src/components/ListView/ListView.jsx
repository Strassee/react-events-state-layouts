import ShopItem from './ShopItem/ShopItem';
import './ListView.css';

export default function ListView({ items }) {
    let index = 0;
    let result = items.map((item) => (
        <ShopItem item={item} key={index++} />
    ))
    return (
        <div className="listView">
            {result}
        </div>
    );
}