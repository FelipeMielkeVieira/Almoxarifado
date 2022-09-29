package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;

import java.sql.Connection;

public class SacolaDAO {
    private final Connection conexaoSacola;

    public SacolaDAO() {
        this.conexaoSacola = new ConexaoFactory().conectaBD();
    }


}
