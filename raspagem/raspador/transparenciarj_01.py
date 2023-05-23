from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
#import pandas as pd
from time import sleep
navegador = webdriver.Chrome()
chrome_options = Options()
chrome_options.add_argument("--window-size=1920,1080")


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

sleep(3)

while True:
    try:
        # Localize o elemento de botão "Próximo" com base no seletor XPath fornecido
        next_button = elemento.find_element(By.XPATH, '//*[@class="pagination"]//*[text()="Próximo"]')

        sleep(3)

        # Verifique se o botão "Próximo" está clicável
        if next_button.is_enabled():
            next_button.click()
            sleep(3)
            # Aguarde até que a próxima página seja carregada
            WebDriverWait(elemento, 10).until(EC.staleness_of(next_button))
            elemento = navegador.find_element(By.ID, "exportExcel")
            elemento.click()



        else:
            # O botão "Próximo" não está mais clicável, saia do loop
            break
    except:
        # O elemento de botão "Próximo" não foi encontrado, saia do loop
        break