package br.senai.sc.almoxarifado.dto;

import lombok.Getter;

@Getter
public class ImagemDTO {

    private String nome;
    private String tipo;
    private byte[] dados;
}
