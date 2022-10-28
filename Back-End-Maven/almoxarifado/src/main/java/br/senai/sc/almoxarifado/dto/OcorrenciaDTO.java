package br.senai.sc.almoxarifado.dto;

import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.entities.Reserva;
import br.senai.sc.almoxarifado.model.entities.TipoOcorrencia;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class OcorrenciaDTO {
    private String descricao;
    private TipoOcorrencia tipoOcorrencia;
    Reserva reserva;
    Produto produto;
    Usuario usuario;
}
