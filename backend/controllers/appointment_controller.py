from flask import jsonify, request
from models.appointment_model import do_appointment

def add_appointment():
    data = request.json

    try:
        do_appointment(data['patient_id'], data['free_schedule_id'])
        return jsonify({'Mensagem: ': 'Consulta agendada com sucesso.'}), 201
    except Exception as e:
        return jsonify({'Erro: ': str(e)}), 400