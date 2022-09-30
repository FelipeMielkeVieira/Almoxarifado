package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.dao.ProdutoDAO;
import br.senai.sc.almoxarifado.model.entities.Produto;

import java.util.Collection;

public class ProdutoService {

    public void inserirProduto(Produto produto) {
        new ProdutoDAO().inserirProduto(produto);
    }

    public void editarProduto(Produto produto) {
        new ProdutoDAO().editarProduto(produto);
    }

    public void deletarProduto(Integer codigoProduto) {
        new ProdutoDAO().deletarProduto(codigoProduto);
    }

    public void diminuirQuantidade(Integer codigoProduto, Integer quantidadeADiminuir) {
        new ProdutoDAO().diminuirQuantidade(codigoProduto, quantidadeADiminuir);
    }

    public Collection<Produto> buscarProdutos(Integer indexInicial) {
        return new ProdutoDAO().buscarProdutos(indexInicial);
    }

    public Collection<Produto> buscarProdutoPorNome(String nome, Integer comeco, Integer limite) {
        return new ProdutoDAO().buscarProdutoPorNome(nome, comeco, limite);
    }

    public Collection<Produto> produtosFiltrados(Integer tipoFiltro) {
        return new ProdutoDAO().produtosFiltrados(tipoFiltro);
    }

    public Collection<Produto> produtosOrdenados(Integer tipoOrdenacao) {
        return new ProdutoDAO().produtosOrdenados(tipoOrdenacao);
    }

}
