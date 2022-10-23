package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.ReservaDTO;
import br.senai.sc.almoxarifado.model.entities.Ocorrencia;
import br.senai.sc.almoxarifado.model.entities.ProdutosEscolhidosReserva;
import br.senai.sc.almoxarifado.model.entities.Reserva;
import br.senai.sc.almoxarifado.model.service.OcorrenciaService;
import br.senai.sc.almoxarifado.model.service.ProdutosEscolhidosReservaService;
import br.senai.sc.almoxarifado.model.service.ReservaService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/alma_sis/reserva")
public class ReservaController {
    private ReservaService reservaService;
    private ProdutosEscolhidosReservaService produtosEscolhidosReservaService;
    private OcorrenciaService ocorrenciaService;

    @GetMapping
    public ResponseEntity<List<Reserva>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(reservaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable(value = "id") Long id) {
        if (!reservaService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "Não foi encontrado nenhuma reserva com este ID.");
        }
        Reserva reserva = reservaService.findById(id).get();

        List<Object> response = new ArrayList<>();
        response.add(reserva);
        response.add(produtosEscolhidosReservaService.findByReserva(reserva));
        response.add(ocorrenciaService.findByReserva(reserva));
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid ReservaDTO reservaDTO) {
        System.out.println(reservaDTO);
        Reserva reserva = new Reserva();
        BeanUtils.copyProperties(reservaDTO, reserva);
        Reserva reservaSalva = reservaService.save(reserva);

        for (ProdutosEscolhidosReserva produtosEscolhidosReserva : reservaDTO.getProdutos_reserva()) {
            produtosEscolhidosReserva.setReserva(reservaSalva);
            produtosEscolhidosReservaService.save(produtosEscolhidosReserva);

        }

        for (Ocorrencia ocorrencia : reservaDTO.getOcorrencias()) {
            ocorrencia.setReserva(reservaSalva);
            ocorrenciaService.save(ocorrencia);
        }

        return ResponseEntity.status(HttpStatus.CREATED).body("Reserva criada e itens adicionados!");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable(value = "id") Long id, @RequestBody @Valid ReservaDTO reservaDTO) {
        if (!reservaService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    "Não foi encontrada nenhuma reserva com este ID.");
        }
        Reserva reserva = new Reserva();
        BeanUtils.copyProperties(reservaDTO, reserva, "id");
        reserva.setId(id);
        return ResponseEntity.status(HttpStatus.CREATED).body(reservaService.save(reserva));
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "id") Long id) {
        if (!reservaService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "Não foi encontrada nenhuma reserva com este ID.");
        }
        reservaService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Reserva deletada com sucesso.");
    }
}
