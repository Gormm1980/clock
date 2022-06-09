import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'



const CalendarShow = () => {

    const [date, setDate] = useState(new Date());


    return (
        <>

            <Calendar className="calendar" onChange={setDate} value={date} />

        </>
    );
}



export default CalendarShow;