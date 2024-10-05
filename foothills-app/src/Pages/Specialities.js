import './Specialities.css';
import React from 'react';

function Specialities() {
    let specialties = ["SELECT DISTINCT specialty FROM Doctors"]; //Select all specialities from doctors
    const speciality_dropdowns = specialties.map((speciality) =>
        <specialityDropdown name={speciality} />
    );

  return (
    <div className="Specialities">
      {speciality_dropdowns}
    </div>
  );
}

export default Specialities;