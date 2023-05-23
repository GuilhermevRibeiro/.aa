import pandas as pd
import mysql.connector


dados_excel = pd.read_excel("C:\\Users\\Guilherme\\Downloads\\Contratos.xlsx", dtype=str)


meubd = mysql.connector.connect(
        host='localhost',
        user='root',
        password='Teclado20102903!',
        database='pic'
    )

cursor = meubd.cursor()

for i, Dados in dados_excel.iterrows():

    # Extrair os valores das colunas do DataFrame
    contratacao = dados_excel.loc[i, 'Contratação']
    status_contratacao = dados_excel.loc[i, 'Status Contratação']
    data_contratacao = dados_excel.loc[i, 'Data Contratação']
    unidade = dados_excel.loc[i, 'Unidade']
    processo = dados_excel.loc[i, 'Processo']
    objeto = dados_excel.loc[i, 'Objeto']
    tipo_aquisicao = dados_excel.loc[i, 'Tipo de Aquisição']
    criterio_julgamento = dados_excel.loc[i, 'Critério de Julgamento']
    data_inicio_vigencia = dados_excel.loc[i, 'Data Fim Vigência']
    data_fim_vigencia = dados_excel.loc[i, 'Data Fim Vigência']
    nome_fornecedor = dados_excel.loc[i, 'Fornecedor']
    cnpj_contratada = dados_excel.loc[i, 'CPF/CNPJ']
    valor_total_estimado = dados_excel.loc[i, 'Valor Total Contrato/Valor Estimado para Contratação']
    valor_total = dados_excel.loc[i, 'Valor Total Empenhado']
    valor_total_executado = dados_excel.loc[i, 'Valor Total Executado']
    valor_total_pago = dados_excel.loc[i, 'Valor Total Pago']

    comando_sql = "INSERT INTO contratos (contratacao, status_contratacao, data_contratacao, unidade, processo, objeto, " \
               "tipo_aquisicao, criterio_julgamento, data_inicio_vigencia, data_fim_vigencia, nome_fornecedor," \
               " cnpj_contratada, valor_total_estimado, valor_total, valor_total_executado, valor_total_pago) " \
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
        valor_total,
        valor_total_executado,
        valor_total_pago
    ))

meubd.commit()


# Fechar a conexão e o cursor
cursor.close()