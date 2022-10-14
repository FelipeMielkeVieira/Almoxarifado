package br.senai.sc.almoxarifado.model.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Status {
    FINALIZADO("FINALIZADO"),
    ESPERANDO_DEVOLUCAO("ESPERANDO_DEVOLUCAO"),
    ESPERANDO_RETIRADA("ESPERANDO_RETIRADA");

    String status;
}
