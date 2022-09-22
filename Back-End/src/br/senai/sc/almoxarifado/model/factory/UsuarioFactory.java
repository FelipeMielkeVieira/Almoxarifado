package br.senai.sc.almoxarifado.model.factory;

import br.senai.sc.almoxarifado.model.entities.*;

public class UsuarioFactory {

    public Usuario getUsuario(String emailUsuario, String senhaUsuario, String nomeUsuario, String tipoUsuario) {
        return switch (tipoUsuario) {
            case "PROFESSOR" -> new Professor(emailUsuario, senhaUsuario, nomeUsuario);
            case "ATENDENTE1" -> new Atendente1(emailUsuario, senhaUsuario, nomeUsuario);
            case "ATENDENTE2" -> new Atendente2(emailUsuario, senhaUsuario, nomeUsuario);
            default -> new Supervisor(emailUsuario, senhaUsuario, nomeUsuario);
        };
    }
}
