package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.LocalizacaoDTO;
import br.senai.sc.almoxarifado.model.entities.Localizacao;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import br.senai.sc.almoxarifado.model.service.LocalizacaoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Controller
@RequestMapping("alma_sis/localizacao")
public class LocalizacaoController {
    private LocalizacaoService localizacaoService;

    @GetMapping
    public ResponseEntity<List<Localizacao>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(localizacaoService.findAll());
    }

    @GetMapping("/{codigoLocalizacao}")
    public ResponseEntity<Object> findById(@PathVariable(value = "codigoLocalizacao") Integer codigoLocalizacao) {
        if (!localizacaoService.existsById(codigoLocalizacao)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhuma localização com este código.");
        }
        return ResponseEntity.status(HttpStatus.FOUND).body(localizacaoService.findById(codigoLocalizacao).get());
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid LocalizacaoDTO localizacaoDTO) {
        Localizacao localizacao = new Localizacao();
        BeanUtils.copyProperties(localizacaoDTO, localizacao);
        return ResponseEntity.status(HttpStatus.CREATED).body(localizacaoService.save(localizacao));
    }

    @Transactional
    @DeleteMapping("/{codigoLocalizacao}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "codigoLocalizacao") Integer codigoLocalizacao) {
        if (!localizacaoService.existsById(codigoLocalizacao)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhuma localização com este código.");
        }

        localizacaoService.deleteById(codigoLocalizacao);
        return ResponseEntity.status(HttpStatus.OK).body("Localização deletada.");
    }
}
