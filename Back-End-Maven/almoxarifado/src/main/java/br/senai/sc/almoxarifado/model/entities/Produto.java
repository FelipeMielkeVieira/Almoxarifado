package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "produto")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor()
@ToString
@EqualsAndHashCode
public class Produto {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Integer id;

    @Column(nullable = false)
    private Integer quantidade;

    @Column(length = 100, nullable = false)
    private String nome;

    @Column(length = 200)
    private String caracteristicas;

    @Column(nullable = false)
    private boolean descartavel;

    @Column
    private byte imagem;

    // Foreign key

    @ManyToOne
    @JoinColumn(name = "classificacao_id")
    private Classificacao classificacao;

    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "produto_localizacao",
            joinColumns = {@JoinColumn(name = "produto_id")},
            inverseJoinColumns = {@JoinColumn(name = "localizacao_id")})
    private Set<Localizacao> localizacoes;

}
