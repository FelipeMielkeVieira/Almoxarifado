package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.Localizacao;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocalizacaoRepository extends JpaRepository<Localizacao, Long> {
    List<Localizacao> findByIdPai(Long id);
    List<Localizacao> findByIdPai(Long id, Pageable pageable);
    List<Localizacao> findByIdIsNot(Pageable pageable, Long id);
    List<Localizacao> findByNomeContaining(String nome, Pageable pageable);
    Object countByNomeContaining(String nome);
    List<Localizacao> findByNomeContaining(String nome);
    Integer countByIdPai(Long idPai);
}
