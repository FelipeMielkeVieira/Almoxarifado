package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;
import br.senai.sc.almoxarifado.model.factory.ProdutoFactory;
import br.senai.sc.almoxarifado.model.factory.UsuarioFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Collection;

public class ProdutoDAO {
    private final Connection conexaoProduto;

    public ProdutoDAO(Connection conexaoProduto) { this.conexaoProduto = new ConexaoFactory().conectaBD(); }

    public void inserirProduto(Produto produto) {
        String sql = "insert into produto (nome, quantidade, descartavel, imagem, anexos, classificacao_id) values (?, ?, ?, ?, ?, ?)";

        try (PreparedStatement statement = conexaoProduto.prepareStatement(sql)) {

            statement.setString(1, produto.getNomeProduto());
            statement.setInt(2, produto.getQuantidadeProduto());
            statement.setBoolean(3, produto.isProdutoDescartavel());
            statement.setByte(4, produto.getImagemProduto());
            statement.setString(5, produto.getAnexosProduto());
            statement.setInt(6, produto.getClassificacaoProduto().getCodigoClassificacao());

            try {
                statement.execute();
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    public Collection<Produto> buscarProdutos(Integer indexInicial) {
        String sql = "select * from produto where id > ? limit 18";

        try (PreparedStatement statement = conexaoProduto.prepareStatement(sql)) {

            statement.setInt(1, indexInicial);

            try (ResultSet resultSet = statement.executeQuery()) {

                Collection<Produto> listaProdutos = new ArrayList<>();
                while(resultSet.next()) {
                    listaProdutos.add(extrairObjeto(resultSet));
                }
                return listaProdutos;

            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    private Produto extrairObjeto(ResultSet resultSet) {
        try {
//            return new ProdutoFactory().getProduto(
//                    resultSet.getInt("id"),
//                    resultSet.getString("nome"),
//                    resultSet.getInt("quantidade"),
//                    resultSet.getBoolean("descartavel"),
//                    resultSet.getByte("imagem"),
//                    resultSet.getString("anexos")
//            );
            return null;
        } catch (Exception e) {
            throw new RuntimeException("Erro ao extrair o objeto!");
        }
    }


}
