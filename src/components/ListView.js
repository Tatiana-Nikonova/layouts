import React from "react";
import ShopItem from "./ShopItem";
import {v4 as uuidv4} from "uuid";

function ListView({items}) {
    const elements = items.map(item =>
        <ShopItem key={uuidv4()}
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

export default ListView;