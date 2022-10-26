package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "anexo")
@AllArgsConstructor @NoArgsConstructor()
@Getter @Setter
@ToString
@EqualsAndHashCode
public class Anexo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false)
    private String descricao;

    @Column(nullable = false)
    private Byte anexo;

    @Column(nullable = false)
    private boolean visibilidade;
}
