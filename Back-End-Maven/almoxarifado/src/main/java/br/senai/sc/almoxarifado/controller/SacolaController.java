package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.SacolaDTO;
import br.senai.sc.almoxarifado.model.entities.Sacola;
import br.senai.sc.almoxarifado.model.service.SacolaService;
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
@RequestMapping("/alma_sis/sacola")
public class SacolaController {
    private SacolaService sacolaService;

    @GetMapping
    public ResponseEntity<List<Sacola>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(sacolaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable(value = "id") Long id) {
        if (!sacolaService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "Não foi encontrado nenhuma sacola com este ID.");
        }
        return ResponseEntity.status(HttpStatus.FOUND).body(sacolaService.findById(id).get());
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid SacolaDTO sacolaDTO) {
        Sacola sacola = new Sacola();
        BeanUtils.copyProperties(sacolaDTO, sacola);
        return ResponseEntity.status(HttpStatus.CREATED).body(sacolaService.save(sacola));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable(value = "id") Long id, @RequestBody @Valid SacolaDTO sacolaDTO) {
        if (!sacolaService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    "Não foi encontrada nenhuma sacola com este ID.");
        }
        Sacola sacola = new Sacola();
        BeanUtils.copyProperties(sacolaDTO, sacola, "id");
        sacola.setSacolaId(id);
        return ResponseEntity.status(HttpStatus.CREATED).body(sacolaService.save(sacola));
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "id") Long id) {
        if (!sacolaService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "Não foi encontrada nenhuma sacola com este ID.");
        }
        sacolaService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Sacola deletada com sucesso.");
    }
}
