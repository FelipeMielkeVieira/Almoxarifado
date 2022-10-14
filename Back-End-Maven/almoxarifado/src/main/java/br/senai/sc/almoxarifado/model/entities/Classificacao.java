package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "classificacao")
@AllArgsConstructor @NoArgsConstructor()
@Getter @Setter
@ToString
@EqualsAndHashCode
public class Classificacao {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Integer id;

    @Column(length = 45, nullable = false)
    private String classificacao;
}
