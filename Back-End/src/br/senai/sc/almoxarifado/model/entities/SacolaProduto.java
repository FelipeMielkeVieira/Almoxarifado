package br.senai.sc.almoxarifado.model.entities;

public class SacolaProduto {
    private Integer codigoSacolaProduto;
    private Integer qtdProduto;

    private Sacola  codigoSacola;
    private Produto codigoProduto;

    public SacolaProduto() { }

    public SacolaProduto(Integer codigoSacolaProduto, Integer qtdProduto, Sacola codigoSacola, Produto codigoProduto) {
        this.codigoSacolaProduto = codigoSacolaProduto;
        this.qtdProduto = qtdProduto;
        this.codigoSacola = codigoSacola;
        this.codigoProduto = codigoProduto;
    }

    public Integer getCodigoSacolaProduto() {
        return codigoSacolaProduto;
    }

    public void setCodigoSacolaProduto(Integer codigoSacolaProduto) {
        this.codigoSacolaProduto = codigoSacolaProduto;
    }

    public Integer getQtdProduto() {
        return qtdProduto;
    }

    public void setQtdProduto(Integer qtdProduto) {
        this.qtdProduto = qtdProduto;
    }

    public Sacola getCodigoSacola() {
        return codigoSacola;
    }

    public void setCodigoSacola(Sacola codigoSacola) {
        this.codigoSacola = codigoSacola;
    }

    public Produto getCodigoProduto() {
        return codigoProduto;
    }

    public void setCodigoProduto(Produto codigoProduto) {
        this.codigoProduto = codigoProduto;
    }

    @Override
    public String toString() {
        return "SacolaProduto{" +
                "codigoSacolaProduto=" + codigoSacolaProduto +
                ", qtdProduto=" + qtdProduto +
                ", codigoSacola=" + codigoSacola +
                ", codigoProduto=" + codigoProduto +
                '}';
    }
}
