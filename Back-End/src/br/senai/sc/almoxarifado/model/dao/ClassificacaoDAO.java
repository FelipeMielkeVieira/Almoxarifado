package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;
import br.senai.sc.almoxarifado.model.factory.UsuarioFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class ClassificacaoDAO {
    private final Connection conexaoClassificacao;

    public ClassificacaoDAO() {
        this.conexaoClassificacao = new ConexaoFactory().conectaBD();
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
            throw new RuntimeException("Erro na execução do comando SQL");
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
