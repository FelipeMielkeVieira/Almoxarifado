package br.senai.sc.almoxarifado.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class AnexoDTO {
    private Integer id;

    private Byte anexo;

    private boolean visibilidade;
}
