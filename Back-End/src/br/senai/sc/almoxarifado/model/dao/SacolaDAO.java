package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.*;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;
import br.senai.sc.almoxarifado.model.factory.ProdutoFactory;
import br.senai.sc.almoxarifado.model.factory.SacolaFactory;

import java.sql.*;
import java.util.ArrayList;
import java.util.Collection;

public class SacolaDAO {
    private final Connection conexaoSacola;

    public SacolaDAO() {
        this.conexaoSacola = new ConexaoFactory().conectaBD();
    }

    public void inserirSacola(Sacola sacola) {
        String sql = "INSERT INTO SACOLA ";
        if (sacola.getDataRetirada() != null) {
            sql += "(DATA_RETIRADA, USUARIO_EMAIL, DATA_DEVOLUCAO) VALUES (?, ?, ?);";
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
                    throw new RuntimeException("Erro ao inserir os produtos da sacola!");
                }
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    public Collection<Sacola> buscarSacolas(Integer indexInicial, Integer limiteSacolas) {
        String sql = "SELECT * FROM SACOLA WHERE id >= ? LIMIT ?";

        try (PreparedStatement statement = conexaoSacola.prepareStatement(sql)) {

            statement.setInt(1, indexInicial);
            statement.setInt(2, limiteSacolas);

            try (ResultSet resultSet = statement.executeQuery()) {
                Collection<Sacola> listaSacolas = new ArrayList<>();
                while (resultSet.next()) {
                    listaSacolas.add(extrairObjeto(resultSet));
                }
                return listaSacolas;

            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    /**
     * Método que busca o produto a partir de seu ID
     * @param idSacola
     * @return Produto
     * @throws RuntimeException
     * @throws SQLException
     */
    public Sacola buscarSacolaPorID(Integer idSacola) {
        String sql = "SELECT * FROM SACOLA WHERE ID = ? LIMIT 1;";

        try (PreparedStatement statement = conexaoSacola.prepareStatement(sql)) {
            statement.setInt(1, idSacola);

            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet != null && resultSet.next()) {
                    return extrairObjeto(resultSet);
                }
            } catch (SQLException e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL");
        }
        throw new RuntimeException("Nenhum produto encontrado!");
    }

    public Sacola extrairObjeto(ResultSet resultSet) {
        try {
            UsuarioDAO usuarioDAO = new UsuarioDAO();
            //Talvez volte uma lista de usuários, dando erro aq
            Usuario usuario = usuarioDAO.selecionarPorEmail(resultSet.getString("USUARIO_EMAIL"));

            SacolaProdutoDAO sacolaProdutoDAO = new SacolaProdutoDAO();
            ArrayList<SacolaProduto> listaProdutos = sacolaProdutoDAO.buscarProdutosPorSacolaID(resultSet.getInt("id"));

            return new SacolaFactory().getSacola(
                    resultSet.getInt("id"),
                    resultSet.getDate("data_retirada"),
                    resultSet.getDate("data_devolucao"),
                    usuario,
                    listaProdutos
            );
        } catch (Exception e) {
            throw new RuntimeException("Erro ao extrair o objeto!");
        }
    }
}
