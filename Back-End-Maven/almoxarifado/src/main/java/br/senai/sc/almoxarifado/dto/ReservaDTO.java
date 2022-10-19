package br.senai.sc.almoxarifado.dto;

import br.senai.sc.almoxarifado.model.entities.Status;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ReservaDTO {
    private Long id;
    private Date data_retirada;
    private Date data_devolucao;
    private Status status;
    private boolean visibilidade;
    private Usuario usuario;
}
