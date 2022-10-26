package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.Reserva;
import br.senai.sc.almoxarifado.repository.ReservaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {
    private ReservaRepository reservaRepository;

    public ReservaService(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    public List<Reserva> findAll() {
        return reservaRepository.findAll();
    }

    public List<Reserva> findByVisibilidade(Boolean visibilidade) {
        return reservaRepository.findByVisibilidade(visibilidade);
    }

    public <S extends Reserva> S save(S entity) {
        return reservaRepository.save(entity);
    }

    public Optional<Reserva> findById(Long aLong) {
        return reservaRepository.findById(aLong);
    }

    public boolean existsById(Long aLong) {
        return reservaRepository.existsById(aLong);
    }

    public void deleteById(Long aLong) {
        reservaRepository.deleteById(aLong);
    }
}
