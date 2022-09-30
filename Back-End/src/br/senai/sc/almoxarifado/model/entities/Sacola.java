package br.senai.sc.almoxarifado.model.entities;

import java.util.ArrayList;
import java.util.Date;

public class Sacola {
    private Integer codigoSacola;
    private Date dataRetirada;
    private Date dataDevolucao;

    private Usuario usuarioSacola;
    private ArrayList<SacolaProduto> listaSacolaProdutos;

    public Sacola() { }

    public Sacola(Integer codigoSacola, Date dataRetirada, Date dataDevolucao, Usuario usuarioSacola, ArrayList<SacolaProduto> listaSacolaProdutos) {
        this.codigoSacola = codigoSacola;
        this.dataRetirada = dataRetirada;
        this.dataDevolucao = dataDevolucao;
        this.usuarioSacola = usuarioSacola;
        this.listaSacolaProdutos = listaSacolaProdutos;
    }

    public Sacola(Date dataRetirada, Date dataDevolucao, Usuario usuarioSacola, ArrayList<SacolaProduto> listaSacolaProdutos) {
        this.dataRetirada = dataRetirada;
        this.dataDevolucao = dataDevolucao;
        this.usuarioSacola = usuarioSacola;
        this.listaSacolaProdutos = listaSacolaProdutos;
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

    public Usuario getUsuarioSacola() {
        return usuarioSacola;
    }

    public void setUsuarioSacola(Usuario usuarioSacola) {
        this.usuarioSacola = usuarioSacola;
    }

    public ArrayList<SacolaProduto> getListaSacolaProdutos() {
        return listaSacolaProdutos;
    }

    public void setListaSacolaProdutos(ArrayList<SacolaProduto> listaSacolaProdutos) {
        this.listaSacolaProdutos = listaSacolaProdutos;
    }

    @Override
    public String toString() {
        return "Sacola{" +
                "codigoSacola=" + codigoSacola +
                ", dataRetirada=" + dataRetirada +
                ", dataDevolucao=" + dataDevolucao +
                ", emailUsuario=" + usuarioSacola +
                ", listaProdutosReserva=" + listaSacolaProdutos +
                '}';
    }
}
