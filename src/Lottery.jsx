import { useState } from "react";
import "./Lottery.css";

export default function Lottery(){
    let [tickect,setTicket]=useState[0,0,0];
    return (
        <div>
            <h1>Lottery</h1>
            <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
            </div>
        </div>
    );
}