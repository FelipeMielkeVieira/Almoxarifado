package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.entities.Produto;
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

    List<Produto> findByVisibilidadeAndNomeStartsWith(Boolean visibilidade, String nome, Pageable pageable);
}
