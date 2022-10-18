package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.ClassificacaoDTO;
import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.service.ClassificacaoService;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/alma_sis/classificacao")
public class ClassificacaoController {
    private ClassificacaoService classificacaoService;

    public ClassificacaoController(ClassificacaoService classificacaoService) {
        this.classificacaoService = classificacaoService;
    }

    @GetMapping
    public ResponseEntity<List<Classificacao>> findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(classificacaoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable(value = "id") Integer id){
        if (!classificacaoService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrada nenhuma classificação com este ID.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(classificacaoService.findById(id).get());
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid ClassificacaoDTO classificacaoDTO){
        Classificacao classificacao = new Classificacao();
        BeanUtils.copyProperties(classificacaoDTO, classificacao);
        return ResponseEntity.status(HttpStatus.OK).body(classificacaoService.save(classificacao));
    }

    @PutMapping("/{idClassificacao}")
    public ResponseEntity<Object> update(@PathVariable(value = "idCLassificacao") Integer idClassificacao, @RequestBody @Valid ClassificacaoDTO classificacaoDTO){
        if (!classificacaoService.existsById(idClassificacao)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este ID não existe.");
        }

        Classificacao classificacao =  new Classificacao();
        BeanUtils.copyProperties(classificacaoDTO, classificacao, "idClassificacao");
        classificacao.setId(idClassificacao);
        return ResponseEntity.status(HttpStatus.CREATED).body(classificacaoService.save(classificacao));
    }

    @Transactional
    @DeleteMapping("/{idClassificacao}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "idClassificacao") Integer idClassificacao){
        if(!classificacaoService.existsById(idClassificacao)){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi possível encontrar a classificação!");
        }
        classificacaoService.deleteById(idClassificacao);
        return ResponseEntity.status(HttpStatus.OK).body("Classificação deletada com sucesso!");
    }
}
