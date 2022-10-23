package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "ocorrencia")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor()
@ToString
@EqualsAndHashCode
public class Ocorrencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable = false)
    private String descricao;

    //Foreign keys

    @ManyToOne
    @JoinColumn(name = "reserva_id")
    Reserva reserva;

    @ManyToOne
    @JoinColumn(name = "produto_id")
    Produto produto;
}
