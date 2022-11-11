package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.dto.ProdutoDTO;
import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.service.ClassificacaoService;
import br.senai.sc.almoxarifado.model.service.ProdutoService;
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

//    @GetMapping("/page")
//    public ResponseEntity<List<Produto>> findPage(
//            @PageableDefault(page = 0, size = 18, sort = "id", direction = Sort.Direction.ASC) Pageable pageable,
//            @RequestParam(required = false) String nome,
//            @RequestParam(required = false) String classificacao,
//            @RequestParam(required = false) Boolean descartavel,
//            @RequestParam(required = false) Boolean naoDescartavel,
//            @RequestParam(required = false) Boolean semEstoque,
//            @RequestParam(required = false) Boolean comEstoque,
//            @RequestParam(required = false) Integer favorito
//    ) {
//
//        if (nome != null && !nome.isEmpty()) {
//            if (classificacao != null && !classificacao.isEmpty()) {
//                ClassificacaoUtil classificacaoUtil = new ClassificacaoUtil();
//                Classificacao classificacao1 = classificacaoUtil.convertJsonToModel(classificacao);
//                if (favorito != null && favorito != 0) {
//                    if (semEstoque) {
//                        if (descartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//                                    this.produtoService.findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueAndDescartavelAndNomeContaining(true, classificacao1, favorito, 0, true, nome, pageable)
//                            );
//                        } else {
//                            if (naoDescartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//                                        this.produtoService.findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueAndDescartavelAndNomeContaining(true, classificacao1, favorito, 0, false, nome, pageable)
//                                );
//                            }
//                            return ResponseEntity.status(HttpStatus.OK).body(
//                                    this.produtoService.findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueAndNomeContaining(true, classificacao1, favorito, 0, nome, pageable)
//                            );
//                        }
//                    } else {
//                        if (!comEstoque) {
//                            if (descartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//                                        this.produtoService.findByVisibilidadeAndClassificacaoAndFavoritoAndDescartavelAndNomeContaining(true, classificacao1, favorito, true, nome, pageable)
//                                );
//                            } else {
//                                if (naoDescartavel) {
//                                    return ResponseEntity.status(HttpStatus.OK).body(
//                                            this.produtoService.findByVisibilidadeAndClassificacaoAndFavoritoAndDescartavelAndNomeContaining(true, classificacao1, favorito, false, nome, pageable)
//                                    );
//                                }
//                                return ResponseEntity.status(HttpStatus.OK).body(
//                                        this.produtoService.findByVisibilidadeAndClassificacaoAndFavoritoAndNomeContaining(true, classificacao1, favorito, nome, pageable)
//                                );
//                            }
//                        }
//                    }
//                    if (descartavel) {
//                        return ResponseEntity.status(HttpStatus.OK).body(
//                                this.produtoService.findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueIsNotAndDescartavelAndNomeContaining(true, classificacao1, favorito, 0, true, nome, pageable)
//                        );
//                    } else {
//                        if(naoDescartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//                                    this.produtoService.findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueIsNotAndDescartavelAndNomeContaining(true, classificacao1, favorito, 0, false, nome, pageable)
//                            );
//                        }
//                        return ResponseEntity.status(HttpStatus.OK).body(
//                                this.produtoService.findByVisibilidadeAndClassificacaoAndFavoritoAndEstoqueIsNotAndNomeContaining(true, classificacao1, favorito, 0, nome, pageable)
//                        );
//                    }
//                } else {
//                    if (semEstoque) {
//                        if (descartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//                                    this.produtoService.findByVisibilidadeAndClassificacaoAndEstoqueAndDescartavelAndNomeContaining(true, classificacao1, 0, true, nome, pageable)
//                            );
//                        } else {
//                            if(naoDescartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//                                        this.produtoService.findByVisibilidadeAndClassificacaoAndEstoqueAndDescartavelAndNomeContaining(true, classificacao1, 0, false, nome, pageable)
//                                );
//                            }
//                            return ResponseEntity.status(HttpStatus.OK).body(
//                                    this.produtoService.findByVisibilidadeAndClassificacaoAndEstoqueAndNomeContaining(true, classificacao1, 0, nome, pageable)
//                            );
//                        }
//                    } else {
//                        if (!comEstoque) {
//                            if (descartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//                                        this.produtoService.findByVisibilidadeAndClassificacaoAndDescartavelAndNomeContaining(true, classificacao1, true, nome, pageable)
//                                );
//                            } else {
//                                if(naoDescartavel) {
//                                    return ResponseEntity.status(HttpStatus.OK).body(
//                                            this.produtoService.findByVisibilidadeAndClassificacaoAndDescartavelAndNomeContaining(true, classificacao1, false, nome, pageable)
//                                    );
//                                }
//                                return ResponseEntity.status(HttpStatus.OK).body(
//                                        this.produtoService.findByVisibilidadeAndClassificacaoAndNomeContaining(true, classificacao1, nome, pageable)
//                                );
//                            }
//                        }
//                    }
//                    if (descartavel) {
//                        return ResponseEntity.status(HttpStatus.OK).body(
//                                this.produtoService.findByVisibilidadeAndClassificacaoAndEstoqueIsNotAndDescartavelAndNomeContaining(true, classificacao1, 0, true, nome, pageable)
//                        );
//                    } else {
//                        if(naoDescartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//                                    this.produtoService.findByVisibilidadeAndClassificacaoAndEstoqueIsNotAndDescartavelAndNomeContaining(true, classificacao1, 0, false, nome, pageable)
//                            );
//                        }
//                        return ResponseEntity.status(HttpStatus.OK).body(
//                                this.produtoService.findByVisibilidadeAndClassificacaoAndEstoqueIsNotAndNomeContaining(true, classificacao1, 0, nome, pageable)
//                        );
//                    }
//                }
//            } else {
//                if (favorito) {
//                    if (semEstoque) {
//                        if (descartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        } else {
//                            if(naoDescartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            }
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        }
//                    } else {
//                        if (!comEstoque) {
//                            if (descartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            } else {
//                                if(naoDescartavel) {
//                                    return ResponseEntity.status(HttpStatus.OK).body(
//
//                                    );
//                                }
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            }
//                        }
//                    }
//                    if (descartavel) {
//                        return ResponseEntity.status(HttpStatus.OK).body(
//
//                        );
//                    } else {
//                        if(naoDescartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        }
//                        return ResponseEntity.status(HttpStatus.OK).body(
//
//                        );
//                    }
//                } else {
//                    if (semEstoque) {
//                        if (descartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        } else {
//                            if(naoDescartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            }
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        }
//                    } else {
//                        if (!comEstoque) {
//                            if (descartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            } else {
//                                if(naoDescartavel) {
//                                    return ResponseEntity.status(HttpStatus.OK).body(
//
//                                    );
//                                }
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            }
//                        }
//                    }
//                    if (descartavel) {
//                        return ResponseEntity.status(HttpStatus.OK).body(
//
//                        );
//                    } else {
//                        if(naoDescartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        }
//                        return ResponseEntity.status(HttpStatus.OK).body(
//
//                        );
//                    }
//                }
//            }
//        } else {
//            if (classificacao != null && !classificacao.isEmpty()) {
//                ClassificacaoUtil classificacaoUtil = new ClassificacaoUtil();
//                Classificacao classificacao1 = classificacaoUtil.convertJsonToModel(classificacao);
//                if (favorito) {
//                    if (semEstoque) {
//                        if (descartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        } else {
//                            if(naoDescartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            }
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        }
//                    } else {
//                        if (!comEstoque) {
//                            if (descartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            } else {
//                                if(naoDescartavel) {
//                                    return ResponseEntity.status(HttpStatus.OK).body(
//
//                                    );
//                                }
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            }
//                        }
//                    }
//                    if (descartavel) {
//                        return ResponseEntity.status(HttpStatus.OK).body(
//
//                        );
//                    } else {
//                        if(naoDescartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        }
//                        return ResponseEntity.status(HttpStatus.OK).body(
//
//                        );
//                    }
//                } else {
//                    if (semEstoque) {
//                        if (descartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        } else {
//                            if(naoDescartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            }
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        }
//                    } else {
//                        if (!comEstoque) {
//                            if (descartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            } else {
//                                if(naoDescartavel) {
//                                    return ResponseEntity.status(HttpStatus.OK).body(
//
//                                    );
//                                }
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            }
//                        }
//                    }
//                    if (descartavel) {
//                        return ResponseEntity.status(HttpStatus.OK).body(
//
//                        );
//                    } else {
//                        if(naoDescartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        }
//                        return ResponseEntity.status(HttpStatus.OK).body(
//
//                        );
//                    }
//                }
//            } else {
//                if (favorito) {
//                    if (semEstoque) {
//                        if (descartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        } else {
//                            if(naoDescartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            }
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        }
//                    } else {
//                        if (!comEstoque) {
//                            if (descartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            } else {
//                                if(naoDescartavel) {
//                                    return ResponseEntity.status(HttpStatus.OK).body(
//
//                                    );
//                                }
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            }
//                        }
//                    }
//                    if (descartavel) {
//                        return ResponseEntity.status(HttpStatus.OK).body(
//
//                        );
//                    } else {
//                        if(naoDescartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        }
//                        return ResponseEntity.status(HttpStatus.OK).body(
//
//                        );
//                    }
//                } else {
//                    if (semEstoque) {
//                        if (descartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        } else {
//                            if(naoDescartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            }
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        }
//                    } else {
//                        if (!comEstoque) {
//                            if (descartavel) {
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            } else {
//                                if(naoDescartavel) {
//                                    return ResponseEntity.status(HttpStatus.OK).body(
//
//                                    );
//                                }
//                                return ResponseEntity.status(HttpStatus.OK).body(
//
//                                );
//                            }
//                        }
//                    }
//                    if (descartavel) {
//                        return ResponseEntity.status(HttpStatus.OK).body(
//
//                        );
//                    } else {
//                        if(naoDescartavel) {
//                            return ResponseEntity.status(HttpStatus.OK).body(
//
//                            );
//                        }
//                        return ResponseEntity.status(HttpStatus.OK).body(
//
//                        );
//                    }
//                }
//            }
//        }
//    }

    @GetMapping("/page/{nome}")
    public ResponseEntity<Page<Produto>> findByNome(
            @PageableDefault(page = 0, size = 18, sort = "id", direction = Sort.Direction.ASC) Pageable pageable,
            @PathVariable(name = "nome") String nome) {
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.findByNome(nome, pageable));
    }

    @GetMapping("/count")
    public ResponseEntity<Object> findCount() {
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.countByVisibilidade(true));
    }

    @GetMapping("/count/{nome}")
    public ResponseEntity<Object> findCountNome(@PathVariable(name = "nome") String nome) {
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.countByVisibilidadeAndNome(nome, true));
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
