package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.Sacola;
import br.senai.sc.almoxarifado.model.entities.SacolaProduto;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class SacolaDAO {
    private final Connection conexaoSacola;

    public SacolaDAO() {
        this.conexaoSacola = new ConexaoFactory().conectaBD();
    }

    public void inserirSacola(Sacola sacola) {
        String sql = "INSERT INTO SACOLA ";
        if (sacola.getDataRetirada() != null) {
            sql += "(DATA_RETIRADA, USUARIO_EMAIL, DATA_DEVOLUCAO) VALUES (?, ?, ?);\";";
        } else {
            sql += "(DATA_RETIRADA, USUARIO_EMAIL) VALUES (?, ?);";
        }

        // Criando statement passando por parâmetro o comando sql e Statement.RETURN_GENERATED_KEYS para retornar o id da sacola inserida;
        // O id da sacola inserida será utilizada para poder cadastrar seus produtos na tabela intermediária sacola_produto;
        try (PreparedStatement statement = conexaoSacola.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            statement.setDate(1, new java.sql.Date(sacola.getDataRetirada().getTime()));
            statement.setString(2, sacola.getUsuarioSacola().getEmailUsuario());
            if (sacola.getDataRetirada() != null) {
                statement.setDate(3, new java.sql.Date(sacola.getDataDevolucao().getTime()));
            }
            try {
                statement.execute();
                // Obtendo o ResultSet com o id da sacola inserida;
                ResultSet resultSet = statement.getGeneratedKeys();
                int idSacola = 0;
                if (resultSet.next()) {
                    // Obtendo o id da sacola inserida;
                    idSacola = resultSet.getInt(1);
                }
                try {
                    // Inserindo cada produto da sacola na tabela intermediária sacola_produto;
                    SacolaProdutoDAO sacolaProdutoDAO = new SacolaProdutoDAO();
                    for (SacolaProduto sacolaProduto : sacola.getListaSacolaProdutos()) {
                        sacolaProdutoDAO.inserirProdutoSacola(idSacola, sacolaProduto.getProduto().getCodigoProduto(), sacolaProduto.getQtdProduto());
                    }
                } catch (Exception e) {
                    throw new RuntimeException("Erro ao inserir as localizações do produto");
                }
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }
}
