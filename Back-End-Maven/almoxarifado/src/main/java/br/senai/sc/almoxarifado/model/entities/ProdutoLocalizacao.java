package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "produto_localizacao")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor()
@ToString
@EqualsAndHashCode
public class ProdutoLocalizacao {
    // Foreign keys

    @Column(nullable = false)
    private Integer produto_id;

    @Column(nullable = false)
    private Integer localizacao_id;
}
