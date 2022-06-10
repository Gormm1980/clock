import React, { useState } from "react";
import './Clock.css';



function Clock() {

    const [date, setDate] = useState(new Date());
    const week = ['Domingo', 'Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ];
    const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    let dia = week[date.getDay()];
    let day = date.getDate();
    let month = mes[date.getMonth()];
    let year = date.getFullYear();
    let hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

    const time = () => {
        for (let i = 0; i < 1; i++) {
            setTimeout(() => {
                setDate(new Date());
            }, 1000);
        }

        return `${hours}:${minutes}:${seconds}`;
    }

    return (

        <div className="Clock">
            <div className="ClockMsg">
                <p>Bienvenido a tu oficina ...</p>
            </div>
            <div className="ClockHour">
                {hours}:{minutes}
            </div>
            <div className="ClockDay">
                <div> {dia} </div>
                <div>{day}  de  {month}</div>
            </div>
          
        </div>
    );
}

export default Clock;