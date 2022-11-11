package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.TipoUsuario;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import br.senai.sc.almoxarifado.repository.UsuarioRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    private UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    public List<Usuario> findAllByVisibilidade(Boolean visibilidade) {
        return usuarioRepository.findAllByVisibilidade(visibilidade);
    }

    public List<Usuario> findByTipoUsuarioAndVisibilidade(TipoUsuario tipoUsuario, Boolean visibilidade) {
        return usuarioRepository.findByTipoUsuarioAndVisibilidade(tipoUsuario, visibilidade);
    }

    public List<Usuario> findByTipoUsuarioIsNot(TipoUsuario tipoUsuario, Boolean visibilidade) {
        return usuarioRepository.findByTipoUsuarioNotAndVisibilidade(tipoUsuario, visibilidade);
    }

    public <S extends Usuario> S save(S entity) {
        return usuarioRepository.save(entity);
    }

    public Optional<Usuario> findById(String email) {
        return usuarioRepository.findById(email);
    }

    public boolean existsById(String email) {
        return usuarioRepository.existsById(email);
    }

    public void deleteById(String email) {
        usuarioRepository.deleteById(email);
    }

    public Object countCadastros() {
        return this.usuarioRepository.countByTipoUsuarioAndVisibilidade(TipoUsuario.PENDENTE, true);
    }

    public Object countUsers() {
        return this.usuarioRepository.countByTipoUsuarioIsNotAndVisibilidade(TipoUsuario.PENDENTE, true);
    }

    public List<Usuario> findPageUser(Pageable pageable) {
        return this.usuarioRepository.findByTipoUsuarioIsNotAndVisibilidade(TipoUsuario.PENDENTE, true, pageable);
    }

    public List<Usuario> findPageCadastro(Pageable pageable) {
        return this.usuarioRepository.findByTipoUsuarioAndVisibilidade(TipoUsuario.PENDENTE, true, pageable);
    }

    public Object countUsersByNome(String nome) {
        return this.usuarioRepository.countByVisibilidadeAndTipoUsuarioIsNotAndNomeUsuarioContainingOrVisibilidadeAndTipoUsuarioIsNotAndEmailUsuarioContaining(true, TipoUsuario.PENDENTE, nome, true, TipoUsuario.PENDENTE, nome);
    }

    public List<Usuario> findPageUserByNome(String nome, Pageable pageable) {
        return this.usuarioRepository.findByVisibilidadeAndTipoUsuarioIsNotAndNomeUsuarioContainingOrVisibilidadeAndTipoUsuarioIsNotAndEmailUsuarioContaining(true, TipoUsuario.PENDENTE, nome, true, TipoUsuario.PENDENTE, nome, pageable);
    }

    public Integer countCadastrosByNome(String nome) {
        return this.usuarioRepository.countByVisibilidadeAndTipoUsuarioAndNomeUsuarioContainingOrVisibilidadeAndTipoUsuarioAndEmailUsuarioContaining(true, TipoUsuario.PENDENTE, nome, true, TipoUsuario.PENDENTE, nome);
    }

    public List<Usuario> findPageCadastroByNome(String nome, Pageable pageable) {
        return this.usuarioRepository.findByVisibilidadeAndTipoUsuarioAndNomeUsuarioContainingOrVisibilidadeAndTipoUsuarioAndEmailUsuarioContaining(true, TipoUsuario.PENDENTE, nome, true, TipoUsuario.PENDENTE, nome, pageable);
    }
}
