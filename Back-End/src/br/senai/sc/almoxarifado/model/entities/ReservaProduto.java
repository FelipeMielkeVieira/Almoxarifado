package br.senai.sc.almoxarifado.model.entities;

public class ReservaProduto {
    private Integer codigoReservaProduto;
    private Integer qtdProduto;

    private Reserva codigoReserva;
    private Produto produtoReserva;

    public ReservaProduto() {
    }

    public ReservaProduto(Integer codigoReservaProduto, Integer qtdProduto, Reserva codigoReserva, Produto produtoReserva) {
        this.codigoReservaProduto = codigoReservaProduto;
        this.qtdProduto = qtdProduto;
        this.codigoReserva = codigoReserva;
        this.produtoReserva = produtoReserva;
    }

    public Integer getCodigoReservaProduto() {
        return codigoReservaProduto;
    }

    public void setCodigoReservaProduto(Integer codigoReservaProduto) {
        this.codigoReservaProduto = codigoReservaProduto;
    }

    public Integer getQtdProduto() {
        return qtdProduto;
    }

    public void setQtdProduto(Integer qtdProduto) {
        this.qtdProduto = qtdProduto;
    }

    public Reserva getCodigoReserva() {
        return codigoReserva;
    }

    public void setCodigoReserva(Reserva codigoReserva) {
        this.codigoReserva = codigoReserva;
    }

    public Produto getProdutoReserva() {
        return produtoReserva;
    }

    public void setProdutoReserva(Produto produtoReserva) {
        this.produtoReserva = produtoReserva;
    }

    @Override
    public String toString() {
        return "ReservaProduto{" +
                "codigoReservaProduto=" + codigoReservaProduto +
                ", qtdProduto=" + qtdProduto +
                ", codigoReserva=" + codigoReserva +
                ", produtoReserva=" + produtoReserva +
                '}';
    }
}
