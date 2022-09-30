package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.service.ClassificacaoService;

import java.util.Collection;

public class ClassificacaoController {
    ClassificacaoService service = new ClassificacaoService();

    public void inserirClassificacao(Classificacao classificacao) {
        service.inserirClassificacao(classificacao);
    }

    public Classificacao selecionarId(Integer id) {
        return service.selecionarId(id);
    }

    public Collection<Classificacao> selecionarTodos() {
        return service.selecionarTodos();
    }

    public Classificacao buscarClassificacaoPorProduto(Integer classificacaoId) {
        return service.buscarClassificacaoPorProduto(classificacaoId);
    }

}
