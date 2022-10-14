package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.Anexo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnexoRepository extends JpaRepository<Anexo, Integer> { }
