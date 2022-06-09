import React, { useState } from "react";
import './Clock.css';



function Clock() {

    const [date, setDate] = useState(new Date());

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return (
        <div className="Clock">

            <h1>Clock</h1>
            {day}/{month}/{year}
            <br />
            {hours}:{minutes}:{seconds}


        </div>
    );
}

export default Clock;