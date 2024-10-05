# Schulich Engineering Competition - Competitive Programming - 2024

### Welcome to our submission for the Competitive Programing division of SEC! :grin:

## <ins>**The Task:**</ins>
Create a system to allow the Foothills Hospital to schedule patient appointments with doctors.
### Requirments:
- Store data in a PosgreSQL database:
  - Patients
    - patient_id = INTEGER
    - name = VARCHAR(50)
    - contact = VARCHAR(15)
  - Doctors
    - doctor_id = INTEGER
    - name = VARCHAR(50)
    - specialty = VARCHAR(50)
    - available BOOLEAN
  - Appointments
    - appointment_id = INTEGER
    - patient_id = INTEGER
    - doctor_id = INTEGER
    - date = DATE
    - start_time = TIME
    - end_time = TIME
   
### Assumptions made with prompt:
- Application made from perspective of receptionist using it to input appointments

## <ins>**How to run:**</ins>

### 1. Clone the repo:
```bash
git clone https://github.com/Lujarios/SEC-2024.git
cd SEC-2024/foothills-app
```

### 2. Ensure that nmp nodes are installed:
```bash
npm install cors pg
```
These are for the database interaction ^^

### 3. Sarting up the database:
- Using pgAdmin start a server with:
  - connection: localhost
  - user: postgres
    
- Create database:
  - name: "Hospital (SEC)"

- Create the tables from the schema.sql file in foothills-app/sql
- Fill in datat from the seed.sql file in foothills-app/sql
- Ensure user "postgres" has full access to database:
```sql
GRANT ALL PRIVILEGES ON DATABASE "Hospital (SEC)" TO postgres;
```

### 4. Startup backend:
```bash
node src/server.js
```

### 5. Startup app
```bash
npm start
```

## <ins>**How the application works:**</ins>
![image](https://github.com/user-attachments/assets/42cfeab4-7101-4337-9e48-212bc919f0c4)

The user can enter the user ID of a patient at the top.

Then the patient's information gets loaded into the boxes (their name and phone number).
From there then the user can press "add appointment" to pull up a new page to where the appointment can be scheduled with a specific docter, date, and time.

## <ins>**Not currently working**</ins> :frowning_face:
Unfortunatly within the time limit of the competition we ran into many major issues in the development with React. 
As of right now we have:
- Working PosgreSQL database
- That initial unput user ID page loading (screenshot above)
- Fetch information from the database (the .json files loading in the console of the application)
- Send queries for specific Doctors specialties and get the return values
