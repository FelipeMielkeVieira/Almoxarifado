package br.senai.sc.almoxarifado.dto;

import br.senai.sc.almoxarifado.model.entities.SacolaProduto;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
public class SacolaDTO {
    private Long sacolaId;
    private Date data_retirada;
    private Date data_devolucao;
    private Usuario usuario;
    Set<SacolaProduto> produtos_sacola;
}
