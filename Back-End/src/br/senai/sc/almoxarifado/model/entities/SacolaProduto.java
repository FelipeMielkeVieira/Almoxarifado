package br.senai.sc.almoxarifado.model.entities;

public class SacolaProduto {
    private Integer codigoSacolaProduto;
    private Integer qtdProduto;

    private Sacola sacola;
    private Produto produto;

    public SacolaProduto() { }

    public SacolaProduto(Integer codigoSacolaProduto, Integer qtdProduto, Sacola sacola, Produto produto) {
        this.codigoSacolaProduto = codigoSacolaProduto;
        this.qtdProduto = qtdProduto;
        this.sacola = sacola;
        this.produto = produto;
    }

    public SacolaProduto(Integer qtdProduto, Produto produto) {
        this.qtdProduto = qtdProduto;
        this.produto = produto;
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

    public Sacola getSacola() {
        return sacola;
    }

    public void setSacola(Sacola sacola) {
        this.sacola = sacola;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    @Override
    public String toString() {
        return "SacolaProduto{" +
                "codigoSacolaProduto=" + codigoSacolaProduto +
                ", qtdProduto=" + qtdProduto +
                ", codigoSacola=" + sacola +
                ", codigoProduto=" + produto +
                '}';
    }
}
