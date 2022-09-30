package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.Localizacao;
import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.entities.Sacola;
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
        String sql = "INSERT INTO SACOLA (DATA_RETIRADA, DATA_DEVOLUCAO, USUARIO_EMAIL) VALUES (?, ?, ?);";

        // Criando statement passando por parâmetro o comando sql e Statement.RETURN_GENERATED_KEYS para retornar o id do produto inserido;
        // O id do produto inserido será utilizado para poder cadastrar suas localizações na tabela intermediária produto_localizacao;
        try (PreparedStatement statement = conexaoSacola.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

            statement.setDate(1, new java.sql.Date(sacola.getDataRetirada().getTime()));
            statement.setDate(2, new java.sql.Date(sacola.getDataDevolucao().getTime()));
            statement.setString(3, sacola.getEmailUsuario().getEmailUsuario());
            try {
                statement.execute();

                // Obtendo o ResultSet com o id do produto inserido;
                ResultSet resultSet = statement.getGeneratedKeys();
                int idProduto = 0;
                if (resultSet.next()) {
                    // Obtendo o id do produto inserido;
                    idProduto = resultSet.getInt(1);
                }
                try {
                    // Inserindo cada localização do produto na tabela intermediária produto_localizacao;
                    ProdutoLocalizacaoDAO produtoLocalizacaoDAO = new ProdutoLocalizacaoDAO();
                    for (Localizacao localizacao : produto.getListaLocalizacoesProduto()) {
                        produtoLocalizacaoDAO.inserirProdutoLocalizacao(idProduto, localizacao.getCodigoLocalizacao());
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
