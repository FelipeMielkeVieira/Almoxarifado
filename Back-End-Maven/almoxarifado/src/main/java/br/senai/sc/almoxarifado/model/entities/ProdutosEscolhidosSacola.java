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
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable = false)
    private Long qtd_produto;

    //Foreign keys

    @ManyToOne
    @JoinColumn(name = "sacola_id")
    Sacola sacola;

    @ManyToOne
    @JoinColumn(name = "produto_id")
    Produto produto;
}
