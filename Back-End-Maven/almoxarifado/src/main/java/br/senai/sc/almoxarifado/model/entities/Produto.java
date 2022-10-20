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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, unique = true)
    private Long id;

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

    @ManyToMany
    @JoinTable(
            name = "produto_localizacao",
            joinColumns = @JoinColumn(name = "produto_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "localizacao_id", nullable = false))
    private Set<Localizacao> localizacoes;

    @ManyToMany
    @JoinTable(
            name = "produto_anexo",
            joinColumns = @JoinColumn(name = "produto_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "anexo_id", nullable = false))
    private Set<Anexo> anexos;

//    @OneToMany(mappedBy = "produto")
//    Set<ProdutosEscolhidos> produtos_sacola;

}
