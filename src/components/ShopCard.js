import React from "react";

function ShopCard({name, price, color, img}) {
    return (
        <div>
        <div className="shop-card">
            <h2>{name}</h2>
            <span>{color}</span>
                <img src={img} alt={img}>
                </img>
                <div>
                    <span className="left-span">{"$"}{price}</span>
                    <span className="right-span">{"ADD TO CART"}</span>
                </div>
        </div>
        </div>
    )
}

export default ShopCard;