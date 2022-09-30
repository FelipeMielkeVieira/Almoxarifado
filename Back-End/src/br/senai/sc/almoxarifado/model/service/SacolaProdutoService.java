package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.dao.SacolaProdutoDAO;

public class SacolaProdutoService {

    public void inserirProdutoSacola(Integer idSacola, Integer codigoProduto, Integer qtdProduto) {
        new SacolaProdutoDAO().inserirProdutoSacola(idSacola, codigoProduto, qtdProduto);
    }

    public void deletarProdutoDasSacolas(Integer codigoProduto) {
        new SacolaProdutoDAO().deletarProdutoDasSacolas(codigoProduto);
    }
}
