package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.TipoUsuario;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import br.senai.sc.almoxarifado.model.service.UsuarioService;

import java.util.Collection;

public class UsuarioController {
    UsuarioService service = new UsuarioService();

    public void inserirUsuario(Usuario usuario){
        service.inserirUsuario(usuario);
    }

    public void removerUsuario(String email){
        service.removerUsuario(email);
    }

    public void editarUsuario(String email, TipoUsuario tipoUsuario){
        service.editarUsuario(email, tipoUsuario);
    }

    public Usuario selecionarPorEmail(String email){
        return service.selecionarPorEmail(email);
    }

    public Collection<Usuario> selecionarTodos(Integer comeco, Integer limite){
        return service.selecionarTodos(comeco, limite);
    }

    public Collection<Usuario> selecionarPorNome(String nome, Integer comeco, Integer limite){
        return service.selecionarPorNome(nome, comeco, limite);
    }
}
