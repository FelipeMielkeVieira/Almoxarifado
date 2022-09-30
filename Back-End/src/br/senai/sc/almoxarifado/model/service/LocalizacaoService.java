package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.dao.LocalizacaoDAO;
import br.senai.sc.almoxarifado.model.entities.Localizacao;

import java.util.ArrayList;
import java.util.Collection;

public class LocalizacaoService {

    public void inserirLocalizacao(Localizacao localizacao){
        new LocalizacaoDAO().inserirLocalizacao(localizacao);
    }

    public void removerLocalizacao(Integer id){
        new LocalizacaoDAO().removerLocalizacao(id);
    }

    public Collection<Localizacao> selecionarTodos(Integer id, Integer limite){
        return new LocalizacaoDAO().selecionarTodos(id, limite);
    }

    public ArrayList<Localizacao> buscarLocalizacoesPorProduto(Integer idProduto){
        return new LocalizacaoDAO().buscarLocalizacoesPorProduto(idProduto);
    }

}
