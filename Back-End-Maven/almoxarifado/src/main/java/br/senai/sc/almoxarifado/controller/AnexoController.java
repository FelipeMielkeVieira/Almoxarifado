package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.AnexoDTO;
import br.senai.sc.almoxarifado.dto.ClassificacaoDTO;
import br.senai.sc.almoxarifado.model.entities.Anexo;
import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.service.AnexoService;
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
@RequestMapping("/alma_sis/anexo")
public class AnexoController {
    private AnexoService service;

    public AnexoController(AnexoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Anexo>> findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(service.findAll());
    }

    @GetMapping("/{idAnexo}")
    public ResponseEntity<Object> findById(@PathVariable(value = "id") Integer id){
        if (service.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi possível encontrar o anexo!");
        }

        return ResponseEntity.status(HttpStatus.OK).body(service.findById(id).get());
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid AnexoDTO anexoDTO){
        // Falta as validações
        Anexo anexo = new Anexo();
        BeanUtils.copyProperties(anexoDTO, anexo);
        return ResponseEntity.status(HttpStatus.OK).body(service.save(anexo));
    }

    @PutMapping("/{idAnexo}")
    public ResponseEntity<Object> update(@PathVariable(value = "idAnexo") Integer idAnexo, @RequestBody @Valid AnexoDTO anexoDTO){
//        if (!service.existsById(anexoDTO.getCpf())) {
//            return ResponseEntity.status(HttpStatus.CONFLICT).body("Esse CPF não existe.");
//        }
        Optional<Anexo> anexoOptional = service.findById(idAnexo);

//        if(anexoOptional.isEmpty()){
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi possível encontrar o anexo!");
//        }


        Anexo anexo =  new Anexo();
        BeanUtils.copyProperties(anexoDTO, anexo, "idAnexo");
        service.save(anexo);
        return ResponseEntity.status(HttpStatus.OK).body("Anexo atualizado!");
    }

    @Transactional
    @DeleteMapping("/{idAnexo}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "idAnexo") Integer idAnexo){
        if(!service.existsById(idAnexo)){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi possível encontrar o anexo!");
        }
        service.deleteById(idAnexo);
        return ResponseEntity.status(HttpStatus.OK).body("Anexo deletado com sucesso!");
    }
}
