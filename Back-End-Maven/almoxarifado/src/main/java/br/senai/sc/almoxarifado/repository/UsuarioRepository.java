package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.TipoUsuario;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    List<Usuario> findAllByVisibilidade(Boolean visibilidade);
    List<Usuario> findByTipoUsuario(TipoUsuario tipoUsuario);
}
