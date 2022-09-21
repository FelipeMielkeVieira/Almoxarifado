package br.senai.sc.almoxarifado.model.entities;

public abstract class Usuario {
    private String emailUsuario;
    private String senhaUsuario;
    private String nomeUsuario;

    public Usuario(){ }

    public Usuario(String emailUsuario, String senhaUsuario, String nomeUsuario) {
        this.emailUsuario = emailUsuario;
        this.senhaUsuario = senhaUsuario;
        this.nomeUsuario = nomeUsuario;
    }

    public String getEmailUsuario() {
        return emailUsuario;
    }

    public void setEmailUsuario(String emailUsuario) {
        this.emailUsuario = emailUsuario;
    }

    public String getSenhaUsuario() {
        return senhaUsuario;
    }

    public void setSenhaUsuario(String senhaUsuario) {
        this.senhaUsuario = senhaUsuario;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "emailUsuario='" + emailUsuario + '\'' +
                ", senhaUsuario='" + senhaUsuario + '\'' +
                ", nomeUsuario='" + nomeUsuario + '\'' +
                '}';
    }
}
