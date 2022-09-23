package br.senai.sc.almoxarifado.model.factory;

import br.senai.sc.almoxarifado.model.entities.Localizacao;

public class LocalizacaoFactory {
    public Localizacao getLocalizacao(Integer codigoLocalizacao, String nome) {
        return new Localizacao(codigoLocalizacao, nome);
    }
}
