package br.senai.sc.almoxarifado.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class AnexoDTO {
    @NotBlank
    private Integer id;

    private Byte anexo;

    private boolean visibilidade;
}
