package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "sacola")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor()
@ToString
@EqualsAndHashCode
public class Sacola {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, unique = true)
    private Long sacolaId;

    @Column(nullable = false)
    private Date data_retirada;

    @Column
    private Date data_devolucao;

    // Foreign key

    @ManyToOne
    @JoinColumn(name = "usuario_email", nullable = false)
    private Usuario usuario;

    // Many-to-many relationship


//    List<ProdutosEscolhidosSacola> produtos_sacola;
}
