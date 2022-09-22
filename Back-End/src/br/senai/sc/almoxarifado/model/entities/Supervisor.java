package br.senai.sc.almoxarifado.model.entities;

public class Supervisor extends Atendente2 {
    public Supervisor() { }

    public Supervisor(String emailUsuario, String senhaUsuario, String nomeUsuario) {
        super(emailUsuario, senhaUsuario, nomeUsuario);
    }
}
