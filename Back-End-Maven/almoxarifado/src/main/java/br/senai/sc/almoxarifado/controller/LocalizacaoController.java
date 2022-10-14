package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.Localizacao;
import br.senai.sc.almoxarifado.model.service.LocalizacaoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Controller
@RequestMapping("alma_sis/localizacao")
public class LocalizacaoController {
    private LocalizacaoService localizacaoService;

    public ResponseEntity<List<Localizacao>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(localizacaoService.findAll());
    }

    @GetMapping("/{codigoLocalizacao}")
    public Optional<Localizacao> findById(Integer codigoLocalizacao) {
        return localizacaoService.findById(codigoLocalizacao);
    }

    public <S extends Localizacao> S save(S entity) {
        return localizacaoService.save(entity);
    }

    public void deleteById(Integer codigoLocalizacao) {
        localizacaoService.deleteById(codigoLocalizacao);
    }
}
