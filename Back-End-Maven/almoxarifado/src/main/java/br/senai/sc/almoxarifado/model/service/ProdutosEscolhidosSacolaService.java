package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.ProdutosEscolhidosSacola;
import br.senai.sc.almoxarifado.model.entities.Sacola;
import br.senai.sc.almoxarifado.repository.ProdutosEscolhidosSacolaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProdutosEscolhidosSacolaService {
    private ProdutosEscolhidosSacolaRepository produtosEscolhidosSacolaRepository;

    public <S extends ProdutosEscolhidosSacola> S save(S entity) {
        return produtosEscolhidosSacolaRepository.save(entity);
    }

    public List<ProdutosEscolhidosSacola> findBySacola(Sacola sacola) {
        return produtosEscolhidosSacolaRepository.findBySacola(sacola);
    }

    public void deleteById(Long id) {
        produtosEscolhidosSacolaRepository.deleteById(id);
    }
}
