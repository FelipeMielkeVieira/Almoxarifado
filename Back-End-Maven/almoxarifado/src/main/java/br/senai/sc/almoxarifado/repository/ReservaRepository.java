package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {
}
