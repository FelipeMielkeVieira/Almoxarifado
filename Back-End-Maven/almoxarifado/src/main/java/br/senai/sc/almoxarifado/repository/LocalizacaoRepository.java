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
    List<Localizacao> findByIdIsNot(Pageable pageable, Long id);
}
