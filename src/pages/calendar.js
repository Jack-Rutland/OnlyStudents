import UserLayout from '../components/user-layout';
import CalendarReact from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';

function Calendar() {
    const [date, setDate] = useState(new Date().toDateString());


    function changeDate(new_date) {
        setDate(new_date.toDateString())
    }


    return   (
        <UserLayout>
            <CalendarReact onClickDay={(date, event) => changeDate(date)}/>
            <div>
                <p style={{color:'#000000'}}>{date}</p>
            </div>
        </UserLayout>
        );
}

export default Calendar;