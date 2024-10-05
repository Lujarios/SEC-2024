import logo from './logo.svg';
import './Specialities.css';
import React, { useState } from 'react';

function Book() {
    let specialties = []; //Select all specialities from doctors
    const speciality_dropdowns = specialties.map((speciality) =>
        <specialityDropdown name={speciality} />
    );

  return (
    <div className="Specialities">
      {speciality_dropdowns}
    </div>
  );
}

export default Book;