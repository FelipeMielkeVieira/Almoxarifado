package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.Ocorrencia;
import br.senai.sc.almoxarifado.model.entities.Reserva;
import br.senai.sc.almoxarifado.repository.OcorrenciaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OcorrenciaService {
    private OcorrenciaRepository ocorrenciaRepository;

    public <S extends Ocorrencia> S save(S entity) {
        return ocorrenciaRepository.save(entity);
    }

    public List<Ocorrencia> findAll() {
        return ocorrenciaRepository.findAll();
    }

    public Optional<Ocorrencia> findById(Long aLong) {
        return ocorrenciaRepository.findById(aLong);
    }

    public List<Ocorrencia> findByReserva(Reserva reserva) {
        return ocorrenciaRepository.findByReserva(reserva);
    }

    public boolean existsById(Long aLong) {
        return ocorrenciaRepository.existsById(aLong);
    }

    public void deleteById(Long aLong) {
        ocorrenciaRepository.deleteById(aLong);
    }
}
