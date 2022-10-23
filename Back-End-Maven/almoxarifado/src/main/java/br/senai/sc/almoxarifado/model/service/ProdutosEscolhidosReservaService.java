package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.ProdutosEscolhidosReserva;
import br.senai.sc.almoxarifado.model.entities.ProdutosEscolhidosSacola;
import br.senai.sc.almoxarifado.model.entities.Reserva;
import br.senai.sc.almoxarifado.model.entities.Sacola;
import br.senai.sc.almoxarifado.repository.ProdutosEscolhidosReservaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProdutosEscolhidosReservaService {
    private ProdutosEscolhidosReservaRepository repository;

    public <S extends ProdutosEscolhidosReserva> S save(S entity) {
        return repository.save(entity);
    }

    public List<ProdutosEscolhidosReserva> findByReserva(Reserva reserva) {
        return repository.findByReserva(reserva);
    }
}
