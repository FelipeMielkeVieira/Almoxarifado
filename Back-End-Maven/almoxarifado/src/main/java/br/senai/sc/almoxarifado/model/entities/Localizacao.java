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
    @GeneratedValue
    @Column(nullable = false)
    private Integer codigoLocalizacao;

    @Column(length = 45, nullable = false)
    private String  nome;
}
