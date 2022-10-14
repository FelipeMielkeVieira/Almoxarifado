package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.Anexo;
import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.repository.AnexoRepository;
import br.senai.sc.almoxarifado.repository.ClassificacaoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnexoService {
    private AnexoRepository anexoRepository;

    public AnexoService(AnexoRepository repository) {
        this.anexoRepository = repository;
    }

    public List<Anexo> findAll(){
        return anexoRepository.findAll();
    }

    public Optional<Anexo> findById(Integer id){
        return anexoRepository.findById(id);
    }

    public <S extends Anexo> S save(S entity){
        return anexoRepository.save(entity);
    }

    public boolean existsById(Integer idAnexo) {
        return anexoRepository.existsById(idAnexo);
    }

    public void deleteById(Integer idAnexo) {
        anexoRepository.deleteById(idAnexo);
    }
}
