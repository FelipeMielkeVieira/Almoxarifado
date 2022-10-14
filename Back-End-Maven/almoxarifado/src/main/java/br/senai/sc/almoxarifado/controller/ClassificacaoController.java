package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.ClassificacaoDTO;
import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.service.ClassificacaoService;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/alma_sis/classificacao")
public class ClassificacaoController {
    private ClassificacaoService service;

    public ClassificacaoController(ClassificacaoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Classificacao>> findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable(value = "id") Integer id){
        Optional<Classificacao> classificacaoOptional = service.findById(id);
        if(classificacaoOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi possível encontrar a classificação!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(classificacaoOptional.get());
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid ClassificacaoDTO classificacaoDTO){
        // Falta as validações
        Classificacao classificacao = new Classificacao();
        BeanUtils.copyProperties(classificacaoDTO, classificacao);
        return ResponseEntity.status(HttpStatus.OK).body(service.save(classificacao));
    }
}
