package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.Localizacao;
import br.senai.sc.almoxarifado.model.service.LocalizacaoService;

import java.util.Collection;

public class LocalizacaoController {
    LocalizacaoService service = new LocalizacaoService();

    public void inserirLocalizacao(Localizacao localizacao){
        service.inserirLocalizacao(localizacao);
    }

    public void removerLocalizacao(Integer id){
        service.removerLocalizacao(id);
    }

    public Collection<Localizacao> selecionarTodos(Integer id, Integer limite){
        return service.selecionarTodos(id, limite);
    }

    public Collection<Localizacao> buscarLocalizacoesPorProduto(Integer idProduto){
        return service.buscarLocalizacoesPorProduto(idProduto);
    }
}
