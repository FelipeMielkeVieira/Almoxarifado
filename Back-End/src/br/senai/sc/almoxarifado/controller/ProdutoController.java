package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.service.ProdutoService;

import java.util.Collection;

public class ProdutoController {
    ProdutoService service = new ProdutoService();

    public void inserirProduto(Produto produto){
        service.inserirProduto(produto);
    }

    public void editarProduto(Produto produto){
        service.editarProduto(produto);
    }

    public void deletarProduto(Integer codigoProduto){
        service.deletarProduto(codigoProduto);
    }

    public void diminuirQuantidade(Integer codigoProduto, Integer quantidadeADiminuir){
        service.diminuirQuantidade(codigoProduto, quantidadeADiminuir);
    }

    public Collection<Produto> buscarProdutos(Integer indexInicial){
        return service.buscarProdutos(indexInicial);
    }

    public Collection<Produto> buscarProdutosPorNome(String nome, Integer comeco, Integer limite){
        return service.buscarProdutoPorNome(nome, comeco, limite);
    }

    public Collection<Produto> produtosFiltrados(Integer tipoFiltro){
        return service.produtosFiltrados(tipoFiltro);
    }

    public Collection<Produto> produtosOrdenados(Integer tipoOrdenacao){
        return service.produtosOrdenados(tipoOrdenacao);
    }
}
