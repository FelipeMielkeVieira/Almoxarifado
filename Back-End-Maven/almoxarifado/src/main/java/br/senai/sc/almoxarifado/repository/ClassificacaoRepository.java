package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClassificacaoRepository extends JpaRepository<Classificacao, Integer> { }

