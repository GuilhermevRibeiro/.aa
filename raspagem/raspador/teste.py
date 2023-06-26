from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import xlrd
import unicodedata

chrome_options = Options()
chrome_options.add_argument("--window-size=1920,1080")
navegador = webdriver.Chrome(options=chrome_options)

navegador.get('https://www.compras.rj.gov.br/Contrato/buscar.action#%27%27%27%27')

wait = WebDriverWait(navegador, 10)
elemento = wait.until(EC.presence_of_element_located((By.ID, "cnpjFornecedor")))
elemento.send_keys('34.729.047/0001-02')

elemento = wait.until(EC.presence_of_element_located((By.ID, "pesquisar")))
elemento.click()

elemento = wait.until(EC.presence_of_element_located((By.NAME, "dataTable_length")))
elemento.click()

elemento = wait.until(EC.presence_of_element_located((By.XPATH, "//option[@value='100']")))
elemento.click()

elemento = wait.until(EC.presence_of_element_located((By.ID, "exportExcel")))
elemento.click()

workbook = xlrd.open_workbook('Contratos.xls')
worksheet = workbook.sheet_by_index(0)

normalized_data = []
for row in worksheet.get_rows():
    normalized_row = [unicodedata.normalize('NFKD', cell.value).strip() if cell.ctype == 1 else cell.value for cell in row]
    normalized_data.append(normalized_row)

filtered_data = [row for row in normalized_data if any(cell != '' for cell in row)]

for row in filtered_data:
    # Inserir no banco de dados
    # ...
    pass

while True:
    try:
        next_button = wait.until(EC.presence_of_element_located((By.XPATH, '//*[@class="pagination"]//*[text()="Próximo"]')))

        if next_button.is_enabled():
            next_button.click()
            elemento = wait.until(EC.presence_of_element_located((By.ID, "exportExcel")))
            elemento.click()

            WebDriverWait(elemento, 10).until(EC.staleness_of(next_button))
        else:
            break
    except:
        break
