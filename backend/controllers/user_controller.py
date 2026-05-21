from flask import jsonify, request
from models.user_model import get_all_patients, get_patient_by_email, create_patient

def get_patients_data():
    patients = get_all_patients()
    return jsonify(patients)

def get_patient():
    email = request.args.get('email')
    patient = get_patient_by_email(email)

    if not patient:
        return jsonify({'Erro: ': f'E-mail {email} não encontrado.'}), 404
    
    return jsonify(patient)

def add_patient():
    data = request.json

    try:
        create_patient(data.get('users'), data.get('patient'))
        return jsonify({'Mensagem: ': 'Usuário criado com sucesso.'}), 201
    except Exception as e:
        return jsonify({'Erro: ': str(e)}), 400