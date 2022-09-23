import React from "react";
//import stocks from "../Data";

function Stock(props){
    const stock = props.stocks.filter(stock => stock.symbol === props.match.params.symbol)[0];
    return(
        <div>
            <h2>{stock.name}</h2>
            <h3>{stock.symbol}</h3>
            <h3>{stock.change}</h3>
            <h3>{stock.high}</h3>
            <h3>{stock.low}</h3>
            <h3>{stock.open}</h3>
            <h3>{stock.lastPrice}</h3>
        </div>
    );
};

export default Stock;