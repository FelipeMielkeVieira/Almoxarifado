package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.entities.Sacola;
import br.senai.sc.almoxarifado.model.entities.SacolaProduto;
import br.senai.sc.almoxarifado.model.entities.Usuario;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;
import br.senai.sc.almoxarifado.model.factory.SacolaFactory;
import br.senai.sc.almoxarifado.model.factory.SacolaProdutoFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class SacolaProdutoDAO {
    private final Connection conexaoSacolaProduto;

    public SacolaProdutoDAO() {
        this.conexaoSacolaProduto = new ConexaoFactory().conectaBD();
    }

    public void inserirProdutoSacola(Integer idSacola, Integer codigoProduto, Integer qtdProduto) {
        System.out.println("idsacola " + idSacola);
        System.out.println("codigoproduto " + codigoProduto);
        System.out.println("qtdproduto " + qtdProduto);
        String sql = "INSERT INTO SACOLA_PRODUTO (SACOLA_ID, PRODUTO_ID, QTD_PRODUTO) VALUES (?, ?, ?);";

        try (PreparedStatement statement = conexaoSacolaProduto.prepareStatement(sql)) {
            statement.setInt(1, idSacola);
            statement.setInt(2, codigoProduto);
            statement.setInt(3, qtdProduto);
            try {
                statement.execute();
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }


    public void deletarProdutoDasSacolas(Integer codigoProduto) {
        String sql = "DELETE FROM SACOLA_PRODUTO WHERE PRODUTO_ID = ? AND ID > 0;";

        try (PreparedStatement statement = conexaoSacolaProduto.prepareStatement(sql)) {
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

    public ArrayList<SacolaProduto> buscarProdutosPorSacolaID(Integer idSacola) {
        String sql = "SELECT * FROM SACOLA_PRODUTO WHERE SACOLA_ID = ?;";

        try (PreparedStatement statement = conexaoSacolaProduto.prepareStatement(sql)) {
            statement.setInt(1, idSacola);

            try (ResultSet resultSet = statement.executeQuery()) {
                ArrayList<SacolaProduto> listaSacolaProduto = new ArrayList<>();
                while (resultSet.next()) {
                    listaSacolaProduto.add(extrairObjeto(resultSet));
                }
                return listaSacolaProduto;
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    private SacolaProduto extrairObjeto(ResultSet resultSet) {
        try {
            ProdutoDAO produtoDAO = new ProdutoDAO();
            Produto produto = produtoDAO.buscarProdutoPorID(resultSet.getInt("PRODUTO_ID"));

            return new SacolaProdutoFactory().getSacolaProdutoSemSacola(
                    resultSet.getInt("id"),
                    resultSet.getInt("qtd_produto"),
                    produto
            );
        } catch (Exception e) {
            throw new RuntimeException("Erro ao extrair o objeto!");
        }
    }

}
