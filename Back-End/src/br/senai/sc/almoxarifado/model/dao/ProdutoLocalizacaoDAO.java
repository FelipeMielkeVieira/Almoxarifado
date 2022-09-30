package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class ProdutoLocalizacaoDAO {
    private final Connection conexaoProdutoLocalizacao;

    public ProdutoLocalizacaoDAO() {
        this.conexaoProdutoLocalizacao = new ConexaoFactory().conectaBD();
    }

    public void inserirProdutoLocalizacao(int produtoId, int localizcaoId) {
        String sql = "INSERT INTO PRODUTO_LOCALIZACAO (PRODUTO_ID, LOCALIZACAO_ID) VALUES (?, ?);";

        try (PreparedStatement statement = conexaoProdutoLocalizacao.prepareStatement(sql)) {
            statement.setInt(1, produtoId);
            statement.setInt(2, localizcaoId);

            try {
                statement.execute();
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    public void deletarProdutoLocalizacaoPorProduto(Integer codigoProduto) {
        String sql = "DELETE FROM PRODUTO_LOCALIZACAO WHERE PRODUTO_ID = ? AND ID > 0;";

        try (PreparedStatement statement = conexaoProdutoLocalizacao.prepareStatement(sql)) {
            statement.setInt(1, codigoProduto);
            ;

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
