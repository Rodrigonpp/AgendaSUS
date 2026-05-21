import pymysql

def get_db_connection():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='',
        database='agendasus_v1',
        cursorclass=pymysql.cursors.DictCursor,
    )