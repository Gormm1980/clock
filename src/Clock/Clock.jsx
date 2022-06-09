import React, { useState } from "react";
import './Clock.css';



function Clock() {

    const [date, setDate] = useState(new Date());

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

    return (
        
        <div className="Clock">
            <div className="ClockMsg">
                <p>Bienvenido a tu oficina ...</p>
            </div>
            <div className="ClockHour">
                {hours}:{minutes}
            </div>
            <div className="ClockTemp">
                <div></div>
                <div></div>
                </div>
            <h1>Clock</h1>
            {day}/{month}/{year}
            <br />
            {hours}:{minutes}:{seconds}


        </div>
    );
}

export default Clock;