package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.dao.UsuarioDAO;
import br.senai.sc.almoxarifado.model.entities.TipoUsuario;
import br.senai.sc.almoxarifado.model.entities.Usuario;

import java.util.Collection;

public class UsuarioService {

    public void inserirUsuario(Usuario usuario) {
        new UsuarioDAO().inserirUsuario(usuario);
    }

    public void removerUsuario(String email) {
        new UsuarioDAO().removerUsuario(email);
    }

    public void editarUsuario(String email, TipoUsuario tipoUsuario) {
        new UsuarioDAO().editarUsuario(email, tipoUsuario);
    }

    public Usuario selecionarPorEmail(String email) {
        return new UsuarioDAO().selecionarPorEmail(email);
    }

    public Collection<Usuario> selecionarTodos(Integer comeco, Integer limite) {
        return new UsuarioDAO().selecionarTodos(comeco, limite);
    }

    public Collection<Usuario> selecionarPorNome(String nome, Integer comeco, Integer limite) {
        return new UsuarioDAO().selecionarPorNome(nome, comeco, limite);
    }
}

