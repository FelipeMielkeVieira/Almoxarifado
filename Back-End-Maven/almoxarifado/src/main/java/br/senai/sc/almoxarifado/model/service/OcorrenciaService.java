package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.Ocorrencia;
import br.senai.sc.almoxarifado.model.entities.Reserva;
import br.senai.sc.almoxarifado.repository.OcorrenciaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OcorrenciaService {
    private OcorrenciaRepository ocorrenciaRepository;

    public <S extends Ocorrencia> S save(S entity) {
        return ocorrenciaRepository.save(entity);
    }

    public List<Ocorrencia> findByReserva(Reserva reserva) {
        return ocorrenciaRepository.findByReserva(reserva);
    }
}
