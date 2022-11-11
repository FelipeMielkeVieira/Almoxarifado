package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.ProdutoDTO;
import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.service.ClassificacaoService;
import br.senai.sc.almoxarifado.model.service.ProdutoService;
import br.senai.sc.almoxarifado.util.ClassificacaoUtil;
import br.senai.sc.almoxarifado.util.ProdutoUtil;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

@Controller
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/alma_sis/produto")
public class ProdutoController {
    private ProdutoService produtoService;
    private ClassificacaoService classificacaoService;

    @GetMapping("/all")
    public ResponseEntity<List<Produto>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.findAll());
    }

    @GetMapping("/page")
    public ResponseEntity<List<Produto>> findPage(
            @PageableDefault(page = 0, size = 18, sort = "id", direction = Sort.Direction.ASC) Pageable pageable,
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) Long classificacao,
            @RequestParam(required = false) Boolean descartavel,
            @RequestParam(required = false) Boolean naoDescartavel,
            @RequestParam(required = false) Boolean semQuantidade,
            @RequestParam(required = false) Boolean comQuantidade,
            @RequestParam(required = false) Integer favorito
    ) {

        if (nome != null && !nome.isEmpty()) {
            if (classificacao != null) {
                Classificacao classificacao1 = classificacaoService.findById(classificacao).get();

                if (semQuantidade != null && semQuantidade) {
                    if (descartavel != null && descartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.findByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavelAndNomeContaining(true, classificacao1, 0, true, nome, pageable)
                        );
                    } else {
                        if (naoDescartavel != null && naoDescartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.findByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavelAndNomeContaining(true, classificacao1, 0, false, nome, pageable)
                            );
                        }
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.findByVisibilidadeAndClassificacaoAndQuantidadeAndNomeContaining(true, classificacao1, 0, nome, pageable)
                        );
                    }
                } else {
                    if (comQuantidade == null) {
                        if (descartavel != null && descartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.findByVisibilidadeAndClassificacaoAndDescartavelAndNomeContaining(true, classificacao1, true, nome, pageable)
                            );
                        } else {
                            if (naoDescartavel != null && naoDescartavel) {
                                return ResponseEntity.status(HttpStatus.OK).body(
                                        this.produtoService.findByVisibilidadeAndClassificacaoAndDescartavelAndNomeContaining(true, classificacao1, false, nome, pageable)
                                );
                            }
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.findByVisibilidadeAndClassificacaoAndNomeContaining(true, classificacao1, nome, pageable)
                            );
                        }
                    }
                }
                if (descartavel != null && descartavel) {
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavelAndNomeContaining(true, classificacao1, 0, true, nome, pageable)
                    );
                } else {
                    if (naoDescartavel != null && naoDescartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavelAndNomeContaining(true, classificacao1, 0, false, nome, pageable)
                        );
                    }
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndNomeContaining(true, classificacao1, 0, nome, pageable)
                    );
                }
            } else {
                if (semQuantidade != null && semQuantidade) {
                    if (descartavel != null && descartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.findByVisibilidadeAndQuantidadeAndDescartavelAndNomeContaining(true, 0, true, nome, pageable)
                        );
                    } else {
                        if (naoDescartavel != null && naoDescartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.findByVisibilidadeAndQuantidadeAndDescartavelAndNomeContaining(true, 0, false, nome, pageable)
                            );
                        }
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.findByVisibilidadeAndQuantidadeAndNomeContaining(true, 0, nome, pageable)
                        );
                    }
                } else {
                    if (comQuantidade == null) {
                        if (descartavel != null && descartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.findByVisibilidadeAndDescartavelAndNomeContaining(true, true, nome, pageable)
                            );
                        } else {
                            if (naoDescartavel != null && naoDescartavel) {
                                return ResponseEntity.status(HttpStatus.OK).body(
                                        this.produtoService.findByVisibilidadeAndDescartavelAndNomeContaining(true, false, nome, pageable)
                                );
                            }
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.findByVisibilidadeAndNomeContaining(true, nome, pageable)
                            );
                        }
                    }
                }
                if (descartavel != null && descartavel) {
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.findByVisibilidadeAndQuantidadeIsNotAndDescartavelAndNomeContaining(true, 0, true, nome, pageable)
                    );
                } else {
                    if (naoDescartavel != null && naoDescartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.findByVisibilidadeAndQuantidadeIsNotAndDescartavelAndNomeContaining(true, 0, false, nome, pageable)
                        );
                    }
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.findByVisibilidadeAndQuantidadeIsNotAndNomeContaining(true, 0, nome, pageable)
                    );
                }
            }
        } else {
            if (classificacao != null) {
                Classificacao classificacao1 = classificacaoService.findById(classificacao).get();

                if (semQuantidade != null && semQuantidade) {
                    if (descartavel != null && descartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.findByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavel(true, classificacao1, 0, true, pageable)
                        );
                    } else {
                        if (naoDescartavel != null && naoDescartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.findByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavel(true, classificacao1, 0, false, pageable)
                            );
                        }
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.findByVisibilidadeAndClassificacaoAndQuantidade(true, classificacao1, 0, pageable)
                        );
                    }
                } else {
                    if (comQuantidade == null) {
                        if (descartavel != null && descartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.findByVisibilidadeAndClassificacaoAndDescartavel(true, classificacao1, true, pageable)
                            );
                        } else {
                            if (naoDescartavel != null && naoDescartavel) {
                                return ResponseEntity.status(HttpStatus.OK).body(
                                        this.produtoService.findByVisibilidadeAndClassificacaoAndDescartavel(true, classificacao1, false, pageable)
                                );
                            }
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.findByVisibilidadeAndClassificacao(true, classificacao1, pageable)
                            );
                        }
                    }
                }
                if (descartavel != null && descartavel) {
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavel(true, classificacao1, 0, true, pageable)
                    );
                } else {
                    if (naoDescartavel != null && naoDescartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.findByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavel(true, classificacao1, 0, false, pageable)
                        );
                    }
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.findByVisibilidadeAndClassificacaoAndQuantidadeIsNot(true, classificacao1, 0, pageable)
                    );
                }
            } else {
                if (semQuantidade != null && semQuantidade) {
                    if (descartavel != null && descartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.findByVisibilidadeAndQuantidadeAndDescartavel(true, 0, true, pageable)
                        );
                    } else {
                        if (naoDescartavel != null && naoDescartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.findByVisibilidadeAndQuantidadeAndDescartavel(true, 0, false, pageable)
                            );
                        }
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.findByVisibilidadeAndQuantidade(true, 0, pageable)
                        );
                    }
                } else {
                    if (comQuantidade == null) {
                        if (descartavel != null && descartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.findByVisibilidadeAndDescartavel(true, true, pageable)
                            );
                        } else {
                            if (naoDescartavel != null && naoDescartavel) {
                                return ResponseEntity.status(HttpStatus.OK).body(
                                        this.produtoService.findByVisibilidadeAndDescartavel(true, false, pageable)
                                );
                            }
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.findByVisibilidade(true, pageable)
                            );
                        }
                    }
                }
                if (descartavel != null && descartavel) {
                    return ResponseEntity.status(HttpStatus.OK).body(
                        this.produtoService.findByVisibilidadeAndQuantidadeIsNotAndDescartavel(true, 0, true, pageable)
                    );
                } else {
                    if (naoDescartavel != null && naoDescartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.findByVisibilidadeAndQuantidadeIsNotAndDescartavel(true, 0, false, pageable)
                        );
                    }
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.findByVisibilidadeAndQuantidadeIsNot(true, 0, pageable)
                    );
                }
            }
        }
    }

    @GetMapping("/page/count")
    public ResponseEntity<Integer> countPage(
            @PageableDefault(page = 0, size = 18, sort = "id", direction = Sort.Direction.ASC) Pageable pageable,
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) Long classificacao,
            @RequestParam(required = false) Boolean descartavel,
            @RequestParam(required = false) Boolean naoDescartavel,
            @RequestParam(required = false) Boolean semQuantidade,
            @RequestParam(required = false) Boolean comQuantidade,
            @RequestParam(required = false) Integer favorito
    ) {

        if (nome != null && !nome.isEmpty()) {
            if (classificacao != null) {
                Classificacao classificacao1 = classificacaoService.findById(classificacao).get();

                if (semQuantidade != null && semQuantidade) {
                    if (descartavel != null && descartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.countByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavelAndNomeContaining(true, classificacao1, 0, true, nome)
                        );
                    } else {
                        if (naoDescartavel != null && naoDescartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.countByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavelAndNomeContaining(true, classificacao1, 0, false, nome)
                            );
                        }
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.countByVisibilidadeAndClassificacaoAndQuantidadeAndNomeContaining(true, classificacao1, 0, nome)
                        );
                    }
                } else {
                    if (comQuantidade == null) {
                        if (descartavel != null && descartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.countByVisibilidadeAndClassificacaoAndDescartavelAndNomeContaining(true, classificacao1, true, nome)
                            );
                        } else {
                            if (naoDescartavel != null && naoDescartavel) {
                                return ResponseEntity.status(HttpStatus.OK).body(
                                        this.produtoService.countByVisibilidadeAndClassificacaoAndDescartavelAndNomeContaining(true, classificacao1, false, nome)
                                );
                            }
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.countByVisibilidadeAndClassificacaoAndNomeContaining(true, classificacao1, nome)
                            );
                        }
                    }
                }
                if (descartavel != null && descartavel) {
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.countByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavelAndNomeContaining(true, classificacao1, 0, true, nome)
                    );
                } else {
                    if (naoDescartavel != null && naoDescartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.countByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavelAndNomeContaining(true, classificacao1, 0, false, nome)
                        );
                    }
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.countByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndNomeContaining(true, classificacao1, 0, nome)
                    );
                }
            } else {
                if (semQuantidade != null && semQuantidade) {
                    if (descartavel != null && descartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.countByVisibilidadeAndQuantidadeAndDescartavelAndNomeContaining(true, 0, true, nome)
                        );
                    } else {
                        if (naoDescartavel != null && naoDescartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.countByVisibilidadeAndQuantidadeAndDescartavelAndNomeContaining(true, 0, false, nome)
                            );
                        }
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.countByVisibilidadeAndQuantidadeAndNomeContaining(true, 0, nome)
                        );
                    }
                } else {
                    if (comQuantidade == null) {
                        if (descartavel != null && descartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.countByVisibilidadeAndDescartavelAndNomeContaining(true, true, nome)
                            );
                        } else {
                            if (naoDescartavel != null && naoDescartavel) {
                                return ResponseEntity.status(HttpStatus.OK).body(
                                        this.produtoService.countByVisibilidadeAndDescartavelAndNomeContaining(true, false, nome)
                                );
                            }
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.countByVisibilidadeAndNomeContaining(true, nome)
                            );
                        }
                    }
                }
                if (descartavel != null && descartavel) {
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.countByVisibilidadeAndQuantidadeIsNotAndDescartavelAndNomeContaining(true, 0, true, nome)
                    );
                } else {
                    if (naoDescartavel != null && naoDescartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.countByVisibilidadeAndQuantidadeIsNotAndDescartavelAndNomeContaining(true, 0, false, nome)
                        );
                    }
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.countByVisibilidadeAndQuantidadeIsNotAndNomeContaining(true, 0, nome)
                    );
                }
            }
        } else {
            if (classificacao != null) {
                Classificacao classificacao1 = classificacaoService.findById(classificacao).get();

                if (semQuantidade != null && semQuantidade) {
                    if (descartavel != null && descartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.countByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavel(true, classificacao1, 0, true)
                        );
                    } else {
                        if (naoDescartavel != null && naoDescartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.countByVisibilidadeAndClassificacaoAndQuantidadeAndDescartavel(true, classificacao1, 0, false)
                            );
                        }
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.countByVisibilidadeAndClassificacaoAndQuantidade(true, classificacao1, 0)
                        );
                    }
                } else {
                    if (comQuantidade == null) {
                        if (descartavel != null && descartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.countByVisibilidadeAndClassificacaoAndDescartavel(true, classificacao1, true)
                            );
                        } else {
                            if (naoDescartavel != null && naoDescartavel) {
                                return ResponseEntity.status(HttpStatus.OK).body(
                                        this.produtoService.countByVisibilidadeAndClassificacaoAndDescartavel(true, classificacao1, false)
                                );
                            }
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.countByVisibilidadeAndClassificacao(true, classificacao1)
                            );
                        }
                    }
                }
                if (descartavel != null && descartavel) {
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.countByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavel(true, classificacao1, 0, true)
                    );
                } else {
                    if (naoDescartavel != null && naoDescartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.countByVisibilidadeAndClassificacaoAndQuantidadeIsNotAndDescartavel(true, classificacao1, 0, false)
                        );
                    }
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.countByVisibilidadeAndClassificacaoAndQuantidadeIsNot(true, classificacao1, 0)
                    );
                }
            } else {
                if (semQuantidade != null && semQuantidade) {
                    if (descartavel != null && descartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.countByVisibilidadeAndQuantidadeAndDescartavel(true, 0, true)
                        );
                    } else {
                        if (naoDescartavel != null && naoDescartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.countByVisibilidadeAndQuantidadeAndDescartavel(true, 0, false)
                            );
                        }
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.countByVisibilidadeAndQuantidade(true, 0)
                        );
                    }
                } else {
                    if (comQuantidade == null) {
                        if (descartavel != null && descartavel) {
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.countByVisibilidadeAndDescartavel(true, true)
                            );
                        } else {
                            if (naoDescartavel != null && naoDescartavel) {
                                return ResponseEntity.status(HttpStatus.OK).body(
                                        this.produtoService.countByVisibilidadeAndDescartavel(true, false)
                                );
                            }
                            return ResponseEntity.status(HttpStatus.OK).body(
                                    this.produtoService.countByVisibilidade(true)
                            );
                        }
                    }
                }
                if (descartavel != null && descartavel) {
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.countByVisibilidadeAndQuantidadeIsNotAndDescartavel(true, 0, true)
                    );
                } else {
                    if (naoDescartavel != null && naoDescartavel) {
                        return ResponseEntity.status(HttpStatus.OK).body(
                                this.produtoService.countByVisibilidadeAndQuantidadeIsNotAndDescartavel(true, 0, false)
                        );
                    }
                    return ResponseEntity.status(HttpStatus.OK).body(
                            this.produtoService.countByVisibilidadeAndQuantidadeIsNot(true, 0)
                    );
                }
            }
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable(value = "id") Long id) {
        if (!produtoService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhum produto com este ID.");
        }

        Produto produto = produtoService.findById(id).get();

        if (!produto.getVisibilidade()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("O produto solicitado não existe!");
        }

        return ResponseEntity.status(HttpStatus.FOUND).body(produto);
    }

    @GetMapping("/classificacoes/{classificacao_id}")
    public ResponseEntity<List<Produto>> findByClassificacao(@PathVariable(value = "classificacao_id") Long classificacaoId) {
        Classificacao classificacao = classificacaoService.findById(classificacaoId).get();
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.findAllByClassificacao(classificacao));
    }

    @PostMapping
    public ResponseEntity<Produto> save(@RequestParam("produto") String produtoJson,
                                        @RequestParam("imagem") MultipartFile imagem) {

        ProdutoUtil produtoUtil = new ProdutoUtil();
        Produto produto = produtoUtil.convertJsonToModel(produtoJson);

        produto.setImagem(imagem);
        produto.setVisibilidade(true);
        return ResponseEntity.status(HttpStatus.CREATED).body(produtoService.save(produto));
    }

    @PostMapping("/anexos")
    public ResponseEntity<Produto> saveWithAnexos(@RequestParam("produto") String produtoJson,
                                                  @RequestParam("imagem") MultipartFile imagem,
                                                  @RequestParam("anexos") List<MultipartFile> anexos) {

        ProdutoUtil produtoUtil = new ProdutoUtil();
        Produto produto = produtoUtil.convertJsonToModel(produtoJson);

        produto.setImagem(imagem);
        produto.setAnexos(anexos);
        produto.setVisibilidade(true);
        return ResponseEntity.status(HttpStatus.CREATED).body(produtoService.save(produto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable(value = "id") Long id, @RequestBody @Valid ProdutoDTO produtoDTO) {
        if (!produtoService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Este produto não existe.");
        }
        Produto produto = produtoService.findById(id).get();

        BeanUtils.copyProperties(produtoDTO, produto);
        produto.setId(id);
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.save(produto));
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteById(@PathVariable(value = "id") Long id) {
        if (!produtoService.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi encontrado nenhum produto com este ID.");
        }

        Produto produto = produtoService.findById(id).get();
        produto.setVisibilidade(false);
        produtoService.save(produto);
        return ResponseEntity.status(HttpStatus.OK).body(produto);
    }
}
