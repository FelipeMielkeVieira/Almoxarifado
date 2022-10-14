package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "anexo_produto")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor()
@ToString
@EqualsAndHashCode
public class Anexo_Produto {
    // Foreign keys

    @Column(nullable = false)
    private Integer produto_id;

    @Column(nullable = false)
    private Integer anexo_id;
}
