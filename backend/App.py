from flask import Flask, render_template
from flask_cors import CORS
from controllers.user_controller import user_bp
from controllers.appointment_controller import appointment_bp
from controllers.schedule_controller import schedule_bp
from controllers.clinic_controller import clinic_bp
from controllers.specialtie_controller import specialtie_bp

app = Flask(__name__,
            static_folder='../frontend/dist/assets',
            template_folder='../frontend/dist')
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(appointment_bp, url_prefix='/api')
app.register_blueprint(schedule_bp, url_prefix='/api')
app.register_blueprint(clinic_bp, url_prefix='/api')
app.register_blueprint(specialtie_bp, url_prefix='/api') 

#app.add_url_rule('/api/addUser', view_func=add_patient, methods=['POST'])
#app.add_url_rule('/api/add_appointment', view_func=add_appointment, methods=['POST'])
#app.add_url_rule('/api/users', view_func=get_patients_data, methods=['GET'])
#app.add_url_rule('/api/users/search', view_func=get_patient, methods=['GET'])
#app.add_url_rule('/api/free_schedules', view_func=get_schedules_data, methods=['GET'])
#app.add_url_rule('/api/filtered_schedules/search', view_func=get_filtered_schedules, methods=['GET'])
#app.add_url_rule('/api/schedule_by_patient/search', view_func=get_patient_schedules, methods=['GET'])
#app.add_url_rule('/api/clinics', view_func=get_clinics_data, methods=['GET'])
#app.add_url_rule('/api/specialties', view_func=get_specialties_data, methods=['GET'])

if __name__ == '__main__':
    app.run(host='192.168.1.73', port=8080)