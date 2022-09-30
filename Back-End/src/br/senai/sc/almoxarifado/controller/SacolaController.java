package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.Sacola;
import br.senai.sc.almoxarifado.model.service.SacolaService;

public class SacolaController {
    SacolaService service = new SacolaService();

    public void inserirSacola(Sacola sacola) {
        service.inserirSacola(sacola);
    }
}
