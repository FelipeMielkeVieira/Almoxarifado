package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.Localizacao;
import br.senai.sc.almoxarifado.repository.LocalizacaoRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    public List<Localizacao> findAll(Pageable pageable) {
        return localizacaoRepository.findByIdIsNot(pageable, 0L);
    }

    public Optional<Localizacao> findById(Long id) {
        return localizacaoRepository.findById(id);
    }

    public List<Localizacao> findByIdPai(Long id) {
        return localizacaoRepository.findByIdPai(id);
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

    public Object countLocalizacoes() {
        return localizacaoRepository.count();
    }

    public void deleteAll() {
        localizacaoRepository.deleteAll();
    }

    public List<Localizacao> findPageByNome(String nome, Pageable pageable) {
        return localizacaoRepository.findByNomeContaining(nome, pageable);
    }

    public Object countLocalizacoesByNome(String nome) {
        return localizacaoRepository.countByNomeContaining(nome);
    }

    public List<Localizacao> findByNome(String nome) {
        return localizacaoRepository.findByNomeContaining(nome);
    }

    public Integer countLocalizacoesByPai(Long idPai) {
        return localizacaoRepository.countByIdPai(idPai);
    }

    public List<Localizacao> findPageByPai(Long idPai, Pageable pageable) {
        return localizacaoRepository.findByIdPai(idPai, pageable);
    }
}
