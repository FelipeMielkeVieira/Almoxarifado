package br.senai.sc.almoxarifado.dto;

import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotBlank;

@Getter
@ToString
public class ClassificacaoDTO {
    private String classificacao;
}
