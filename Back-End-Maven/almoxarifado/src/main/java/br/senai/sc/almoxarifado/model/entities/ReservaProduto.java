package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "reserva_produto")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor()
@ToString
@EqualsAndHashCode
public class ReservaProduto {
    @Column(nullable = false)
    private Integer qtd_produto;

    // Foreign keys

    @Id
    @Column(nullable = false)
    private Integer reserva_id;

    @Id
    @Column(nullable = false)
    private Integer produto_id;


}
