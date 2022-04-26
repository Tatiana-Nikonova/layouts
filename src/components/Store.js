import React, {useState} from 'react';
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

function Store() {
    const [state, setState] = useState({icon: "view_list"});
    const onSwitch = (data) => {
        setState(() => {
            if (data === "view_list") return {icon: "view_module"}
            else return {icon: "view_list"}
        })
    }
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    if (state.icon === "view_list") {
        return (
            <div>
                <IconSwitch icon={state.icon} onSwitch={onSwitch}/>
                <ListView items={products}/>
            </div>
        )
    } else {
        return (
            <div>
                <IconSwitch icon={state.icon} onSwitch={onSwitch}/>
                <CardsView cards={products}/>
            </div>
        )
    }
}

export default Store;