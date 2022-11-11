package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.UsuarioDTO;
import br.senai.sc.almoxarifado.model.entities.*;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import br.senai.sc.almoxarifado.model.service.UsuarioService;
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

@Controller
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/alma_sis/usuario")
public class UsuarioController {
    private UsuarioService usuarioService;

    @GetMapping("/all")
    public ResponseEntity<List<Usuario>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findAll());
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> findByVisibilidade() {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findAllByVisibilidade(true));
    }

    @GetMapping("/{email}")
    public ResponseEntity<Object> findById(@PathVariable(value = "email") String email) {
        if (!usuarioService.existsById(email)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrada nenhum usuário com este Email.");
        }

        Usuario usuario = usuarioService.findById(email).get();

        if (!usuario.getVisibilidade()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("O usuário solicitado não existe!");
        }

        return ResponseEntity.status(HttpStatus.FOUND).body(usuarioService.findById(email).get());
    }

    @GetMapping("/tipo-usuario/{tipoUsuario}")
    public ResponseEntity<Object> findByTipoUsuarioAndVisibilidade(
            @PathVariable(value = "tipoUsuario") String tipoUsuarioParam) {
        Usuario usuarioModel = new Usuario();
        if (!usuarioModel.usuarioInTipoUsuario(tipoUsuarioParam)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Tipo de usuário inválido!");
        }

        TipoUsuario tipoUsuario = TipoUsuario.valueOf(tipoUsuarioParam);
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findByTipoUsuarioAndVisibilidade(tipoUsuario, true));
    }

    @GetMapping("/tipo-usuario-excluir/{tipoUsuario}")
    public ResponseEntity<Object> findByTipoUsuarioIsNot(
            @PathVariable(value = "tipoUsuario") String tipoUsuarioParam) {
        Usuario usuarioModel = new Usuario();
        if (!usuarioModel.usuarioInTipoUsuario(tipoUsuarioParam)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Tipo de usuário inválido!");
        }

        TipoUsuario tipoUsuario = TipoUsuario.valueOf(tipoUsuarioParam);
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findByTipoUsuarioIsNot(tipoUsuario, true));
    }

    @GetMapping("/page/users")
    public ResponseEntity<List<Usuario>> findPageUser(@PageableDefault(page = 0, size = 18, sort = "emailUsuario", direction = Sort.Direction.ASC) Pageable pageable) {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findPageUser(pageable));
    }

    @GetMapping("/page/users/{nome}")
    public ResponseEntity<List<Usuario>> findPageUserByNome(@PageableDefault(page = 0, size = 18, sort = "emailUsuario", direction = Sort.Direction.ASC) Pageable pageable,
                                                            @PathVariable(value = "nome") String nome) {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findPageUserByNome(nome, pageable));
    }

    @GetMapping("/page/cadastros")
    public ResponseEntity<List<Usuario>> findPageCadastro(@PageableDefault(page = 0, size = 18, sort = "emailUsuario", direction = Sort.Direction.ASC) Pageable pageable) {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findPageCadastro(pageable));
    }

    @GetMapping("/page/cadastros/{nome}")
    public ResponseEntity<List<Usuario>> findPageCadastroByNome(@PageableDefault(page = 0, size = 18, sort = "emailUsuario", direction = Sort.Direction.ASC) Pageable pageable,
                                                                @PathVariable(value = "nome") String nome) {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findPageCadastroByNome(nome, pageable));
    }

    @GetMapping("/count-cadastros")
    public ResponseEntity<Object> countCadastros() {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.countCadastros());
    }

    @GetMapping("/count-cadastros/{nome}")
    public ResponseEntity<Object> countCadastrosByNome(@PathVariable(value = "nome") String nome) {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.countCadastrosByNome(nome));
    }

    @GetMapping("/count-users")
    public ResponseEntity<Object> countUsers() {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.countUsers());
    }

    @GetMapping("/count-users/{nome}")
    public ResponseEntity<Object> countUsersByNome(@PathVariable(value = "nome") String nome) {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.countUsersByNome(nome));
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid UsuarioDTO usuarioDTO) {
        if (usuarioService.existsById(usuarioDTO.getEmailUsuario())) {
            if (usuarioService.findById(usuarioDTO.getEmailUsuario()).get().getVisibilidade()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Este Email já está cadastrado.");
            }
        }

        Usuario usuario = new Usuario();
        BeanUtils.copyProperties(usuarioDTO, usuario);
        usuario.setTipoUsuario(TipoUsuario.PENDENTE);
        usuario.setVisibilidade(true);
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.save(usuario));
    }

    @PutMapping("/{email}")
    public ResponseEntity<Object> update(@PathVariable(value = "email") String email, @RequestBody @Valid UsuarioDTO usuarioDTO) {
        if (!usuarioService.existsById(email)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este Email não existe.");
        }

        Usuario usuario = usuarioService.findById(email).get();

        if (!usuario.getVisibilidade()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("O usuário solicitado não existe!");
        }

        BeanUtils.copyProperties(usuarioDTO, usuario, "emailUsuario");
        usuario.setEmailUsuario(email);
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.save(usuario));
    }

    @Transactional
    @DeleteMapping("/{email}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "email") String email) {
        if (!usuarioService.existsById(email)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhum usuário com este Email.");
        }

        Usuario usuario = usuarioService.findById(email).get();
        usuario.setVisibilidade(false);
        usuarioService.save(usuario);
        return ResponseEntity.status(HttpStatus.OK).body(usuario);
    }
}
