package br.senai.sc.almoxarifado.model.entities;

public class Localizacao {
    private Integer codigoLocalizacao;
    private String  nome;

    public Localizacao() { }

    public Localizacao(Integer codigoLocalizacao, String nome) {
        this.codigoLocalizacao = codigoLocalizacao;
        this.nome = nome;
    }

    public Localizacao(String nome) {
        this.nome = nome;
    }

    public Integer getCodigoLocalizacao() {
        return codigoLocalizacao;
    }

    public void setCodigoLocalizacao(Integer codigoLocalizacao) {
        this.codigoLocalizacao = codigoLocalizacao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Localizacao{" +
                "codigoLocalizacao=" + codigoLocalizacao +
                ", nome='" + nome + '\'' +
                '}';
    }
}
