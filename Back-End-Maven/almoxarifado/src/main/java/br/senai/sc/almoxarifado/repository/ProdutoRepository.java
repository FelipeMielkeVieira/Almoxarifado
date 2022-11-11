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

    List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueAndDescartavel(Boolean b, Classificacao classificacao1, Boolean b1, Integer i, Boolean b2, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndDescartavel(Boolean b, Classificacao classificacao1, Boolean b1, Boolean b2, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueIsNotAndDescartavel(Boolean b, Classificacao classificacao1, Boolean b1, Integer i, Boolean b2, Pageable pageable);

    @Query("select p from Produto p where p.visibilidade = ?1 and p.classificacao = ?2 and p.favorito = ?3 and p.descartavel = ?4 and p.estoque > 0")
    List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueAndDescartavelAndNomeContaining(Boolean b, Long classificacao1, Integer b1, Integer i, Boolean b2, String nome, Pageable pageable);


    List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndDescartavelAndNomeContaining(Boolean b, Long classificacao1, Integer b1, Boolean b2, String nome, Pageable pageable);


    List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueIsNotAndDescartavelAndNomeContaining(Boolean b, Long classificacao1, Integer b1, Integer i, Boolean b2, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndEstoqueAndDescartavelAndNomeContaining(Boolean b, Classificacao classificacao1, Integer i, Boolean b1, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndDescartavelAndNomeContaining(Boolean b, Classificacao classificacao1, Boolean b1, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndEstoqueIsNotAndDescartavelAndNomeContaining(Boolean b, Classificacao classificacao1, Integer i, Boolean b1, String nome, Pageable pageable);


    List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueAndNomeContaining(Boolean b, Long classificacao1, Integer b1, Integer i, String nome, Pageable pageable);


    List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndNomeContaining(Boolean b, Long classificacao1, Integer b1, String nome, Pageable pageable);


    List<Produto> findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueIsNotAndNomeContaining(Boolean b, Long classificacao1, Integer b1, Integer i, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndEstoqueAndNomeContaining(Boolean b, Classificacao classificacao1, Integer i, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndNomeContaining(Boolean b, Classificacao classificacao1, String nome, Pageable pageable);

    List<Produto> findByVisibilidadeAndClassificacaoAndEstoqueIsNotAndNomeContaining(Boolean b, Classificacao classificacao1, Integer i, String nome, Pageable pageable);
}
