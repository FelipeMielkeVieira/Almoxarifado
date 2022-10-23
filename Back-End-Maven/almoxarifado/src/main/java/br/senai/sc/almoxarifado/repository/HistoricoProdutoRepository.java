package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.HistoricoProduto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricoProdutoRepository extends JpaRepository<HistoricoProduto, Long> {
}
