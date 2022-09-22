package br.senai.sc.almoxarifado.model.entities;

import java.util.ArrayList;
import java.util.Date;

public class Sacola {
    private Integer codigoSacola;
    private Date dataRetirada;
    private Date dataDevolucao;

    private Usuario emailUsuario;
    private ArrayList<SacolaProduto> listaProdutosReserva;

    public Sacola() { }

    public Sacola(Integer codigoSacola, Date dataRetirada, Date dataDevolucao, Usuario emailUsuario, ArrayList<SacolaProduto> listaProdutosReserva) {
        this.codigoSacola = codigoSacola;
        this.dataRetirada = dataRetirada;
        this.dataDevolucao = dataDevolucao;
        this.emailUsuario = emailUsuario;
        this.listaProdutosReserva = listaProdutosReserva;
    }

    public Integer getCodigoSacola() {
        return codigoSacola;
    }

    public void setCodigoSacola(Integer codigoSacola) {
        this.codigoSacola = codigoSacola;
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

    public ArrayList<SacolaProduto> getListaProdutosReserva() {
        return listaProdutosReserva;
    }

    public void setListaProdutosReserva(ArrayList<SacolaProduto> listaProdutosReserva) {
        this.listaProdutosReserva = listaProdutosReserva;
    }

    @Override
    public String toString() {
        return "Sacola{" +
                "codigoSacola=" + codigoSacola +
                ", dataRetirada=" + dataRetirada +
                ", dataDevolucao=" + dataDevolucao +
                ", emailUsuario=" + emailUsuario +
                ", listaProdutosReserva=" + listaProdutosReserva +
                '}';
    }
}
