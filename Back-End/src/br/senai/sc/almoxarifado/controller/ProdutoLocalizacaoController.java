package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.service.ProdutoLocalizacaoService;

public class ProdutoLocalizacaoController {
    ProdutoLocalizacaoService service = new ProdutoLocalizacaoService();

    public void inserirProdutoLocalizacao(int produtoId, int localizcaoId) {
        service.inserirProdutoLocalizacao(produtoId, localizcaoId);
    }

    public void deletarProdutoLocalizacaoPorProduto(Integer codigoProduto) {
        service.deletarProdutoLocalizacaoPorProduto(codigoProduto);
    }
}
