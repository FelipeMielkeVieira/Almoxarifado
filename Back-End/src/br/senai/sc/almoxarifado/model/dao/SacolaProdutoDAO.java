package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class SacolaProdutoDAO {
    private final Connection conexaoSacolaProduto;

    public SacolaProdutoDAO() {
        this.conexaoSacolaProduto = new ConexaoFactory().conectaBD();
    }


    public void deletarProdutoDasSacolas(Integer codigoProduto) {
        String sql = "DELETE FROM SACOLA_PRODUTO WHERE PRODUTO_ID = ? AND ID > 0;";

        try (PreparedStatement statement = conexaoSacolaProduto.prepareStatement(sql)) {
            statement.setInt(1, codigoProduto);;

            try {
                statement.execute();
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }
}
