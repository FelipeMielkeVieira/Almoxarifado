package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.Reserva;
import br.senai.sc.almoxarifado.model.service.ReservaService;

public class ReservaController {
    ReservaService service = new ReservaService();

    public void inserirReserva(Reserva reserva){
        service.inserirReserva(reserva);
    }

}
