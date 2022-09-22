package br.senai.sc.almoxarifado.model.entities;

import java.util.ArrayList;

public class Produto {
    private Integer codigoProduto;
    private Integer quantidadeProduto;
    private String nomeProduto;
    private String caracteristicasProduto;
    private String anexosProduto;
    private boolean produtoDescartavel;
    private Byte imagemProduto;

    private ArrayList<Localizacao> listaLocalizacoesProduto;
    private Classificacao classificacaoProduto;

    public Produto() { }

    public Produto(Integer codigoProduto, Integer quantidadeProduto, String nomeProduto, String caracteristicasProduto, String anexosProduto, boolean produtoDescartavel, Byte imagemProduto, ArrayList<Localizacao> listaLocalizacoesProduto, Classificacao classificacaoProduto) {
        this.codigoProduto = codigoProduto;
        this.quantidadeProduto = quantidadeProduto;
        this.nomeProduto = nomeProduto;
        this.caracteristicasProduto = caracteristicasProduto;
        this.anexosProduto = anexosProduto;
        this.produtoDescartavel = produtoDescartavel;
        this.imagemProduto = imagemProduto;
        this.listaLocalizacoesProduto = listaLocalizacoesProduto;
        this.classificacaoProduto = classificacaoProduto;
    }

    public Integer getCodigoProduto() {
        return codigoProduto;
    }

    public void setCodigoProduto(Integer codigoProduto) {
        this.codigoProduto = codigoProduto;
    }

    public Integer getQuantidadeProduto() {
        return quantidadeProduto;
    }

    public void setQuantidadeProduto(Integer quantidadeProduto) {
        this.quantidadeProduto = quantidadeProduto;
    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public String getCaracteristicasProduto() {
        return caracteristicasProduto;
    }

    public void setCaracteristicasProduto(String caracteristicasProduto) {
        this.caracteristicasProduto = caracteristicasProduto;
    }

    public String getAnexosProduto() {
        return anexosProduto;
    }

    public void setAnexosProduto(String anexosProduto) {
        this.anexosProduto = anexosProduto;
    }

    public boolean isProdutoDescartavel() {
        return produtoDescartavel;
    }

    public void setProdutoDescartavel(boolean produtoDescartavel) {
        this.produtoDescartavel = produtoDescartavel;
    }

    public Byte getImagemProduto() {
        return imagemProduto;
    }

    public void setImagemProduto(Byte imagemProduto) {
        this.imagemProduto = imagemProduto;
    }

    public ArrayList<Localizacao> getListaLocalizacoesProduto() {
        return listaLocalizacoesProduto;
    }

    public void setListaLocalizacoesProduto(ArrayList<Localizacao> listaLocalizacoesProduto) {
        this.listaLocalizacoesProduto = listaLocalizacoesProduto;
    }

    public Classificacao getClassificacaoProduto() {
        return classificacaoProduto;
    }

    public void setClassificacaoProduto(Classificacao classificacaoProduto) {
        this.classificacaoProduto = classificacaoProduto;
    }

    @Override
    public String toString() {
        return "Produto{" +
                "codigoProduto=" + codigoProduto +
                ", quantidadeProduto=" + quantidadeProduto +
                ", nomeProduto='" + nomeProduto + '\'' +
                ", caracteristicasProduto='" + caracteristicasProduto + '\'' +
                ", anexosProduto='" + anexosProduto + '\'' +
                ", produtoDescartavel=" + produtoDescartavel +
                ", imagemProduto=" + imagemProduto +
                ", listaLocalizacoesProduto=" + listaLocalizacoesProduto +
                ", classificacaoProduto=" + classificacaoProduto +
                '}';
    }
}
