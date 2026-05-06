/*CONSULTAS COM JOIN*/
/*USERS
 - Usado para autenticar: adicionar um where para encontrar o email e validar a senha*/
SELECT * FROM users WHERE role = "PATIENT";

/*PACIENTES: view_patients
 - Usado para a sessão ativa, encontrar o paciente através de user_id*/
CREATE VIEW view_patients AS
SELECT 
	users.email, users.password, patients.*
FROM 
	patients 
INNER JOIN 
	users ON users.id = patients.user_id;
    
SELECT * FROM view_patients;
    
/*MÉDICOS: view_doctors*/
CREATE VIEW view_doctors AS
SELECT
	doctors.id, doctors.name, doctors.crm, users.email, users.password, specialties.name AS specialtie
FROM
	doctors
INNER JOIN
	users ON users.id = doctors.user_id
INNER JOIN
	specialties ON doctors.specialtie_id = specialties.id;
    
SELECT * FROM view_doctors;
    
/*TODAS AS AGENDAS: view_all_schedules*/
CREATE VIEW view_all_schedules AS
SELECT
	free_schedules.id, free_schedules.start_time, free_schedules.status, doctors.name AS doctor, specialties.name AS specialtie, clinics.name AS clinic
FROM
	free_schedules
INNER JOIN
	doctors ON free_schedules.doctor_id = doctors.id
INNER JOIN
	specialties ON doctors.specialtie_id = specialties.id
INNER JOIN
	clinics ON free_schedules.clinic_id = clinics.id;

SELECT * FROM view_all_schedules;
    
/*AGENDAS DISPONÍVEIS: view_free_schedules*/
CREATE VIEW view_free_schedules AS
SELECT
	free_schedules.id, free_schedules.start_time, doctors.name AS doctor, specialties.name AS specialtie, clinics.name AS clinic
FROM
	free_schedules
INNER JOIN
	doctors ON free_schedules.doctor_id = doctors.id
INNER JOIN
	specialties ON doctors.specialtie_id = specialties.id
INNER JOIN
	clinics ON free_schedules.clinic_id = clinics.id
WHERE free_schedules.status = 1;

SELECT * FROM view_free_schedules;

/*FALTA: consultas marcadas, histórico e notificações*/