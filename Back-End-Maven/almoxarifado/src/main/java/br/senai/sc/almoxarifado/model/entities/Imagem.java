package br.senai.sc.almoxarifado.model.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "imagem")
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
public class Imagem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String nome;

    @NonNull
    private String tipo;

    @Lob
    @NonNull
    private byte[] dados;
}
