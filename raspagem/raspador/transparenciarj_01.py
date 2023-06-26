from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from time import sleep

chrome_options = Options()
chrome_options.add_argument("--window-size=1920,1080")

navegador = webdriver.Chrome(options=chrome_options)
navegador.get('https://www.compras.rj.gov.br/Contrato/buscar.action#%27%27%27%27')

wait = WebDriverWait(navegador, 10)

elemento = wait.until(EC.presence_of_element_located((By.ID, "cnpjFornecedor")))
elemento.send_keys('34.729.047/0001-02')

elemento = wait.until(EC.element_to_be_clickable((By.ID, "pesquisar")))
elemento.click()

elemento = wait.until(EC.element_to_be_clickable((By.NAME, "dataTable_length")))
elemento.click()

elemento = wait.until(EC.element_to_be_clickable((By.XPATH, "//option[@value='100']")))
elemento.click()

sleep(3)

elemento = wait.until(EC.element_to_be_clickable((By.ID, "exportExcel")))
elemento.click()
sleep(5)

while True:
    try:
        next_button = wait.until(EC.element_to_be_clickable((By.XPATH, '//*[@class="pagination"]//*[text()="Próximo"]')))
        sleep(5)
        if next_button.is_enabled():
            next_button.click()

            wait.until(EC.staleness_of(next_button))

            elemento = wait.until(EC.element_to_be_clickable((By.ID, "exportExcel")))
            elemento.click()
            sleep(5)
        else:
            break
    except Exception as e:
        print(e)
        break

navegador.quit()
