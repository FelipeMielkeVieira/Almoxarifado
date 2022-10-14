package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "usuario")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Usuario {
    @Id
    @Column(length = 70, nullable = false, unique = true)
    private String emailUsuario;

    @Column(length = 45, nullable = false)
    private String senhaUsuario;

    @Column(length = 100, nullable = false)
    private String nomeUsuario;

    @Enumerated
    @Column(length = 11, nullable = false)
    private TipoUsuario tipoUsuario;

    @Column(length = 1, nullable = false)
    private Boolean visibilidadeUsuario;
}
