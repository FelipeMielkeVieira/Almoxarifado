package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.OcorrenciaDTO;
import br.senai.sc.almoxarifado.model.entities.Ocorrencia;
import br.senai.sc.almoxarifado.model.service.OcorrenciaService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("alma_sis/ocorrencia")
public class OcorrenciaController {
    private OcorrenciaService ocorrenciaService;

    @GetMapping
    public ResponseEntity<List<Ocorrencia>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(ocorrenciaService.findAll());
    }

    @GetMapping("/{codigoOcorrencia}")
    public ResponseEntity<Object> findById(@PathVariable(value = "codigoOcorrencia") Long codigoOcorrencia) {
        if (!ocorrenciaService.existsById(codigoOcorrencia)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrada nenhuma ocorrência com este código.");
        }
        return ResponseEntity.status(HttpStatus.FOUND).body(ocorrenciaService.findById(codigoOcorrencia).get());
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid OcorrenciaDTO ocorrenciaDTO) {
        System.out.println(ocorrenciaDTO.toString());
        Ocorrencia ocorrencia = new Ocorrencia();
        BeanUtils.copyProperties(ocorrenciaDTO, ocorrencia);
        return ResponseEntity.status(HttpStatus.CREATED).body(ocorrenciaService.save(ocorrencia));
    }

    @Transactional
    @DeleteMapping("/{codigoOcorrencia}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "codigoOcorrencia") Long codigoOcorrencia) {
        if (!ocorrenciaService.existsById(codigoOcorrencia)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhuma ocorrência com este código.");
        }

        ocorrenciaService.deleteById(codigoOcorrencia);
        return ResponseEntity.status(HttpStatus.OK).body("Ocorrência deletada.");
    }
}
