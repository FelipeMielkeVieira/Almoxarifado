package br.senai.sc.almoxarifado.model.entities;

public enum TipoUsuario {

    PROFESSOR("PROFESSOR"), ATENDENTE1("ATENDENTE1"), ATENDENTE2("ATENDENTE2"), SUPERVISOR("SUPERVISOR");

    String nome;

    TipoUsuario(String nome) {
        this.nome = nome;
    }
}
