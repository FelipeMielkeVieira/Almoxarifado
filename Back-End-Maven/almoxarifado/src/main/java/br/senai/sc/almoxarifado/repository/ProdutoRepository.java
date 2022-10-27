package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    List<Produto> findByVisibilidade(Boolean visibilidade);
}
