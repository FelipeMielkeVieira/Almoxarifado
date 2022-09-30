package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.dao.SacolaDAO;
import br.senai.sc.almoxarifado.model.entities.Sacola;

public class SacolaService {

    public void inserirSacola(Sacola sacola) {
        new SacolaDAO().inserirSacola(sacola);
    }

}
