/*CONSULTAS DE TESTE, CONTINUAR IMPLEMENTANDO */
/*ESPECIALIDADES*/
INSERT INTO specialties (name) VALUES ("Clínico geral");
INSERT INTO specialties (name) VALUES ("Pediatria");
SELECT * FROM specialties;

/*CLINICAS*/
INSERT INTO clinics (name) VALUES ("Centro de Saúde Bultrins");
INSERT INTO clinics (name) VALUES ("USF Ilha do Maruím");
SELECT * FROM clinics;

/*USUÁRIOS*/
INSERT INTO users (email, password, role) VALUES ("rodrigo@gmail.com", "12345", "ADMIN");
INSERT INTO users (email, password, role) VALUES ("joao@gmail.com", "12345", "PATIENT");
INSERT INTO users (email, password, role) VALUES ("carla@gmail.com", "12345", "DOCTOR");
INSERT INTO users (email, password, role) VALUES ("thomas@gmail.com", "thomas123", "DOCTOR");
INSERT INTO users (email, password, role) VALUES ("figueira@gmail.com", "porta", "DOCTOR");
SELECT * FROM users;

/*PACIENTES*/
INSERT INTO patients (name, cpf, birth_date, user_id) VALUES ("Rodrigo", "11111111111", "2004-03-16", 1);
INSERT INTO patients (name, cpf, birth_date, user_id) VALUES ("João", "22222222222", "1995-11-05", 4);
SELECT * FROM patients;

/*MÉDICOS*/
INSERT INTO doctors (name, crm, user_id, specialtie_id) VALUES ("Carla Souza", "123456", 5, 1);
INSERT INTO doctors (name, crm, user_id, specialtie_id) VALUES ("Thomas Pelos", "654321", 6, 1);
INSERT INTO doctors (name, crm, user_id, specialtie_id) VALUES ("Figueira Silva", "321321", 7, 2);
SELECT * FROM doctors;

/*AGENDAS*/
INSERT INTO free_schedules (start_time, doctor_id, clinic_id) VALUES ("2026-05-04 15:00", 2, 2);
INSERT INTO free_schedules (start_time, doctor_id, clinic_id) VALUES ("2026-05-04 16:00", 5, 1);
INSERT INTO free_schedules (start_time, doctor_id, clinic_id) VALUES ("2026-05-04 15:00", 1, 1);
SELECT * FROM free_schedules;

/*MARCAÇÕES*/
INSERT INTO appointments (patient_id, free_schedule_id) VALUES (1, 2);
SELECT * FROM appointments;
DELETE FROM appointments WHERE id = 1;

/*CONSULTAS COM JOIN | CRIAR UM SELECTS.sql DPS*/
/*PACIENTES*/
SELECT 
	users.*, patients.name AS name, patients.cpf AS cpf, patients.birth_date AS birth_date 
FROM 
	users 
INNER JOIN 
	patients ON users.id = patients.user_id;
    
/*MÉDICOS*/
SELECT 
	users.*, doctors.name AS nome_medico, doctors.crm AS CRM, specialties.name AS especialidade
FROM 
	users 
INNER JOIN 
	doctors ON users.id = doctors.user_id 
INNER JOIN 
	specialties ON doctors.specialtie_id = specialties.id;
    
/*TODAS AS AGENDAS*/
SELECT 
	doctors.id AS id, doctors.name AS medico, doctors.crm AS CRM, specialties.name AS especialidade, free_schedules.start_time AS data_e_hora, free_schedules.status AS disponivel, clinics.name AS local
FROM 
	free_schedules
INNER JOIN
	doctors ON free_schedules.doctor_id = doctors.id
INNER JOIN
	specialties ON doctors.specialtie_id = specialties.id
INNER JOIN
	clinics ON free_schedules.clinic_id = clinics.id;
    
/*AGENDAS DISPONÍVEIS*/
SELECT 
	doctors.id AS id, doctors.name AS medico, doctors.crm AS CRM, specialties.name AS especialidade, free_schedules.start_time AS data_e_hora, free_schedules.status AS disponivel, clinics.name AS local
FROM 
	free_schedules
INNER JOIN
	doctors ON free_schedules.doctor_id = doctors.id
INNER JOIN
	specialties ON doctors.specialtie_id = specialties.id
INNER JOIN
	clinics ON free_schedules.clinic_id = clinics.id
WHERE 
	free_schedules.status = 1
ORDER BY
	specialties.name;
