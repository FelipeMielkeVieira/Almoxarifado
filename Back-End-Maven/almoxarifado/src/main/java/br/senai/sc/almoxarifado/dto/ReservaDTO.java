package br.senai.sc.almoxarifado.dto;

import br.senai.sc.almoxarifado.model.entities.Ocorrencia;
import br.senai.sc.almoxarifado.model.entities.ProdutosEscolhidosReserva;
import br.senai.sc.almoxarifado.model.entities.Status;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@ToString
public class ReservaDTO {
    private Long id;
    private Date data_retirada;
    private Date data_devolucao;
    private Status status;
    private boolean visibilidade;
    private Usuario usuario;
    List<ProdutosEscolhidosReserva> produtos_reserva;
    List<Ocorrencia> ocorrencias;
}
