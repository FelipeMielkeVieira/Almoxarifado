package br.senai.sc.almoxarifado.model.entities;

import java.util.Date;

public class HistoricoProduto {
    private Integer codigoHistoricoProduto;
    private Integer quantidadeHistoricoProduto;
    private String autorHistoricoProduto;
    private String nomeHistoricoProduto;
    private String anexosHistoricoProduto;
    private String caracteristicaHistoricoProduto;
    private java.sql.Date dataEdicaoHistoricoProduto;
    private boolean descartavelHistoricoProduto;
    private byte[] imagemHistoricoProduto;

    private Produto codigoProdutoHistorico;
    private Classificacao codigoClassificacaoHistorico;

    public HistoricoProduto() {
    }

    public HistoricoProduto(Integer codigoHistoricoProduto, Integer quantidadeHistoricoProduto, String autorHistoricoProduto, String nomeHistoricoProduto, String caracteristicaHistoricoProduto, java.sql.Date dataEdicaoHistoricoProduto, boolean descartavelHistoricoProduto, byte[] imagemHistoricoProduto, String anexosHistoricoProduto, Produto codigoProdutoHistorico, Classificacao codigoClassificacaoHistorico) {
        this.codigoHistoricoProduto = codigoHistoricoProduto;
        this.quantidadeHistoricoProduto = quantidadeHistoricoProduto;
        this.autorHistoricoProduto = autorHistoricoProduto;
        this.nomeHistoricoProduto = nomeHistoricoProduto;
        this.caracteristicaHistoricoProduto = caracteristicaHistoricoProduto;
        this.dataEdicaoHistoricoProduto = dataEdicaoHistoricoProduto;
        this.descartavelHistoricoProduto = descartavelHistoricoProduto;
        this.imagemHistoricoProduto = imagemHistoricoProduto;
        this.anexosHistoricoProduto = anexosHistoricoProduto;
        this.codigoProdutoHistorico = codigoProdutoHistorico;
        this.codigoClassificacaoHistorico = codigoClassificacaoHistorico;
    }

    public Integer getCodigoHistoricoProduto() {
        return codigoHistoricoProduto;
    }

    public void setCodigoHistoricoProduto(Integer codigoHistoricoProduto) {
        this.codigoHistoricoProduto = codigoHistoricoProduto;
    }

    public Integer getQuantidadeHistoricoProduto() {
        return quantidadeHistoricoProduto;
    }

    public void setQuantidadeHistoricoProduto(Integer quantidadeHistoricoProduto) {
        this.quantidadeHistoricoProduto = quantidadeHistoricoProduto;
    }

    public String getAutorHistoricoProduto() {
        return autorHistoricoProduto;
    }

    public void setAutorHistoricoProduto(String autorHistoricoProduto) {
        this.autorHistoricoProduto = autorHistoricoProduto;
    }

    public String getNomeHistoricoProduto() {
        return nomeHistoricoProduto;
    }

    public void setNomeHistoricoProduto(String nomeHistoricoProduto) {
        this.nomeHistoricoProduto = nomeHistoricoProduto;
    }

    public String getCaracteristicaHistoricoProduto() {
        return caracteristicaHistoricoProduto;
    }

    public void setCaracteristicaHistoricoProduto(String caracteristicaHistoricoProduto) {
        this.caracteristicaHistoricoProduto = caracteristicaHistoricoProduto;
    }

    public java.sql.Date getDataEdicaoHistoricoProduto() {
        return dataEdicaoHistoricoProduto;
    }

    public void setDataEdicaoHistoricoProduto(java.sql.Date dataEdicaoHistoricoProduto) {
        this.dataEdicaoHistoricoProduto = dataEdicaoHistoricoProduto;
    }

    public boolean isDescartavelHistoricoProduto() {
        return descartavelHistoricoProduto;
    }

    public void setDescartavelHistoricoProduto(boolean descartavelHistoricoProduto) {
        this.descartavelHistoricoProduto = descartavelHistoricoProduto;
    }

    public byte[] getImagemHistoricoProduto() {
        return imagemHistoricoProduto;
    }

    public void setImagemHistoricoProduto(byte[] imagemHistoricoProduto) {
        this.imagemHistoricoProduto = imagemHistoricoProduto;
    }

    public String getAnexosHistoricoProduto() {
        return anexosHistoricoProduto;
    }

    public void setAnexosHistoricoProduto(String anexosHistoricoProduto) {
        this.anexosHistoricoProduto = anexosHistoricoProduto;
    }

    @Override
    public String toString() {
        return "HistoricoProduto{" +
                "codigoHistoricoProduto=" + codigoHistoricoProduto +
                ", quantidadeHistoricoProduto=" + quantidadeHistoricoProduto +
                ", autorHistoricoProduto='" + autorHistoricoProduto + '\'' +
                ", nomeHistoricoProduto='" + nomeHistoricoProduto + '\'' +
                ", caracteristicaHistoricoProduto='" + caracteristicaHistoricoProduto + '\'' +
                ", dataEdicaoHistoricoProduto=" + dataEdicaoHistoricoProduto +
                ", descartavelHistoricoProduto=" + descartavelHistoricoProduto +
                ", imagemHistoricoProduto=" + imagemHistoricoProduto +
                '}';
    }
}
