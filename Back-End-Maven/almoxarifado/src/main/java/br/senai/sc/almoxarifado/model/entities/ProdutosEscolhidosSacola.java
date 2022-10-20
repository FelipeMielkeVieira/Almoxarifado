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
public class ProdutosEscolhidosSacola {
    // Foreign keys

//    @EmbeddedId
//    public SacolaProdutoKey getId() {
//        return id;
//    }
//    @EmbeddedId
//    SacolaProdutoKey id;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "sacola_id")
    Sacola sacola;

    @ManyToOne
    @JoinColumn(name = "produto_id")
    Produto produto;

    // Attribute

    @Column(nullable = false)
    private Long qtd_produto;
}
