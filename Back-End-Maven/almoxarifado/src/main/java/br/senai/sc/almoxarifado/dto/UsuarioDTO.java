package br.senai.sc.almoxarifado.dto;

import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.entities.TipoUsuario;
import lombok.Getter;
import lombok.ToString;

import java.util.Set;

@Getter
@ToString
public class UsuarioDTO {
    private String emailUsuario;
    private String senhaUsuario;
    private String nomeUsuario;
    private TipoUsuario tipoUsuario;
    private Set<Produto> produtosFavoritados;
}
