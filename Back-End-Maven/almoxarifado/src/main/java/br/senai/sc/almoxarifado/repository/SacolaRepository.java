package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.Sacola;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SacolaRepository extends JpaRepository<Sacola, Long> {
//    @Modifying
    @Query(
            value =
                    "INSERT INTO SACOLA_PRODUTO (PRODUTO_ID, SACOLA_ID, QTD_PRODUTO) VALUES (:produtoidparam, :sacolaidparam, :qtdprodutoparam);",
            nativeQuery = true)
    void salvarProdutosEscolhidos(@Param("produtoidparam") Long produtId, @Param("sacolaidparam") Long sacolaId, @Param("qtdprodutoparam") Long qtdProduto);
}
