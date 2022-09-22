package br.senai.sc.almoxarifado.model.factory;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.entities.Localizacao;
import br.senai.sc.almoxarifado.model.entities.Produto;

import java.util.ArrayList;

public class ProdutoFactory {

    public Produto getProduto(Integer codigoProduto, Integer quantidadeProduto, String nomeProduto, String caracteristicasProduto, String anexosProduto, Boolean produtoDescartavel, Byte imagemProduto, ArrayList<Localizacao> listaLocalizacoesProduto, Classificacao classificacaoProduto) {
        return new Produto(codigoProduto, quantidadeProduto, nomeProduto, caracteristicasProduto, anexosProduto, produtoDescartavel, imagemProduto, listaLocalizacoesProduto, classificacaoProduto);
    }
}
