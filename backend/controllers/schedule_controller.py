from flask import jsonify, request, Blueprint
from models.schedule_model import get_all_schedules, get_schedule_by_specialtie_and_date, get_schedule_by_patient

schedule_bp = Blueprint('schedule', __name__)
def get_schedules_data():
    schedules = get_all_schedules()
    return jsonify(schedules)

def get_filtered_schedules():
    filter = {
        'specialtie': request.args.get('specialtie'),
        'start_time': request.args.get('start_time'),
    }

    if request.args.get('clinic'):
        filter['clinic'] = request.args.get('clinic')

    schedules = get_schedule_by_specialtie_and_date(filter)
    print(schedules)
    return jsonify(schedules)

def get_patient_schedules():
    patient_id = request.args.get('patient')
    
    schedules = get_schedule_by_patient(patient_id)
    return jsonify(schedules)

schedule_bp.add_url_rule('/free_schedules', view_func=get_schedules_data, methods=['GET'])
schedule_bp.add_url_rule('/filtered_schedules/search', view_func=get_filtered_schedules, methods=['GET'])
schedule_bp.add_url_rule('/schedule_by_patient/search', view_func=get_patient_schedules, methods=['GET'])