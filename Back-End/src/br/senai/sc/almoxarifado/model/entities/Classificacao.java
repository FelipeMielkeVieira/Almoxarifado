package br.senai.sc.almoxarifado.model.entities;

public class Classificacao {
    private Integer codigoClassificacao;
    private String classificacao;

    public Classificacao() {
    }

    public Classificacao(Integer codigoClassificacao, String classificacao) {
        this.codigoClassificacao = codigoClassificacao;
        this.classificacao = classificacao;
    }

    public Integer getCodigoClassificacao() {
        return codigoClassificacao;
    }

    public void setCodigoClassificacao(Integer codigoClassificacao) {
        this.codigoClassificacao = codigoClassificacao;
    }

    public String getClassificacao() {
        return classificacao;
    }

    public void setClassificacao(String classificacao) {
        this.classificacao = classificacao;
    }

    @Override
    public String toString() {
        return "Classificacao{" +
                "codigoClassificacao=" + codigoClassificacao +
                ", classificacao='" + classificacao + '\'' +
                '}';
    }
}
