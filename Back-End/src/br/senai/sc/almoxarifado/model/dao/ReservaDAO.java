package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.Reserva;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ReservaDAO {
    private final Connection conexaoReserva;

    public ReservaDAO() {
        this.conexaoReserva = new ConexaoFactory().conectaBD();
    }

    public void inserirReserva(Reserva reserva) {
        String sql = "insert into reserva (data_retirada, data_devolucao, usuario_email) values (?, ?, ?)";

        try (PreparedStatement statement = conexaoReserva.prepareStatement(sql)) {

//            statement.setDate(1, reserva.getDataRetirada());
//            statement.setDate(2, reserva.getDataDevolucao());
//            statement.setString(3, reserva.getUsuarioEmail());

            try {
                statement.execute();
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    public void atualizarStatusReserva(int codigoReserva, String status){ // Da pra colocar os status como int tmb
        // Só para testar
        String sql = "update reserva set status = ? where codigo = ?";

        try (PreparedStatement pstm = conexaoReserva.prepareStatement(sql)){
            pstm.setString(1, status);
            pstm.setInt(2, codigoReserva);
            try{
                pstm.execute();
            } catch (SQLException e){
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

}
