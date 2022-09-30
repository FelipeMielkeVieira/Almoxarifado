package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.dao.ClassificacaoDAO;
import br.senai.sc.almoxarifado.model.entities.Classificacao;

import java.util.Collection;

public class ClassificacaoService {

    public void inserirClassificacao(Classificacao classificacao) {
        new ClassificacaoDAO().inserirClassificacao(classificacao);
    }

    public Classificacao selecionarId(Integer id) {
        return new ClassificacaoDAO().selecionarId(id);
    }

    public Collection<Classificacao> selecionarTodos() {
        return new ClassificacaoDAO().selecionarTodos();
    }

    public Classificacao buscarClassificacaoPorProduto(Integer classificacaoId) {
        return new ClassificacaoDAO().buscarClassificacaoPorProduto(classificacaoId);
    }
}
