package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.AnexoDTO;
import br.senai.sc.almoxarifado.model.entities.Anexo;
import br.senai.sc.almoxarifado.model.service.AnexoService;
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
@RequestMapping("/alma_sis/anexo")
public class AnexoController {
    private AnexoService anexoService;

    public AnexoController(AnexoService anexoService) {
        this.anexoService = anexoService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Anexo>> findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(anexoService.findAll());
    }

    @GetMapping
    public ResponseEntity<List<Anexo>> findAllVisible(){
        return ResponseEntity.status(HttpStatus.OK).body(anexoService.findByVisibilidade(true));
    }

    @GetMapping("/{idAnexo}")
    public ResponseEntity<Object> findById(@PathVariable(value = "idAnexo") Long idAnexo){
        if (!anexoService.existsById(idAnexo)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi possível encontrar o anexo!");
        }

        Anexo anexo = anexoService.findById(idAnexo).get();

        if (!anexo.isVisibilidade()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("O anexo solicitado foi deletado!");
        }

        return ResponseEntity.status(HttpStatus.FOUND).body(anexoService.findById(idAnexo).get());
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid AnexoDTO anexoDTO){
        Anexo anexo = new Anexo();
        BeanUtils.copyProperties(anexoDTO, anexo);
        anexo.setVisibilidade(true);
        return ResponseEntity.status(HttpStatus.CREATED).body(anexoService.save(anexo));
    }

    @PutMapping("/{idAnexo}")
    public ResponseEntity<Object> update(@PathVariable(value = "idAnexo") Long idAnexo, @RequestBody @Valid AnexoDTO anexoDTO){
        if (!anexoService.existsById(idAnexo)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este anexo não existe.");
        }

        Anexo anexo =  new Anexo();
        BeanUtils.copyProperties(anexoDTO, anexo, "idAnexo");
        anexo.setId(idAnexo);
        return ResponseEntity.status(HttpStatus.OK).body(anexoService.save(anexo));
    }

    @Transactional
    @DeleteMapping("/{idAnexo}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "idAnexo") Long idAnexo){
        if(!anexoService.existsById(idAnexo)){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi possível encontrar o anexo!");
        }

        Anexo anexo = anexoService.findById(idAnexo).get();
        anexo.setVisibilidade(false);
        anexoService.save(anexo);
        return ResponseEntity.status(HttpStatus.OK).body("Anexo deletado com sucesso!");
    }
}
