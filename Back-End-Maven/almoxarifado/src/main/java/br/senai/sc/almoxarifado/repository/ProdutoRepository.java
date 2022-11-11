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

    Page<Produto> findByVisibilidadeAndNomeContaining(Boolean visibilidade, String nome, Pageable pageable);

    Integer countByVisibilidadeAndNomeContaining(Boolean b, String nome);

//    List<Produto> findByVisibilidadeAndClassificacaoAndEstoqueAndDescartavelAndNomeContaining(Boolean b, Classificacao classificacao1, Integer i, Boolean b1, String nome, Pageable pageable);
//
//    List<Produto> findByVisibilidadeAndClassificacaoAndDescartavelAndNomeContaining(Boolean b, Classificacao classificacao1, Boolean b1, String nome, Pageable pageable);
//
//    List<Produto> findByVisibilidadeAndClassificacaoAndEstoqueIsNotAndDescartavelAndNomeContaining(Boolean b, Classificacao classificacao1, Integer i, Boolean b1, String nome, Pageable pageable);
//
//    List<Produto> findByVisibilidadeAndClassificacaoAndEstoqueAndNomeContaining(Boolean b, Classificacao classificacao1, Integer i, String nome, Pageable pageable);
//
//    List<Produto> findByVisibilidadeAndClassificacaoAndNomeContaining(Boolean b, Classificacao classificacao1, String nome, Pageable pageable);
//
//    List<Produto> findByVisibilidadeAndClassificacaoAndEstoqueIsNotAndNomeContaining(Boolean b, Classificacao classificacao1, Integer i, String nome, Pageable pageable);
}
