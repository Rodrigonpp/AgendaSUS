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
        database='agendasus',
        cursorclass=pymysql.cursors.DictCursor,
    )

    my_cursor = mydb.cursor()
    my_cursor.execute('SELECT * FROM users')
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
        database='agendasus',
        cursorclass=pymysql.cursors.DictCursor,
    )

    my_cursor = mydb.cursor()
    sql = 'SELECT * FROM users WHERE email = %s'
    my_cursor.execute(sql, (email,))
    user = my_cursor.fetchone()
    mydb.close()

    if not user:
        return jsonify({'Erro': f'E-mail {email} não encontrado'})

    return jsonify(user)

@app.route('/api/addUser', methods=['POST'])
def add_user():
    data = request.json
    
    email = data.get('email')
    user_name = data.get('username')
    cpf = data.get('cpf')
    password = data.get('password')
    birthdate = data.get('birthdate')

    mydb = pymysql.connect(
        host='localhost',
        user='root',
        password='',
        database='agendasus',
        cursorclass=pymysql.cursors.DictCursor,
    )
    my_cursor = mydb.cursor()

    sql = 'INSERT INTO users (email, user_name, cpf, password, birthdate) VALUES (%s, %s, %s, %s, %s)'
    values = (email, user_name, cpf, password, birthdate)

    try:
        my_cursor.execute(sql, values)
        mydb.commit()

        my_cursor.close()
        mydb.close()

        return jsonify({'message': 'Usuário criado com sucesso.'}), 201
    except Exception as e:
        return jsonify({'Erro:': e}), 400
    
    
app.run(host='192.168.1.73', port=8080)

