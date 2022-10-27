package br.senai.sc.almoxarifado.dto;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class LocalizacaoDTO {
    private String nome;
    private Long idPai;
}
