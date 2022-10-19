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
    private Integer id;

    @Column(nullable = false)
    private Integer quantidade;

    @Column(length = 100, nullable = false)
    private String nome;

    @Column(length = 200)
    private String caracteristicas;

    @Column(length = 200, nullable = false)
    private String descricao_alteracao;

    @Column(nullable = false)
    private boolean descartavel;

    @Column
    private byte imagem;

    @Column(nullable = false)
    private Date data_edicao;


    // Foreign keys

    @Column
    private Integer classificacao_id;

    @Column(nullable = false)
    private Integer produto_id;

    @Column(length = 70, nullable = false)
    private String usuario_email;
}
