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

cursor = meubd.cursor()

comando_sql = '''
        CREATE TABLE contratos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            contratacao VARCHAR(255),
            status_contratacao VARCHAR(255),
            data_contratacao DATE,
            unidade VARCHAR(255),
            processo VARCHAR(255),
            objeto VARCHAR(255),
            tipo_aquisicao VARCHAR(255),
            criterio_julgamento VARCHAR(255),
            data_inicio_vigencia DATE,
            data_fim_vigencia DATE,
            nome_fornecedor VARCHAR(255),
            cnpj_contratada VARCHAR(255),
            valor_total_estimado FLOAT,
            valor_total_empenhado FLOAT,
            valor_total_executado FLOAT,
            valor_total_pago FLOAT
        )
        '''


cursor.execute(comando_sql)
print("Tabela criada dentro do banco de dados")

