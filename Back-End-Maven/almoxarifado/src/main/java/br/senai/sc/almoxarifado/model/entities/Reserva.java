package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "reserva")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor()
@ToString
@EqualsAndHashCode
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;

    @Column(nullable = false)
    private Date data_retirada;

    @Column
    private Date data_devolucao;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 25, nullable = false)
    private Status status;

    @Column(nullable = false)
    private boolean visibilidade;

    // Foreign key

    @Column(length = 70, nullable = false)
    private String usuario_email;

}
