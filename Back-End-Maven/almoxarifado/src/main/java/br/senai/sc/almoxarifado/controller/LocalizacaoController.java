package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.LocalizacaoDTO;
import br.senai.sc.almoxarifado.model.entities.Localizacao;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import br.senai.sc.almoxarifado.model.service.LocalizacaoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
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
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/alma_sis/localizacao")
public class LocalizacaoController {
    private LocalizacaoService localizacaoService;

    @GetMapping
    public ResponseEntity<List<Localizacao>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(localizacaoService.findAll());
    }

    @GetMapping("/page")
    public ResponseEntity<List<Localizacao>> findPage(@PageableDefault(page = 0, size = 50, sort = "id", direction = Sort.Direction.ASC) Pageable pageable) {
        return ResponseEntity.status(HttpStatus.OK).body(localizacaoService.findAll(pageable));
    }

    @GetMapping("/{codigoLocalizacao}")
    public ResponseEntity<Object> findById(@PathVariable(value = "codigoLocalizacao") Long codigoLocalizacao) {
        if (!localizacaoService.existsById(codigoLocalizacao)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhuma localização com este código.");
        }
        return ResponseEntity.status(HttpStatus.FOUND).body(localizacaoService.findById(codigoLocalizacao).get());
    }

    @GetMapping("/pai/{codigoLocalizacao}")
    public ResponseEntity<Object> findByParent(@PathVariable(value = "codigoLocalizacao") Long codigoLocalizacao) {
        if (!localizacaoService.existsById(codigoLocalizacao)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhuma localização com este código.");
        }

        Localizacao localizacao = localizacaoService.findById(codigoLocalizacao).get();

        if (localizacao.getIdPai() == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não há uma localização pai com este código da localização filha.");
        }

        return ResponseEntity.status(HttpStatus.FOUND).body(localizacaoService.findById(localizacao.getIdPai()).get());
    }

    @GetMapping("/filho/{codigoLocalizacao}")
    public ResponseEntity<Object> findByChild(@PathVariable(value = "codigoLocalizacao") Long codigoLocalizacao) {
        if (!localizacaoService.existsById(codigoLocalizacao) && codigoLocalizacao != 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhuma localização com este código.");
        }

        if(codigoLocalizacao == 0) {
            codigoLocalizacao = null;
        }

        return ResponseEntity.status(HttpStatus.OK).body(localizacaoService.findByIdPai(codigoLocalizacao));
    }

    @GetMapping("/count")
    public ResponseEntity<Object> countLocalizacoes() {
        return ResponseEntity.status(HttpStatus.OK).body(localizacaoService.countLocalizacoes());
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid LocalizacaoDTO localizacaoDTO) {
        Localizacao localizacao = new Localizacao();
        BeanUtils.copyProperties(localizacaoDTO, localizacao);
        return ResponseEntity.status(HttpStatus.CREATED).body(localizacaoService.save(localizacao));
    }

    @Transactional
    @DeleteMapping("/{codigoLocalizacao}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "codigoLocalizacao") Long codigoLocalizacao) {
        if (!localizacaoService.existsById(codigoLocalizacao)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhuma localização com este código.");
        }

        Localizacao localizacao = localizacaoService.findById(codigoLocalizacao).get();


        localizacaoService.deleteById(codigoLocalizacao);
        return ResponseEntity.status(HttpStatus.OK).body(localizacao);
    }
}
