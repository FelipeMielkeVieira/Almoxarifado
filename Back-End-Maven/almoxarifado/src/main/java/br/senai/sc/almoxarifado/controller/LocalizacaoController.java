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
import java.util.ArrayList;
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

    @GetMapping("/page/{nome}")
    public ResponseEntity<List<Localizacao>> findPageByNome(@PageableDefault(page = 0, size = 50, sort = "id", direction = Sort.Direction.ASC) Pageable pageable,
                                                            @PathVariable(value = "nome") String nome) {
        return ResponseEntity.status(HttpStatus.OK).body(localizacaoService.findPageByNome(nome, pageable));
    }

    @GetMapping("/page/pai/{nome}")
    public ResponseEntity<List<Localizacao>> findPageByPai(@PageableDefault(page = 0, size = 50, sort = "id", direction = Sort.Direction.ASC) Pageable pageable,
                                                            @PathVariable(value = "nome") String nome) {
        List<Localizacao> localizacoesPai = localizacaoService.findByNome(nome);
        List<Localizacao> localizacoes = new ArrayList<>();
        for (Localizacao localizacao : localizacoesPai) {
            localizacoes.addAll(localizacaoService.findPageByPai(localizacao.getId(), pageable));
        }
        return ResponseEntity.status(HttpStatus.OK).body(localizacoes);
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

    @GetMapping("/count/{nome}")
    public ResponseEntity<Object> countByNome(@PathVariable(value = "nome") String nome) {
        return ResponseEntity.status(HttpStatus.OK).body(localizacaoService.countLocalizacoesByNome(nome));
    }

    @GetMapping("/count/pai/{nome}")
    public ResponseEntity<Integer> countByPai(@PathVariable(value = "nome") String nome) {
        List<Localizacao> localizacoes = localizacaoService.findByNome(nome);
        Integer count = 0;
        for (Localizacao localizacao : localizacoes) {
            count += localizacaoService.countLocalizacoesByPai(localizacao.getId());
        }
        return ResponseEntity.status(HttpStatus.OK).body(count);
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

    @Transactional
    @DeleteMapping("/all")
    public ResponseEntity<Object> deleteAll() {
        localizacaoService.deleteAll();
        return ResponseEntity.status(HttpStatus.OK).body(new Localizacao());
    }
}
