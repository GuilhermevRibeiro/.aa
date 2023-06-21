import pandas as pd
import mysql.connector
import re

from datetime import datetime

dados_excel = pd.read_excel("C:\\Users\\Guilherme\\Downloads\\Contratos.xls")


meubd = mysql.connector.connect(
        host='localhost',
        user='root',
        password='Teclado20102903!',
        database='pic'
    )

cursor = meubd.cursor()

for i, Dados in dados_excel.iterrows():
    # Extrair os valores das colunas do DataFrame
    contratacao = str(dados_excel.loc[i, 'Contratação'])
    status_contratacao = str(dados_excel.loc[i, 'Status Contratação'])
    data_contratacao_str = dados_excel.loc[i, 'Data Contratação']
    unidade = str(dados_excel.loc[i, 'Unidade'])
    processo = str(dados_excel.loc[i, 'Processo'])
    objeto = str(dados_excel.loc[i, 'Objeto'])
    tipo_aquisicao = str(dados_excel.loc[i, 'Tipo de Aquisição'])
    criterio_julgamento = str(dados_excel.loc[i, 'Critério de Julgamento'])
    data_inicio_vigencia_str = str(dados_excel.loc[i, 'Data Início Vigência'])

    data_inicio_vigencia_str = str(dados_excel.loc[i, 'Data Início Vigência'])

    if not pd.isnull(data_inicio_vigencia_str) and data_inicio_vigencia_str != 'nan':
        data_inicio_vigencia = datetime.strptime(data_inicio_vigencia_str, '%d/%m/%Y').strftime('%Y-%m-%d')
    else:
        data_inicio_vigencia = None

    data_fim_vigencia_str = str(dados_excel.loc[i, 'Data Fim Vigência'])

    if not pd.isnull(data_fim_vigencia_str) and data_fim_vigencia_str != 'nan':
        data_fim_vigencia = datetime.strptime(data_fim_vigencia_str, '%d/%m/%Y').strftime('%Y-%m-%d')
    else:
        data_fim_vigencia = None

    nome_fornecedor = str(dados_excel.loc[i, 'Fornecedor'])
    cnpj_contratada = str(dados_excel.loc[i, 'CPF/CNPJ'])
    valor_total_estimado_str = str(dados_excel.loc[i, 'Valor Total Contrato/Valor Estimado para Contratação'])
    valor_total_estimado_str = re.sub(r'[^\d,-]', '', valor_total_estimado_str)

    if valor_total_estimado_str:
        valor_total_estimado = float(valor_total_estimado_str.replace(',', '.'))
    else:
        valor_total_estimado = 0.0

    valor_total_empenhado_str = str(dados_excel.loc[i, 'Valor Total Empenhado'])
    valor_total_empenhado_str = re.sub(r'[^\d,-]', '', valor_total_empenhado_str)

    if valor_total_empenhado_str:
        valor_total_empenhado = float(valor_total_empenhado_str.replace(',', '.'))
    else:
        valor_total_empenhado = 0.0
    data_contratacao = datetime.strptime(data_contratacao_str, '%d/%m/%Y').date()

    valor_total_executado_str = str(dados_excel.loc[i, 'Valor Total Executado'])
    valor_total_executado_str = re.sub(r'[^\d,-]', '', valor_total_executado_str)

    if valor_total_executado_str:
        valor_total_executado = float(valor_total_executado_str.replace(',', '.'))
    else:
        valor_total_executado = 0.0

    valor_total_pago_str = str(dados_excel.loc[i, 'Valor Total Pago'])
    valor_total_pago_str = re.sub(r'[^\d,-]', '', valor_total_pago_str)

    if valor_total_pago_str:
        valor_total_pago = float(valor_total_pago_str.replace(',', '.'))
    else:
        valor_total_pago = 0.0
    data_contratacao = datetime.strptime(data_contratacao_str, '%d/%m/%Y').date()

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
            valor_total_pago FLOAT,
        )
        '''

    cursor.execute(comando_sql)

    comando_sql = "INSERT INTO contratos (contratacao, status_contratacao, data_contratacao, unidade, processo, objeto, " \
                  "tipo_aquisicao, criterio_julgamento, data_inicio_vigencia, data_fim_vigencia, nome_fornecedor," \
                  " cnpj_contratada, valor_total_estimado, valor_total_empenhado, valor_total_executado, valor_total_pago) " \
                  "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"

    cursor.execute(comando_sql, (
        contratacao,
        status_contratacao,
        data_contratacao,
        unidade,
        processo,
        objeto,
        tipo_aquisicao,
        criterio_julgamento,
        data_inicio_vigencia,
        data_fim_vigencia,
        nome_fornecedor,
        cnpj_contratada,
        valor_total_estimado,
        valor_total_empenhado,
        valor_total_executado,
        valor_total_pago
    ))

meubd.commit()


# Fechar a conexão e o cursor
cursor.close()
meubd.close()