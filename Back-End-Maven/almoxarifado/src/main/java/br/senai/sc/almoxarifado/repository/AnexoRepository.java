package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.Anexo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface AnexoRepository extends JpaRepository<Anexo, Long> {
}
