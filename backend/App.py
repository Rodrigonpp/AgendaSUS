#user: admin
#password: password

from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import pymysql

app = Flask(__name__,
            static_folder='../frontend/dist/assets',
            template_folder='../frontend/dist')
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/users', methods=['GET'])
def get_users_data():
    mydb = pymysql.connect(
        host='localhost',
        user='root',
        password='',
        database='agendasus_v1',
        cursorclass=pymysql.cursors.DictCursor,
    )

    my_cursor = mydb.cursor()
    my_cursor.execute('SELECT * FROM view_patients')
    users = my_cursor.fetchall()
    mydb.close()
    return jsonify(users)
    
@app.route('/api/users/search', methods=['GET'])
def get_user():

    email = request.args.get('email')

    mydb = pymysql.connect(
        host='localhost',
        user='root',
        password='',
        database='agendasus_v1',
        cursorclass=pymysql.cursors.DictCursor,
    )

    my_cursor = mydb.cursor()
    sql = 'SELECT * FROM view_patients WHERE email = %s'
    my_cursor.execute(sql, (email,))
    user = my_cursor.fetchone()
    mydb.close()

    if not user:
        return jsonify({'Erro': f'E-mail {email} não encontrado'})

    return jsonify(user)

@app.route('/api/addUser', methods=['POST'])
def add_user():
    data = request.json
    
    users = data.get('users')

    email = users.get('email')
    password = users.get('password')
    role = users.get('role')

    patients = data.get('patients')

    name = patients.get('name')
    cpf = patients.get('cpf')
    birthdate = patients.get('birthdate')
    phoneNumber = patients.get('phoneNumber')

    mydb = pymysql.connect(
        host='localhost',
        user='root',
        password='',
        database='agendasus_v1',
        cursorclass=pymysql.cursors.DictCursor,
    )
    my_cursor = mydb.cursor()

    try:
        my_cursor.execute('INSERT INTO users (email, password, role) VALUES (%s, %s, %s)', (email, password, role,))
        last_id = my_cursor.lastrowid

        my_cursor.execute('INSERT INTO patients (name, cpf, birth_date, phone_number, user_id) VALUES (%s, %s, %s, %s, %s)', (name, cpf, birthdate, phoneNumber, last_id))

        mydb.commit()

        return jsonify({'message:': 'Usuário criado com sucesso.'}), 201
    
    except Exception as e:
        print('erro')
        mydb.rollback()
        return jsonify({'Erro:': e}), 400

    finally:
        my_cursor.close()
        mydb.close()

@app.route('/api/free_schedules', methods=['GET'])
def get_free_schedules():
    #falta adicionar filtro
    my_db = pymysql.connect(
        host='localhost',
        user='root',
        password='',
        database='agendasus_v1',
        cursorclass=pymysql.cursors.DictCursor,
    )

    my_cursor = my_db.cursor()

    try:
        sql = 'SELECT * FROM view_free_schedules'
        my_cursor.execute(sql)
        free_schedules = my_cursor.fetchall()

        return jsonify(free_schedules)
    
    except Exception as e:
        return jsonify({'Erro: ': e}), 200
    
    finally:
        my_cursor.close()
        my_db.close()

    
    
app.run(host='192.168.1.73', port=8080)

