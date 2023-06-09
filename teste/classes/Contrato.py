class Contrato:
    def __init__(
            self,
            identificador=None,
            modalidade_licitacao=None,
            numero_aviso_licitacao=None,
            codigo_contrato=None,
            licitacao_associada=None,
            origem_licitacao=None,
            numero=None,
            objeto=None,
            numero_aditivo=None,
            numero_processo=None,
            cpf_contratada=None,
            cnpj_contratada=None,
            data_assinatura=None,
            fundamento_legal=None,
            data_inicio_vigencia=None,
            data_termino_vigencia=None,
            valor_inicial=None,
            links_self_href=None,
            links_self_title=None,
            links_aditivos_href=None,
            links_aditivos_title=None,
            links_apostilamentos_href=None,
            links_apostilamentos_title=None,
            links_eventos_href=None,
            links_eventos_title=None,
            links_fornecedor_href=None,
            links_fornecedor_title=None,
            links_licitacao_href=None,
            links_licitacao_title=None,
            links_modalidade_licitacao_href=None,
            links_modalidade_licitacao_title=None,
            links_tipo_contrato_href=None,
            links_tipo_contrato_title=None,
            links_uasg_href=None,
            links_uasg_title=None,
            orgao=None,
            nome_fornecedor=None,
            numero_contrato=None,
            esfera=None,
            poder=None,
            uf_orgao=None,
            fonte=None,
    ):
        self.identificador = identificador
        self.modalidade_licitacao = modalidade_licitacao
        self.numero_aviso_licitacao = numero_aviso_licitacao
        self.codigo_contrato = codigo_contrato
        self.licitacao_associada = licitacao_associada
        self.origem_licitacao = origem_licitacao
        self.numero = numero
        self.objeto = objeto
        self.numero_aditivo = numero_aditivo
        self.numero_processo = numero_processo
        self.cpf_contratada = cpf_contratada
        self.cnpj_contratada = cnpj_contratada
        self.data_assinatura = data_assinatura
        self.fundamento_legal = fundamento_legal
        self.data_inicio_vigencia = data_inicio_vigencia
        self.data_termino_vigencia = data_termino_vigencia
        self.valor_inicial = valor_inicial
        self.links_self_href = links_self_href
        self.links_self_title = links_self_title
        self.links_aditivos_href = links_aditivos_href
        self.links_aditivos_title = links_aditivos_title
        self.links_apostilamentos_href = links_apostilamentos_href
        self.links_apostilamentos_title = links_apostilamentos_title
        self.links_eventos_href = links_eventos_href
        self.links_eventos_title = links_eventos_title
        self.links_fornecedor_href = links_fornecedor_href
        self.links_fornecedor_title = links_fornecedor_title
        self.links_licitacao_href = links_licitacao_href
        self.links_licitacao_title = links_licitacao_title
        self.links_modalidade_licitacao_href = links_modalidade_licitacao_href
        self.links_modalidade_licitacao_title = links_modalidade_licitacao_title
        self.links_tipo_contrato_href = links_tipo_contrato_href
        self.links_tipo_contrato_title = links_tipo_contrato_title
        self.links_uasg_href = links_uasg_href
        self.links_uasg_title = links_uasg_title
        self.orgao = orgao
        self.nome_fornecedor = nome_fornecedor
        self.numero_contrato = numero_contrato
        self.esfera = esfera
        self.poder = poder
        self.uf_orgao = uf_orgao
        self.fonte = fonte
