package br.senai.sc.almoxarifado.dto;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
public class HistoricoProdutoDTO {
    private Long id;
    private Long quantidade;
    private String nome;
    private String caracteristicas;
    private String descricao_alteracao;
    private boolean descartavel;
    private byte imagem;
    private Date data_edicao;


    // Foreign keys
    private Classificacao classificacao;
    private Produto produto;
    private Usuario usuario;
}
