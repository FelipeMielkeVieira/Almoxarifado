package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
}
