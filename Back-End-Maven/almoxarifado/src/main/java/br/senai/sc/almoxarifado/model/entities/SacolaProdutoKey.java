package br.senai.sc.almoxarifado.model.entities;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Getter
@Setter
@EqualsAndHashCode
public class SacolaProdutoKey implements Serializable {
    @Column(name = "sacola_id")
    Integer sacolaId;

    @Column(name = "produto_id")
    Integer produtoId;
}
