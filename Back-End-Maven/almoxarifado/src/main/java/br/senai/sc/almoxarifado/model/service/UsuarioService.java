package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.TipoUsuario;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import br.senai.sc.almoxarifado.repository.UsuarioRepository;
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

    public List<Usuario> findByTipoUsuario(TipoUsuario tipoUsuario) {
        return usuarioRepository.findByTipoUsuario(tipoUsuario);
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
}
