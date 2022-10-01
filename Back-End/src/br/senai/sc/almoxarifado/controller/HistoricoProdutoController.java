package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.HistoricoProduto;
import br.senai.sc.almoxarifado.model.service.HistoricoProdutoService;

public class HistoricoProdutoController {
    HistoricoProdutoService service = new HistoricoProdutoService();
    
    public void inserirHistoricoProduto(HistoricoProduto historicoProduto, Integer codigoClassificacao, Integer codigoProduto){
        service.inserirHistoricoProduto(historicoProduto, codigoClassificacao, codigoProduto);
    }
}
