import React from 'react';
import SpecialtyDropdown from '../components/SpecialtyDropdown';

function Specialties() {

    let specialties = ["Cardiology", "Pediatrics", "Dermatology", "Orthopedics"]; //Select all specialities from doctors
    const speciality_dropdowns = specialties.map((specialty) =>
        <SpecialtyDropdown name={specialty} />
    );

  return (
    <div>
      {speciality_dropdowns}
    </div>
  );
}

export default Specialties;