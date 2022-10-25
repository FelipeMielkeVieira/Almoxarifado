package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.Sacola;
import br.senai.sc.almoxarifado.repository.SacolaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SacolaService {
    private SacolaRepository sacolaRepository;

    public SacolaService(SacolaRepository sacolaRepository) {
        this.sacolaRepository = sacolaRepository;
    }

    public List<Sacola> findAll() {
        return sacolaRepository.findAll();
    }

    public <S extends Sacola> S save(S entity) {
        return sacolaRepository.save(entity);
    }

    public Optional<Sacola> findById(Long aLong) {
        return sacolaRepository.findById(aLong);
    }

    public boolean existsById(Long aLong) {
        return sacolaRepository.existsById(aLong);
    }

    public void deleteById(Long aLong) {
        sacolaRepository.deleteById(aLong);
    }
}
