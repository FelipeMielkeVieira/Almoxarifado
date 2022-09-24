package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class ProdutoLocalizacaoDAO {
    private final Connection conexaoProdutoLocalizacao;

    public ProdutoLocalizacaoDAO() {
        this.conexaoProdutoLocalizacao = new ConexaoFactory().conectaBD();
    }

    public void inserirProdutoLocalizacao(int produto_id, int localizcao_id) {
        String sql = "INSERT INTO PRODUTO_LOCALIZACAO (PRODUTO_ID, LOCALIZACAO_ID) VALUES (?, ?)";

        try (PreparedStatement statement = conexaoProdutoLocalizacao.prepareStatement(sql)) {
            statement.setInt(1, produto_id);
            statement.setInt(2, localizcao_id);

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
