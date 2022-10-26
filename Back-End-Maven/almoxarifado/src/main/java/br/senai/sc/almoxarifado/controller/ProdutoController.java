package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.ProdutoDTO;
import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.service.ProdutoService;
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
@RequestMapping("/alma_sis/produto")
public class ProdutoController {
    private ProdutoService produtoService;

    @GetMapping("/all")
    public ResponseEntity<List<Produto>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.findAll());
    }

    @GetMapping
    public ResponseEntity<List<Produto>> findAllVisible() {
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.findByVisibilidade(true));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable(value = "id") Long id) {
        if (!produtoService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhum produto com este ID.");
        }

        Produto produto = produtoService.findById(id).get();

        if (!produto.getVisibilidade()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("O produto solicitado não existe!");
        }

        return ResponseEntity.status(HttpStatus.FOUND).body(produto);
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid ProdutoDTO produtoDTO) {
        Produto produto = new Produto();
        BeanUtils.copyProperties(produtoDTO, produto);
        produto.setVisibilidade(true);
        return ResponseEntity.status(HttpStatus.CREATED).body(produtoService.save(produto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable(value = "id") Long id, @RequestBody @Valid ProdutoDTO produtoDTO) {
        if (!produtoService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este produto não existe.");
        }
        Produto produto = produtoService.findById(id).get();

        if (!produto.getVisibilidade()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("O produto solicitado não existe!");
        }

        BeanUtils.copyProperties(produtoDTO, produto);
        produto.setId(id);
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.save(produto));
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "id") Long id) {
        if (!produtoService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhum produto com este ID.");
        }

        Produto produto = produtoService.findById(id).get();
        produto.setVisibilidade(false);
        produtoService.save(produto);
        return ResponseEntity.status(HttpStatus.OK).body("Produto deletado com sucesso!");
    }
}
