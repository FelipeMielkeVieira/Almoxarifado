package br.senai.sc.almoxarifado.model.entities;

public class Professor extends Usuario {
    public Professor() {
    }

    public Professor(String emailUsuario, String senhaUsuario, String nomeUsuario) {
        super(emailUsuario, senhaUsuario, nomeUsuario);
    }
}
