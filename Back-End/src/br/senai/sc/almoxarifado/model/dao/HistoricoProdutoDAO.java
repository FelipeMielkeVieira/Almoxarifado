package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.entities.HistoricoProduto;
import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;

import javax.xml.transform.Result;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;

public class HistoricoProdutoDAO {
    private final Connection conexaoHistoricoProduto;

    public HistoricoProdutoDAO() {
        this.conexaoHistoricoProduto = new ConexaoFactory().conectaBD();
    }

    public void inserirHistoricoProduto(HistoricoProduto historicoProduto, Integer codigoClassificacao, Integer codigoProduto) {
        String sql = "INSERT INTO HISTORICO_PRODUCAO (AUTOR, DATA_EDICAO, NOME, CARACTERISTICAS, QUANTIDADE, DESCARTAVEL, IMAGEM, ANEXOS, CLASSIFICACAO_ID, PRODUTO_ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (PreparedStatement statement = conexaoHistoricoProduto.prepareStatement(sql)) {
            statement.setString(1, historicoProduto.getAutorHistoricoProduto());
            statement.setDate(2, historicoProduto.getDataEdicaoHistoricoProduto());
            statement.setString(3, historicoProduto.getNomeHistoricoProduto());
            statement.setString(4, historicoProduto.getCaracteristicaHistoricoProduto());
            statement.setInt(5, historicoProduto.getQuantidadeHistoricoProduto());
            statement.setBoolean(6, historicoProduto.isDescartavelHistoricoProduto());
            statement.setBytes(7, historicoProduto.getImagemHistoricoProduto());
            statement.setString(8, historicoProduto.getAnexosHistoricoProduto());
            statement.setInt(9, codigoClassificacao);
            statement.setInt(10, codigoProduto);
            try {
                statement.execute();
            } catch (SQLException e) {
                throw new RuntimeException("Erro na execução do comando SQL");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL");
        }
    }

    public Collection<HistoricoProduto> listarTodosHistoricoProduto() {
        String sql = "SELECT * FROM HISTORICO_PRODUCAO";
        Collection<HistoricoProduto> listaHistoricoProduto = new ArrayList<>();

        try (PreparedStatement statement = conexaoHistoricoProduto.prepareStatement(sql)) {
            try (ResultSet resultSet = statement.executeQuery()) {
                while (resultSet != null && resultSet.next()) {
                    listaHistoricoProduto.add(extrairObjeto(resultSet));
                }
            } catch (SQLException e) {
                throw new RuntimeException("Erro na execução do comando SQL");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL");
        }

        return listaHistoricoProduto;
    }

    private HistoricoProduto extrairObjeto(ResultSet resultSet) {
        try {
            ProdutoDAO produtoDAO = new ProdutoDAO();
            Produto produto = produtoDAO.buscarProdutoPorID(resultSet.getInt("PRODUTO_ID"));
            ClassificacaoDAO classificacaoDAO = new ClassificacaoDAO();
            Classificacao classificacao = classificacaoDAO.selecionarId(resultSet.getInt("CLASSIFICACAO_ID"));

            return new HistoricoProduto(
                    resultSet.getInt("ID"),
                    resultSet.getInt("QUANTIDADE"),
                    resultSet.getString("AUTOR"),
                    resultSet.getString("NOME"),
                    resultSet.getString("CARACTERISTICAS"),
                    resultSet.getDate("DATA_EDICAO"),
                    resultSet.getBoolean("DESCARTAVEL"),
                    resultSet.getBytes("IMAGEM"),
                    resultSet.getString("ANEXOS"),
                    produto,
                    classificacao
                    );
        } catch (Exception e) {
            throw new RuntimeException("Erro ao extrair o objeto");
        }
    }

}
