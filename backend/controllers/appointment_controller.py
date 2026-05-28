from flask import jsonify, request
from models.appointment_model import do_appointment

def add_appointment():
    patient_id = request.args.get('patient_id')
    free_schedule_id = request.args.get('free_schedule_id')

    try:
        do_appointment(patient_id, free_schedule_id)
        return jsonify({'Mensagem: ': 'Consulta agendada com sucesso.'}), 201
    except Exception as e:
        return jsonify({'Erro: ': str(e)}), 400