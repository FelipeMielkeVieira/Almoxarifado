package br.senai.sc.almoxarifado.model.factory;

import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.entities.Sacola;
import br.senai.sc.almoxarifado.model.entities.SacolaProduto;

public class SacolaProdutoFactory {
    public SacolaProduto getSacolaProduto(Integer codigoSacolaProduto, Integer quantidadeSacolaProduto,
                                          Sacola sacola, Produto produto) {

        return new SacolaProduto(codigoSacolaProduto, quantidadeSacolaProduto, sacola, produto);
    }
}
