DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS doctors CASCADE;
DROP TABLE IF EXISTS patients CASCADE;

CREATE TABLE Patients (
    patient_id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    contact VARCHAR(15)
);

CREATE TABLE Doctors (
    doctor_id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    specialty VARCHAR(50),
    available BOOLEAN
);

CREATE TABLE Appointments (
    appointment_id INTEGER PRIMARY KEY,
    patient_id INTEGER REFERENCES Patients(patient_id),
    doctor_id INTEGER REFERENCES Doctors(doctor_id),
    date DATE,
    start_time TIME,
    end_time TIME
);