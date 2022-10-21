package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.ProdutosEscolhidosSacola;
import br.senai.sc.almoxarifado.model.entities.Sacola;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SacolaProdutoRepository extends JpaRepository<ProdutosEscolhidosSacola, Long> {
    List<ProdutosEscolhidosSacola> findBySacola(Sacola sacola);
}
