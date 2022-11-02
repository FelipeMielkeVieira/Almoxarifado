package br.senai.sc.almoxarifado.model.entities;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "produto")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor()
@ToString
@EqualsAndHashCode
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Long id;

    @Column(nullable = false)
    private Integer quantidade;

    @Column(length = 100, nullable = false)
    private String nome;

    @Column(length = 200)
    private String caracteristicas;

    @Column(nullable = false)
    private Boolean descartavel;

    @OneToOne(cascade = CascadeType.ALL)
    private Imagem imagem;

    @Column
    private Boolean visibilidade;

    // Foreign key

    @ManyToOne
    @JoinColumn(name = "classificacao_id")
    private Classificacao classificacao;

    @ManyToMany
    @JoinTable(
            name = "produto_localizacao",
            joinColumns = @JoinColumn(name = "produto_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "localizacao_id", nullable = false))
    private Set<Localizacao> localizacoes;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "produto_id")
    private List<Anexo> anexos;

    public void setImagem(MultipartFile file) {
        try {
            this.imagem = new Imagem(file.getOriginalFilename(), file.getContentType(), file.getBytes());
        } catch (Exception exception) {
            throw new RuntimeException(exception.getMessage());
        }
    }
}
