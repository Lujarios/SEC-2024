INSERT INTO Patients (patient_id, name, contact)
VALUES 
    (11111, 'John Doe', '123-456-7890'),
    (22222, 'Jane Smith', '987-654-3210'),
    (33333, 'Alice Johnson', '555-666-7777');

INSERT INTO Doctors (doctor_id, name, specialty, available)
VALUES 
    (11111, 'Dr. Emily Davis', 'Cardiology', TRUE),
    (22222, 'Dr. Robert Brown', 'Dermatology', TRUE),
    (33333, 'Dr. Sarah Wilson', 'Neurology', FALSE);

INSERT INTO Appointments (appointment_id, patient_id, doctor_id, date, start_time, end_time)
VALUES 
    (11111, 11111, 11111, '2024-10-10', '09:00', '10:00'),
    (22222, 22222, 22222, '2024-10-11', '11:00', '12:00'),
    (33333, 33333, 22222, '2024-10-12', '14:00', '15:00');
