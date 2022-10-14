package br.senai.sc.almoxarifado.dto;

import br.senai.sc.almoxarifado.model.entities.TipoUsuario;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class UsuarioDTO {
    private String emailUsuario;
    private String senhaUsuario;
    private String nomeUsuario;
    private TipoUsuario tipoUsuario;
    private Boolean visibilidadeUsuario;
}
