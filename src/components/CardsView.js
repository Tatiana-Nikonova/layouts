import React from 'react';
import {v4 as uuidv4} from 'uuid';
import ShopCard from "./ShopCard";

function CardView({cards}) {
    const elements = cards.map(item =>
        <ShopCard key={uuidv4()}
                  name={item.name}
                  price={item.price}
                  color={item.color}
                  img={item.img}/>);
    return (
        <div>
            {elements}
        </div>
    );
}

export default CardView;