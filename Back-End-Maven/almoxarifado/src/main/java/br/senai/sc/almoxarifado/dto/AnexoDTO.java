package br.senai.sc.almoxarifado.dto;

import br.senai.sc.almoxarifado.model.entities.Produto;
import lombok.Getter;

@Getter
public class AnexoDTO {

    private String nome;
    private String tipo;
    private byte[] dados;
}
