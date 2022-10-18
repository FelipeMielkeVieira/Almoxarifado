package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.UsuarioDTO;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import br.senai.sc.almoxarifado.model.service.UsuarioService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Controller
@AllArgsConstructor
@RequestMapping("/alma_sis/usuario")
public class UsuarioController {
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<Usuario>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findAll());
    }

    @GetMapping("/{email}")
    public ResponseEntity<Object> findById(@PathVariable(value = "email") String email) {
        if (!usuarioService.existsById(email)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrada nenhum usuário com este Email.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findById(email).get());
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid UsuarioDTO usuarioDTO) {
        if (usuarioService.existsById(usuarioDTO.getEmailUsuario())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este Email já está cadastrado.");
        }

        Usuario usuario = new Usuario();
        BeanUtils.copyProperties(usuarioDTO, usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.save(usuario));
    }

    @PutMapping("/{email}")
    public ResponseEntity<Object> update(@PathVariable(value = "email") String email, @RequestBody @Valid UsuarioDTO usuarioDTO) {
        if (!usuarioService.existsById(email)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este Email não existe.");
        }

        Usuario usuario = new Usuario();
        BeanUtils.copyProperties(usuarioDTO, usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.save(usuario));
    }

    @DeleteMapping("/{email}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "email") String email) {
        if (!usuarioService.existsById(email)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhum usuário com este Email.");
        }

        usuarioService.deleteById(email);
        return ResponseEntity.status(HttpStatus.OK).body("Usuario deletado.");
    }
}
