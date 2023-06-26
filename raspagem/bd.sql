create database pic 

use pic; 

create table contratos(
		id_contrato INTEGER PRIMARY KEY AUTO_INCREMENT;
		contratacao CHAR(10),
		status_contratacao VARCHAR(10),
		data_contratacao CHAR(10),
		unidade VARCHAR(100),
		processo VARCHAR(50),
		objeto VARCHAR(200),
		tipo_aquisicao VARCHAR(50),
		criterio_julgamento VARCHAR(30),
		data_inicio_vigencia CHAR(10),
		data_fim_vigencia CHAR(10),
		nome_fornecedor VARCHAR(100),
		cnpj_contratada CHAR(18),
		valor_total_estimado VARCHAR(20),
		valor_total VARCHAR(20),
		valor_total_executado VARCHAR(20) null,
		valor_total_pago VARCHAR(20) null
		);

