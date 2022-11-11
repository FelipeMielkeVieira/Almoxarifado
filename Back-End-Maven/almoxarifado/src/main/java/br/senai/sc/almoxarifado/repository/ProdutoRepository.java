package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.entities.Produto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    List<Produto> findByVisibilidade(Boolean visibilidade, Pageable pageable);

    Object countByVisibilidade(Boolean b);

    List<Produto> findByClassificacao(Classificacao classificacao);

    List<Produto> findByVisibilidadeAndNomeContaining(Boolean visibilidade, String nome, Pageable pageable);

    Integer countByVisibilidadeAndNomeContaining(Boolean b, String nome);
    
    List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavelAndNomeContaining(Boolean b, Classificacao classificacao1, Integer i, Boolean b1, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndDescartavelAndNomeContaining(Boolean b, Classificacao classificacao1, Boolean b1, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavelAndNomeContaining(Boolean b, Classificacao classificacao1, Integer i, Boolean b1, String nome, Pageable pageable);
    
    List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeAndNomeContaining(Boolean b, Classificacao classificacao1, Integer i, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndNomeContaining(Boolean b, Classificacao classificacao1, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndNomeContaining(Boolean b, Classificacao classificacao1, Integer i, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndQuantidadeAndDescartavelAndNomeContaining(Boolean b, Integer i, Boolean b1, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndQuantidadeAndNomeContaining(Boolean b, Integer i, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndDescartavelAndNomeContaining(Boolean b, Boolean b1, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndQuantidadeIsNotAndDescartavelAndNomeContaining(Boolean b, Integer i, Boolean b1, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndQuantidadeIsNotAndNomeContaining(Boolean b, Integer i, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavel(Boolean b, Classificacao classificacao1, Integer i, Boolean b1, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndQuantidade(Boolean b, Classificacao classificacao1, Integer i, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndDescartavel(Boolean b, Classificacao classificacao1, Boolean b1, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacao(Boolean b, Classificacao classificacao1, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavel(Boolean b, Classificacao classificacao1, Integer i, Boolean b1, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndQuantidadeIsNot(Boolean b, Classificacao classificacao1, Integer i, Pageable pageable);

    List<Produto> findByVisibilidadeAndQuantidadeAndDescartavel(Boolean b, Integer i, Boolean b1, Pageable pageable);

    List<Produto> findByVisibilidadeAndQuantidade(Boolean b, Integer i, Pageable pageable);

    List<Produto> findByVisibilidadeAndDescartavel(Boolean b, Boolean b1, Pageable pageable);

    List<Produto> findByVisibilidadeAndQuantidadeIsNotAndDescartavel(Boolean b, Integer i, Boolean b1, Pageable pageable);

    List<Produto> findByVisibilidadeAndQuantidadeIsNot(Boolean b, Integer i, Pageable pageable);
}
