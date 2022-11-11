package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.repository.ProdutoRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    public Page<Produto> findAll(Pageable pageable) {
        return produtoRepository.findAll(pageable);
    }

    public List<Produto> findByVisibilidade(Boolean visibilidade, Pageable pageable) {
        return produtoRepository.findByVisibilidade(visibilidade, pageable);
    }

    public List<Produto> findAllByClassificacao(Classificacao classificacao) {
        return produtoRepository.findByClassificacao(classificacao);
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

    public Object countByVisibilidade(Boolean b) {
        return produtoRepository.countByVisibilidade(b);
    }

    public List<Produto> findByNome(String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndNomeContaining(true, nome, pageable);
    }

    public Integer countByVisibilidadeAndNome(String nome, boolean b) {
        return produtoRepository.countByVisibilidadeAndNomeContaining(b, nome);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavelAndNomeContaining(boolean b, Classificacao classificacao1, int i, boolean b1, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavelAndNomeContaining(b, classificacao1, i, b1, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndDescartavelAndNomeContaining(boolean b, Classificacao classificacao1, boolean b1, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndDescartavelAndNomeContaining(b, classificacao1, b1, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavelAndNomeContaining(boolean b, Classificacao classificacao1, int i, boolean b1, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavelAndNomeContaining(b, classificacao1, i, b1, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeAndNomeContaining(boolean b, Classificacao classificacao1, int i, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndQuantidadeAndNomeContaining(b, classificacao1, i, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndNomeContaining(boolean b, Classificacao classificacao1, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndNomeContaining(b, classificacao1, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndNomeContaining(boolean b, Classificacao classificacao1, int i, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndNomeContaining(b, classificacao1, i, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndQuantidadeAndDescartavelAndNomeContaining(boolean b, int i, boolean b1, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndQuantidadeAndDescartavelAndNomeContaining(b, i, b1, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndQuantidadeAndNomeContaining(boolean b, int i, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndQuantidadeAndNomeContaining(b, i, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndDescartavelAndNomeContaining(boolean b, boolean b1, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndDescartavelAndNomeContaining(b, b1, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndNomeContaining(boolean b, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndNomeContaining(b, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndQuantidadeIsNotAndDescartavelAndNomeContaining(boolean b, int i, boolean b1, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndQuantidadeIsNotAndDescartavelAndNomeContaining(b, i, b1, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndQuantidadeIsNotAndNomeContaining(boolean b, int i, String nome, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndQuantidadeIsNotAndNomeContaining(b, i, nome, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavel(boolean b, Classificacao classificacao1, int i, boolean b1, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavel(b, classificacao1, i, b1, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndQuantidade(boolean b, Classificacao classificacao1, int i, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndQuantidade(b, classificacao1, i, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndDescartavel(boolean b, Classificacao classificacao1, boolean b1, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndDescartavel(b, classificacao1, b1, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacao(boolean b, Classificacao classificacao1, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacao(b, classificacao1, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavel(boolean b, Classificacao classificacao1, int i, boolean b1, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavel(b, classificacao1, i, b1, pageable);
    }

    public List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeIsNot(boolean b, Classificacao classificacao1, int i, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndClassificacaoAndQuantidadeIsNot(b, classificacao1, i, pageable);
    }

    public List<Produto> findByVisibilidadeAndQuantidadeAndDescartavel(boolean b, int i, boolean b1, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndQuantidadeAndDescartavel(b, i, b1, pageable);
    }

    public List<Produto> findByVisibilidadeAndQuantidade(boolean b, int i, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndQuantidade(b, i, pageable);
    }

    public List<Produto> findByVisibilidadeAndDescartavel(boolean b, boolean b1, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndDescartavel(b, b1, pageable);
    }

    public List<Produto> findByVisibilidadeAndQuantidadeIsNotAndDescartavel(boolean b, int i, boolean b1, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndQuantidadeIsNotAndDescartavel(b, i, b1, pageable);
    }

    public List<Produto> findByVisibilidadeAndQuantidadeIsNot(boolean b, int i, Pageable pageable) {
        return produtoRepository.findByVisibilidadeAndQuantidadeIsNot(b, i, pageable);
    }
}
