package br.senai.sc.almoxarifado.dto;

import br.senai.sc.almoxarifado.model.entities.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Getter
@Setter
public class ProdutoDTO {
    private Integer quantidade;
    private String nome;
    private String caracteristicas;
    private Boolean descartavel;
    private Classificacao classificacao;
    private Set<Localizacao> localizacoes;
}
