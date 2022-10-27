package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "localizacao")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Localizacao {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    @Column(length = 45, nullable = false)
    private String  nome;

    @Column
    private Long idPai;
}
