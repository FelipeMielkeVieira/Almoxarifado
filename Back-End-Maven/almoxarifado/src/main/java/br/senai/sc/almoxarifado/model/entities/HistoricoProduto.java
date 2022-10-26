package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "historico_produto")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor()
@ToString
@EqualsAndHashCode
public class HistoricoProduto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false)
    private Long quantidade;

    @Column(length = 100, nullable = false)
    private String nome;

    @Column(length = 200)
    private String caracteristicas;

    @Column(length = 200, nullable = false)
    private String descricao_alteracao;

    @Column(nullable = false)
    private Boolean descartavel;

    @Column
    private Byte imagem;

    @Column(nullable = false)
    private Date data_edicao;


    // Foreign keys

    @ManyToOne
    @JoinColumn(name = "classificacao_id")
    private Classificacao classificacao;

    @OneToOne
    @JoinColumn(name = "produto_id", nullable = false)
    private Produto produto;

    @ManyToOne
    @JoinColumn(name = "usuario_email", nullable = false)
    private Usuario usuario;
}
