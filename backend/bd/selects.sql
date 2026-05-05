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
	free_schedules.status = 1;

/*FALTA: consultas marcadas, histórico e notificações*/