package br.senai.sc.almoxarifado.controller;

import br.senai.sc.almoxarifado.model.entities.Reserva;
import br.senai.sc.almoxarifado.model.service.ReservaService;

public class ReservaController {
    ReservaService service = new ReservaService();

    public void inserirReserva(Reserva reserva){
        service.inserirReserva(reserva);
    }

    public void atualizarStatusReserva(int codigoReserva, String status){
        service.atualizarStatusReserva(codigoReserva, status);
    }

//    public void excluirReserva(int codigoReserva){
//        service.excluirReserva(codigoReserva);
//    }
}
