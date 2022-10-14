package br.senai.sc.almoxarifado.model.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum TipoUsuario {
    PROFESSOR("PROFESSOR"),
    ATENDENTE1("ATENDENTE1"),
    ATENDENTE2("ATENDENTE2"),
    SUPERVISOR("SUPERVISOR"),
    PENDENTE("PENDENTE");

    String nome;
}
