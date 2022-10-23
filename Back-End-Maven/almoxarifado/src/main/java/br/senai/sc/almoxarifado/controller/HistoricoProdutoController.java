package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.HistoricoProdutoDTO;
import br.senai.sc.almoxarifado.model.entities.HistoricoProduto;
import br.senai.sc.almoxarifado.model.service.HistoricoProdutoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/alma_sis/historico_produto")
public class HistoricoProdutoController {
    private HistoricoProdutoService historicoProdutoService;

    @GetMapping
    public ResponseEntity<List<HistoricoProduto>> findAll() {
        return ResponseEntity.status(HttpStatus.FOUND).body(historicoProdutoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable(value = "id") Long idHistoricoProduto) {
        if (!historicoProdutoService.existsById(idHistoricoProduto)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "Não foi encontrado nenhum Histórico de Produto com este ID.");
        }

        System.out.println("Teste para ver o que tem no findById  \n\n" + historicoProdutoService.findById(idHistoricoProduto) + "\n\n");

        return ResponseEntity.status(HttpStatus.FOUND).body(
                historicoProdutoService.findById(idHistoricoProduto).get());
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid HistoricoProdutoDTO historicoProdutoDTO) {
        System.out.println(historicoProdutoDTO.toString());
        HistoricoProduto historicoProduto = new HistoricoProduto();
        BeanUtils.copyProperties(historicoProdutoDTO, historicoProduto);
        return ResponseEntity.status(HttpStatus.CREATED).body(
                historicoProdutoService.save(historicoProduto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable(value = "id") Long id, @RequestBody @Valid HistoricoProdutoDTO historicoProdutoDTO) {
        if (!historicoProdutoService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "Não foi encontrado nenhum Histórico de Produto com este ID.");
        }

        HistoricoProduto historicoProduto = new HistoricoProduto();
        BeanUtils.copyProperties(historicoProdutoDTO, historicoProduto, "id");
        historicoProduto.setId(id);
        return ResponseEntity.status(HttpStatus.OK).body(historicoProdutoService.save(historicoProduto));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Object> deleteById(@PathVariable(value = "id") Long id) {
        if (!historicoProdutoService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "Não foi encontrado nenhum Histórico de Produto com este ID.");
        }
        historicoProdutoService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Histórico de produto deletado.");
    }
}
