from flask import jsonify
from models.specialtie_model import get_all_specialties

def get_specialties_data():
    specialties = get_all_specialties()
    return jsonify(specialties)
