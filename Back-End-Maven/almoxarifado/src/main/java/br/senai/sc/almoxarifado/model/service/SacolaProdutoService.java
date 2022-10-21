package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.ProdutosEscolhidosSacola;
import br.senai.sc.almoxarifado.model.entities.Sacola;
import br.senai.sc.almoxarifado.repository.SacolaProdutoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SacolaProdutoService {
    private SacolaProdutoRepository sacolaProdutoRepository;

    public <S extends ProdutosEscolhidosSacola> S save(S entity) {
        return sacolaProdutoRepository.save(entity);
    }

    public List<ProdutosEscolhidosSacola> findBySacola(Sacola sacola) {
        return sacolaProdutoRepository.findBySacola(sacola);
    }
}
