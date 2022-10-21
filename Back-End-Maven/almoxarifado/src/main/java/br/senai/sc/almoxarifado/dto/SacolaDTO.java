package br.senai.sc.almoxarifado.dto;

import br.senai.sc.almoxarifado.model.entities.ProdutosEscolhidosSacola;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@ToString
public class SacolaDTO {
    private Date data_retirada;
    private Date data_devolucao;
    private Usuario usuario;
    List<ProdutosEscolhidosSacola> produtos_sacola;
}
