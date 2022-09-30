package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.service.SacolaProdutoService;

public class SacolaProdutoController {
    SacolaProdutoService service = new SacolaProdutoService();

    public void inserirProdutoSacola(Integer idSacola, Integer codigoProduto, Integer qtdProduto) {
        service.inserirProdutoSacola(idSacola, codigoProduto, qtdProduto);
    }

    public void deletarProdutoDasSacolas(Integer codigoProduto) {
        service.deletarProdutoDasSacolas(codigoProduto);
    }

}
