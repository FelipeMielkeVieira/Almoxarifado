package br.senai.sc.almoxarifado.model.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @ManyToMany
    @JoinTable(
            name = "produto_localizacao",
            joinColumns = @JoinColumn(name = "produto_id"),
            inverseJoinColumns = @JoinColumn(name = "localizacao_id"))
    private Set<Localizacao> localizacoes;

    @ManyToMany
    @JoinTable(
            name = "produto_anexo",
            joinColumns = @JoinColumn(name = "produto_id"),
            inverseJoinColumns = @JoinColumn(name = "anexo_id"))
    private Set<Anexo> anexos;

    @OneToMany(mappedBy = "produto")
    Set<SacolaProduto> sacolas_produto;

}
