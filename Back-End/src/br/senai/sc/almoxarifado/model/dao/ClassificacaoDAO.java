package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;

public class ClassificacaoDAO {
    private final Connection conexaoClassificacao;

    public ClassificacaoDAO() {
        this.conexaoClassificacao = new ConexaoFactory().conectaBD();
    }

    public void inserirClassificacao(Classificacao classificacao) {
        String sql = "INSERT INTO CLASSIFICACAO (CLASSIFICACAO) VALUES (?)";

        try (PreparedStatement statement = conexaoClassificacao.prepareStatement(sql)) {

            statement.setString(1, classificacao.getClassificacao());

            try {
                statement.execute();
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL");
        }
    }

    public Classificacao selecionarId(int id) {
        String sql = "SELECT * FROM CLASSIFICACAO WHERE ID = ?";

        try (PreparedStatement stmt = conexaoClassificacao.prepareStatement(sql)) {

            stmt.setInt(1, id);

            try (ResultSet resultSet = stmt.executeQuery()) {
                if (resultSet != null && resultSet.next()) {
                    return extrairObjeto(resultSet);
                }
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL");
        }

        throw new RuntimeException("E-mail não encontrado!");
    }

    public Collection<Classificacao> selecionarTodos() {
        Collection<Classificacao> listaClassificacoes = new ArrayList<>();

        String sql = "SELECT * FROM CLASSIFICACAO";

        try (PreparedStatement statement = conexaoClassificacao.prepareStatement(sql)) {
            try (ResultSet resultSet = statement.executeQuery()) {
                while (resultSet != null && resultSet.next()) {
                    listaClassificacoes.add(extrairObjeto(resultSet));
                }
            } catch (SQLException e) {
                throw new RuntimeException("Erro na execução do comando SQL");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL");
        }

        return listaClassificacoes;
    }

    public Classificacao buscarClassificacaoPorProduto(int classificacao_id) {
        String sql = "SELECT * FROM classificacao WHERE ID = ?";

        try (PreparedStatement stmt = conexaoClassificacao.prepareStatement(sql)) {

            stmt.setInt(1, classificacao_id);

            try (ResultSet resultSet = stmt.executeQuery()) {
                if (resultSet != null && resultSet.next()) {
                    return extrairObjeto(resultSet);
                }
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL");
        }

        throw new RuntimeException("E-mail não encontrado!");
    }

    private Classificacao extrairObjeto(ResultSet resultSet) {
        try {
            return new Classificacao(resultSet.getInt("id"), resultSet.getString("classificacao"));
        } catch (Exception e) {
            throw new RuntimeException("Erro ao extrair o objeto!");
        }
    }
}
