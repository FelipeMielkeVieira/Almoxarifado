package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "sacola_produto")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor()
@ToString
@EqualsAndHashCode
public class SacolaProduto {
    // Foreign keys
    @EmbeddedId
    SacolaProdutoKey id;

    @ManyToOne
    @MapsId("sacolaId")
    @JoinColumn(name = "sacola_id")
    Sacola sacola;

    @ManyToOne
    @MapsId("produtoId")
    @JoinColumn(name = "produto_id")
    Produto produto;

    // Attribute

    @Column(nullable = false)
    private Integer qtd_produto;
}
