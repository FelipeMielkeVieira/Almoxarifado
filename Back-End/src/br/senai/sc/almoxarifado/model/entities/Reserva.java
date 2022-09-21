package br.senai.sc.almoxarifado.model.entities;

import java.util.ArrayList;
import java.util.Date;

public class Reserva {
    private Integer codigoReserva;
    private Integer statusReserva;
    private Date dataRetirada;
    private Date dataDevolucao;

    private Usuario emailUsuario;
    private ArrayList<ReservaProduto> listaProdutosReserva;

    public Reserva() {
    }

    public Reserva(Integer codigoReserva, Integer statusReserva, Date dataRetirada, Date dataDevolucao, Usuario emailUsuario, ArrayList<ReservaProduto> listaProdutosReserva) {
        this.codigoReserva = codigoReserva;
        this.statusReserva = statusReserva;
        this.dataRetirada = dataRetirada;
        this.dataDevolucao = dataDevolucao;
        this.emailUsuario = emailUsuario;
        this.listaProdutosReserva = listaProdutosReserva;
    }

    public Integer getCodigoReserva() {
        return codigoReserva;
    }

    public void setCodigoReserva(Integer codigoReserva) {
        this.codigoReserva = codigoReserva;
    }

    public Integer getStatusReserva() {
        return statusReserva;
    }

    public void setStatusReserva(Integer statusReserva) {
        this.statusReserva = statusReserva;
    }

    public Date getDataRetirada() {
        return dataRetirada;
    }

    public void setDataRetirada(Date dataRetirada) {
        this.dataRetirada = dataRetirada;
    }

    public Date getDataDevolucao() {
        return dataDevolucao;
    }

    public void setDataDevolucao(Date dataDevolucao) {
        this.dataDevolucao = dataDevolucao;
    }

    public Usuario getEmailUsuario() {
        return emailUsuario;
    }

    public void setEmailUsuario(Usuario emailUsuario) {
        this.emailUsuario = emailUsuario;
    }

    public ArrayList<ReservaProduto> getListaProdutosReserva() {
        return listaProdutosReserva;
    }

    public void setListaProdutosReserva(ArrayList<ReservaProduto> listaProdutosReserva) {
        this.listaProdutosReserva = listaProdutosReserva;
    }

    @Override
    public String toString() {
        return "Reserva{" +
                "codigoReserva=" + codigoReserva +
                ", statusReserva=" + statusReserva +
                ", dataRetirada=" + dataRetirada +
                ", dataDevolucao=" + dataDevolucao +
                ", email usuario=" + emailUsuario +
                ", listaProdutosReserva=" + listaProdutosReserva +
                '}';
    }
}
