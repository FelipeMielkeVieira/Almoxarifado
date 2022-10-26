package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.Localizacao;
import br.senai.sc.almoxarifado.repository.LocalizacaoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocalizacaoService {
    private LocalizacaoRepository localizacaoRepository;

    public LocalizacaoService(LocalizacaoRepository localizacaoRepository) {
        this.localizacaoRepository = localizacaoRepository;
    }

    public List<Localizacao> findAll() {
        return localizacaoRepository.findAll();
    }

    public Optional<Localizacao> findById(Long id) {
        return localizacaoRepository.findById(id);
    }

    public <S extends Localizacao> S save(S entity) {
        return localizacaoRepository.save(entity);
    }

    public void deleteById(Long id) {
        localizacaoRepository.deleteById(id);
    }

    public boolean existsById(Long id) {
        return localizacaoRepository.existsById(id);
    }
}
