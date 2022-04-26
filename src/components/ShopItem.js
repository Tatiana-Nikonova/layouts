import React from "react";

function ShopItem({img,name,color,price}) {
 return (
     <div>
         <div className="shop-item">
             <img src={img} alt={img}>
             </img>
             <h2>{name}</h2>
             <span>{color}</span>
             <span className={"color"}>{"$"}{price}</span>
             <div className="right-span-item">{"ADD TO CART"}</div>
         </div>
     </div>
 );
}

export default ShopItem;