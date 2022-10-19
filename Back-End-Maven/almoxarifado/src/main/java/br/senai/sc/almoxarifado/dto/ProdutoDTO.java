package br.senai.sc.almoxarifado.dto;

import br.senai.sc.almoxarifado.model.entities.Anexo;
import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.entities.Localizacao;
import br.senai.sc.almoxarifado.model.entities.SacolaProduto;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class ProdutoDTO {
    private Integer id;
    private Integer quantidade;
    private String nome;
    private String caracteristicas;
    private boolean descartavel;
    private byte imagem;
    private Classificacao classificacao;
    private Set<Localizacao> localizacoes;
    private Set<Anexo> anexos;
    Set<SacolaProduto> sacolas_produto;
}
