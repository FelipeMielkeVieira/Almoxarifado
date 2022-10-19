package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@AllArgsConstructor
@EqualsAndHashCode
@Getter
@Setter
@ToString
public class SacolaProdutoKey implements Serializable {
    @Column(name = "sacola_id")
    Long sacolaId;

    @Column(name = "produto_id")
    Integer produtoId;

    public SacolaProdutoKey() {}
}
