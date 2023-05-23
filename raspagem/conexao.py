import mysql.connector

try:
    meubd = mysql.connector.connect(
        host='localhost',
        user='root',
        password='Teclado20102903!',
        database='pic'
    )
    print("Conectado ao banco de dados.")
except mysql.connector.Error as error:
    print("Erro ao conectar com o banco de dados:", error)


