package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.*;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class LocalizacaoDAO {
    private final Connection conexaoLocalizacao;

    public LocalizacaoDAO() {
        this.conexaoLocalizacao = new ConexaoFactory().conectaBD();
    }

    public void inserirLocalizacao(Localizacao localizacao) {
        String sql = "INSERT INTO LOCALIZACAO (id, nome) VALUES (null, ?)";

        try (PreparedStatement statement = conexaoLocalizacao.prepareStatement(sql)) {
            statement.setString(1, localizacao.getNome());
            try {
                statement.execute();
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    public ArrayList<Localizacao> selecionarTodos(int id) {
        String sql = "SELECT * FROM LOCALIZACAO WHERE ID >= ? LIMIT 100";

        try (PreparedStatement stmt = conexaoLocalizacao.prepareStatement(sql)) {

            stmt.setInt(1, id);
            try (ResultSet resultSet = stmt.executeQuery()) {

                ArrayList<Localizacao> localizacoes = new ArrayList<>();
                if (resultSet != null) {
                    while (resultSet.next()) {
                        localizacoes.add(extrairObjeto(resultSet));
                    }
                    return localizacoes;
                }
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na execução do comando SQL");
        }

        throw new RuntimeException("Nenhuma localização encontrada!");
    }

    public void removerLocalizacao(int id) {
        String sql = "DELETE FROM LOCALIZACAO WHERE id = ?";

        try (PreparedStatement stmt = conexaoLocalizacao.prepareStatement(sql)) {

            stmt.setInt(1, id);
            try {
                stmt.execute();
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL");
        }
    }

    private Localizacao extrairObjeto(ResultSet resultSet) {
        try {
            return new Localizacao(
                    resultSet.getInt("id"),
                    resultSet.getString("nome")
            );
        } catch (Exception e) {
            throw new RuntimeException("Erro ao extrair o objeto!");
        }
    }
}
