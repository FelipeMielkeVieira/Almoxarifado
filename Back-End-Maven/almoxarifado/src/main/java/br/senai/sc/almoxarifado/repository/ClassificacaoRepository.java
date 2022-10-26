package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface ClassificacaoRepository extends JpaRepository<Classificacao, Long> { }

