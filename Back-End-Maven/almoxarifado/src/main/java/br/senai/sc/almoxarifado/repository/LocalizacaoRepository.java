package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.Localizacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocalizacaoRepository extends JpaRepository<Localizacao, Integer> {
}
