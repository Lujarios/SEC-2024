import React, {useState, useEffect} from 'react';
import SpecialtyDropdown from '../components/SpecialtyDropdown';

function Specialties() {

    const [specialties, setSpecialties] = useState([]);
    //Select all specialities from doctors
    const fetchSpecialties =  async() => {
      try{
        const response = await fetch(`api/doctors/specialty`);
        const tempspecialties = await response.json();
        setSpecialties(tempspecialties);
      } catch (error) {
        console.error('Error fetching specialties: ', error);
      }
    }

    useEffect(() => {
      fetchSpecialties();
    }, ([]))

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