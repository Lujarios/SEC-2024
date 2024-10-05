import React, { useState, useLocation, useEffect } from 'react';
import DatePicker from 'react-datepicker';

function Doctor() {
    let location = useLocation();
    const [doctorID, changeDoctorID] = useState(0);
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 0), 0)
    );

    useEffect(() => {
        changeDoctorID(history.state);
    }, [location]);

    let doctor = ["SELECT * FROM Doctors WHERE doctor_id=(input)"]; //Doctor json from database
    const bookAppointment = () => {
        let date = startDate.toDateString();
        let startTime = startDate.getHours();
    }


    return(
        <div>
            <ul>
                <li>{doctor.name}</li>
                <li>
                <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                dateFormat="MMMM d, yyyy HH:mm"
                />
                </li>
            </ul>
            <div>
                <button onPress = {bookAppointment}>Book Now</button>
            </div>
        </div>
    );
}

export default Doctor;