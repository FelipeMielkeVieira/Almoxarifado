package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.HistoricoProduto;
import br.senai.sc.almoxarifado.repository.HistoricoProdutoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class HistoricoProdutoService {
    private HistoricoProdutoRepository historicoProdutoRepository;

    public List<HistoricoProduto> findAll() {
        return historicoProdutoRepository.findAll();
    }

    public <S extends HistoricoProduto> S save(S entity) {
        return historicoProdutoRepository.save(entity);
    }

    public Optional<HistoricoProduto> findById(Long aLong) {
        return historicoProdutoRepository.findById(aLong);
    }

    public boolean existsById(Long aLong) {
        return historicoProdutoRepository.existsById(aLong);
    }

    public void deleteById(Long aLong) {
        historicoProdutoRepository.deleteById(aLong);
    }
}
