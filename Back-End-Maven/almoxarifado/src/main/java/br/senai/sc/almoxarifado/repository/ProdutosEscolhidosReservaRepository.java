package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.ProdutosEscolhidosReserva;
import br.senai.sc.almoxarifado.model.entities.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutosEscolhidosReservaRepository extends JpaRepository<ProdutosEscolhidosReserva, Long> {
    List<ProdutosEscolhidosReserva> findByReserva(Reserva reserva);
}
