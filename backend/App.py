from flask import Flask, render_template, jsonify, request
import pymysql

app = Flask(__name__,
            static_folder='../frontend/dist/assets',
            template_folder='../frontend/dist')

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


    

app.run(host='192.168.1.73', port=81)

