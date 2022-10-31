package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.*;
import br.senai.sc.almoxarifado.repository.*;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClassificacaoService {
    private ClassificacaoRepository classificacaoRepository;

    public ClassificacaoService(ClassificacaoRepository repository) {
        this.classificacaoRepository = repository;
    }

    public List<Classificacao> findAll(){
        return classificacaoRepository.findAll();
    }

    public Optional<Classificacao> findById(Long id){
        return classificacaoRepository.findById(id);
    }

    public <S extends Classificacao> S save(S entity){
        return classificacaoRepository.save(entity);
    }

    public boolean existsById(Long idClassificacao) {
        return classificacaoRepository.existsById(idClassificacao);
    }

    public void deleteById(Long idClassificacao) {
        classificacaoRepository.deleteById(idClassificacao);
    }
}
