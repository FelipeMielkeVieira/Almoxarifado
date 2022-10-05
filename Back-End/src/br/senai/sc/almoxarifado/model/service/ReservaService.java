package br.senai.sc.almoxarifado.model.service;

import br.senai.sc.almoxarifado.model.dao.ReservaDAO;
import br.senai.sc.almoxarifado.model.entities.Reserva;

public class ReservaService {

    public void inserirReserva(Reserva reserva){
        new ReservaDAO().inserirReserva(reserva);
    }

    public void atualizarStatusReserva(int codigoReserva, String status){
        new ReservaDAO().atualizarStatusReserva(codigoReserva, status);
    }
}
