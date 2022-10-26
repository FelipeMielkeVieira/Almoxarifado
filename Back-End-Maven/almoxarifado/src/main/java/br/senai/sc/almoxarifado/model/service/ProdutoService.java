package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.repository.ProdutoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {
    private ProdutoRepository produtoRepository;

    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public List<Produto> findAll() {
        return produtoRepository.findAll();
    }

    public List<Produto> findByVisibilidade(Boolean visibilidade) {
        return produtoRepository.findByVisibilidade(visibilidade);
    }

    public <S extends Produto> S save(S entity) {
        return produtoRepository.save(entity);
    }

    public Optional<Produto> findById(Long integer) {
        return produtoRepository.findById(integer);
    }

    public boolean existsById(Long integer) {
        return produtoRepository.existsById(integer);
    }

    public void deleteById(Long integer) {
        produtoRepository.deleteById(integer);
    }
}
