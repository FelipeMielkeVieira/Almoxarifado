package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.dao.ProdutoLocalizacaoDAO;

public class ProdutoLocalizacaoService {

    public void inserirProdutoLocalizacao(int produtoId, int localizcaoId) {
        new ProdutoLocalizacaoDAO().inserirProdutoLocalizacao(produtoId, localizcaoId);
    }

    public void deletarProdutoLocalizacaoPorProduto(Integer codigoProduto) {
        new ProdutoLocalizacaoDAO().deletarProdutoLocalizacaoPorProduto(codigoProduto);
    }

}
