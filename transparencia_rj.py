from datetime import datetime
import pandas as pd
import openpyxl
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.wait import WebDriverWait

from classes.Contrato import Contrato
from repository.pedido_fonte_dados_repository import criar_pedido_fonte_dados, alterar_status
from repository.erro_fonte_dados_repository import criar_erro_fonte_dados

from time import sleep
import os
import time
import traceback

chrome_options = Options()
chrome_options.add_argument("--window-size=1920,1080")
chrome_options.add_argument("--start-maximized")
download_dir = '/tmp'
chrome_options.add_experimental_option('prefs', {'download.default_directory': download_dir})

driver = webdriver.Chrome(options=chrome_options)
wait = WebDriverWait(driver, timeout=60)

id_fonte_dados = 50

log_dir = '/tmp/tce_pi_log'
log_file = '/tmp/tce_pi_log/log.txt'

if not os.path.exists(log_dir):
    os.makedirs(log_dir)

def logger (logfile, info):
    f = open(logfile, 'a+')
    currentdate = time.strftime('%Y-%m-%d|%H:%M:%S')
    f.write(currentdate + ',' + info + '\n')
    f.write(traceback.format_exc() + '\n')
    f.close()

def de_para_contratos(dict_contratos_list, cnpj):
    contratos_list = []

    for contrato_dict in dict_contratos_list:
        contrato = Contrato(
            numero=contrato_dict['numero_contrato'],
            cnpj_contratada=cnpj,
            data_inicio_vigencia=contrato_dict['data_inicio_vigencia'],
            data_termino_vigencia=contrato_dict['data_fim_vigencia'],
            valor_inicial=float(contrato_dict['valor_global'].replace(',', '.')),
            orgao=contrato_dict['orgao'],
            nome_fornecedor=contrato_dict['fornecedor'],
            #esfera='Estadual',
            #poder='Executivo',
            #uf_orgao='RJ',
            #fonte='TCEPI'
        )

        if contrato.data_inicio_vigencia and type(contrato.data_inicio_vigencia) == str:
            contrato.data_inicio_vigencia = datetime.strptime(contrato.data_inicio_vigencia, '%d/%m/%Y')
        if contrato.data_termino_vigencia and type(contrato.data_termino_vigencia) == str:
            contrato.data_termino_vigencia = datetime.strptime(contrato.data_termino_vigencia, '%d/%m/%Y')
        contratos_list.append(contrato)
    return contratos_list

def realizar_raspagem(cnpj:str, id_pedido: int):
    if not os.path.exists(log_dir):
        os.makedirs(log_dir)

    status = {
        'Contratos': 'Pendente'
    }
    id_pedido_fonte_dados = criar_pedido_fonte_dados(status, id_fonte_dados, id_pedido)
    dict_contratos_list = []


    try:
        status['Contratos'] = 'Carregando'
        alterar_status(status, id_pedido_fonte_dados)
        logger(log_file, f'Inicio da raspagem')

        navegador = webdriver.Chrome()
        navegador.get('https://www.compras.rj.gov.br/Contrato/buscar.action#%27%27%27%27')

        elemento = navegador.find_element(By.ID, "cnpjFornecedor")

        sleep(2)
        elemento.send_keys('34.729.047/0001-02')

        sleep(2)

        elemento = navegador.find_element(By.ID, "pesquisar")
        elemento.click()

        sleep(2)

        elemento = navegador.find_element(By.NAME, "dataTable_length")
        elemento.click()

        elemento = navegador.find_element(By.XPATH, "//option[@value='100']")
        elemento.click()

        sleep(2)

        elemento = navegador.find_element(By.ID, "exportExcel")
        elemento.click()

        #arquivo excel
        tabela = pd.read_excel(f'{download_dir}/contratos.xlxs', engine="openpyxl", header=1, index_col=None, dtype=str )
        logger(log_file, f'Tabela do excel está sendo lida e alterada')

        for i, Dados in tabela.iterrows():
            contrato_dict = {
                'numero_contrato': tabela.loc[i, "Contratação"],
                'data_inicio_vigencia': tabela.loc[i, "Data Início Vigência"],
                'data_fim_vigencia': tabela.loc[i, "Data Fim Vigência"],
                'orgao': tabela.loc[i, "Unidade"],
                'fornecedor': tabela.loc[i, "Fornecedor"]
            }

            dict_contratos_list.append(contrato_dict)
        contratos_list = de_para_contratos(dict_contratos_list, cnpj)
        logger(log_file, f'Dados de contrato guardados' )

        if len(contratos_list) == 0:
            status['Contratos'] = 'Sem Dados'
            logger(log_file, f'Raspagem realizada: sem dados')

        else:
            status['Contratos'] = 'Concluído'
            logger(log_file, f'Raspagem realizada: concluída')

        driver.quit()
        driver.quit()

        os.remove(f"{download_dir}/contratos.xlsx")


    except Exception as e:
        print(e)
        status['Contratos'] = 'Erro'
        logger(log_file, f'Erro na raspagem')
        erro = str(e).split("\n")
        if 'timeout' in erro[0]:
            criar_erro_fonte_dados(id_pedido, id_fonte_dados, 'Contratos', 'Timeout', erro[0])
        else:
             criar_erro_fonte_dados(id_pedido, id_fonte_dados, 'Contratos', 'Erro na raspagem', erro[0])
        contratos_list = []
    alterar_status(status, id_pedido_fonte_dados)

    return {
            'status': status,
            'contratos': contratos_list,
        }
