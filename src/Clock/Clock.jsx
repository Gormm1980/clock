import React, { useState } from "react";
import './Clock.css';



function Clock() {

    const [date, setDate] = useState(new Date());
    const week = ['Domingo', 'Lunes','Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ];
    const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    let dia = week[date.getDay()];
    let day = date.getDate();
    let month = mes[date.getMonth()];
    let hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

    const time = () => {
        for (let i = 0; i < 1; i++) {
            setTimeout(() => {
                setDate(new Date());
            }, 1000);
        }

        return `${hours}:${minutes}`;
    }

    return (

        <div className="Clock">
            <div className="ClockMsg">
                <p>Bienvenido a tu oficina ...</p>
            </div>
            <div className="ClockHour">
                {time()}
            </div>
            <div className="ClockDay">
                <div> {dia} </div>
                <div>{day}  de  {month}</div>
            </div>
          
        </div>
    );
}

export default Clock;