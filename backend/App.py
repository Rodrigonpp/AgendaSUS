from flask import Flask, render_template
from flask_cors import CORS
from controllers.user_controller import get_patients_data, get_patient, add_patient
from controllers.schedule_controller import get_schedules_data, get_filtered_schedules


app = Flask(__name__,
            static_folder='../frontend/dist/assets',
            template_folder='../frontend/dist')
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

app.add_url_rule('/api/users', view_func=get_patients_data, methods=['GET'])
app.add_url_rule('/api/users/search', view_func=get_patient, methods=['GET'])
app.add_url_rule('/api/addUser', view_func=add_patient, methods=['POST'])
app.add_url_rule('/api/free_schedules', view_func=get_schedules_data, methods=['GET'])
app.add_url_rule('/api/filtered_schedules', view_func=get_filtered_schedules, methods=['GET'])
    
app.run(host='192.168.1.73', port=8080)

