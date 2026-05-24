from flask import jsonify
from models.clinic_model import get_all_clinics

def get_clinics_data():
    clinics = get_all_clinics()
    return jsonify(clinics)