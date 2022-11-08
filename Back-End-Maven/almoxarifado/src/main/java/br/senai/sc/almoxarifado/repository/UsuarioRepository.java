package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.TipoUsuario;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    List<Usuario> findAllByVisibilidade(Boolean visibilidade);
    List<Usuario> findByTipoUsuarioAndVisibilidade(TipoUsuario tipoUsuario, Boolean visibilidade);
    List<Usuario> findByTipoUsuarioNotAndVisibilidade(TipoUsuario tipoUsuario, Boolean visibilidade);
    Object countByTipoUsuarioAndVisibilidade(TipoUsuario pendente, boolean b);
    Object countByTipoUsuarioIsNotAndVisibilidade(TipoUsuario pendente, boolean b);
    List<Usuario> findByTipoUsuarioIsNotAndVisibilidade(TipoUsuario pendente, boolean b, Pageable pageable);
    List<Usuario> findByTipoUsuarioAndVisibilidade(TipoUsuario pendente, boolean b, Pageable pageable);
}
