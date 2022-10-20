package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.entities.Sacola;
import br.senai.sc.almoxarifado.repository.SacolaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SacolaService {
    private SacolaRepository sacolaRepository;

    public SacolaService(SacolaRepository sacolaRepository) {
        this.sacolaRepository = sacolaRepository;
    }

    public List<Sacola> findAll() {
        return sacolaRepository.findAll();
    }

    public <S extends Sacola> S save(S entity) {
        return sacolaRepository.save(entity);
    }

    @Query(value = "INSERT INTO SACOLA_PRODUTO (PRODUTO_ID, SACOLA_ID, QTD_PRODUTO) VALUES (:produtoidparam, :sacolaidparam, :qtdprodutoparam);", nativeQuery = true)
    @Modifying
    public void salvarProdutosEscolhidos(Long produtId, Long sacolaId, Long qtdProduto) {
        System.out.println("chegou aq");
        sacolaRepository.salvarProdutosEscolhidos(produtId, sacolaId, qtdProduto);
    }

    public Optional<Sacola> findById(Long aLong) {
        return sacolaRepository.findById(aLong);
    }

    public boolean existsById(Long aLong) {
        return sacolaRepository.existsById(aLong);
    }

    public void deleteById(Long aLong) {
        sacolaRepository.deleteById(aLong);
    }
}
