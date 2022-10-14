package br.senai.sc.almoxarifado.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class ClassificacaoDTO {
    @NotBlank
    private Integer id;

    @NotBlank
    private String classificacao;
}
