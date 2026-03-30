from flask import Flask, render_template, jsonify
import pymysql

mydb = pymysql.connect(
    host='localhost',
    user='root',
    password='',
    database='agendasus',
    cursorclass=pymysql.cursors.DictCursor,
)

app = Flask(__name__,
            static_folder='../frontend/dist/assets',
            template_folder='../frontend/dist')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users', methods=['GET'])
def get_users_data():

    my_cursor = mydb.cursor()
    my_cursor.execute('SELECT * FROM users')
    users = my_cursor.fetchall()
    return jsonify(users)
    
    

app.run(host='192.168.1.73', port=81)

