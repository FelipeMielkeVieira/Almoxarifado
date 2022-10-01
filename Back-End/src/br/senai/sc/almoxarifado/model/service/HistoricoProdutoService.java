package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.dao.HistoricoProdutoDAO;
import br.senai.sc.almoxarifado.model.entities.HistoricoProduto;

public class HistoricoProdutoService {

    public void inserirHistoricoProduto(HistoricoProduto historicoProduto, Integer codigoClassificacao, Integer codigoProduto) {
        new HistoricoProdutoDAO().inserirHistoricoProduto(historicoProduto, codigoClassificacao, codigoProduto);
    }
}
