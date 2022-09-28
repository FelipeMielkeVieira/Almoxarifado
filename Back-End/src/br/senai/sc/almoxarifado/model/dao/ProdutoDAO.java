package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.Classificacao;
import br.senai.sc.almoxarifado.model.entities.Localizacao;
import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;
import br.senai.sc.almoxarifado.model.factory.ProdutoFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Collection;

public class ProdutoDAO {
    private final Connection conexaoProduto;

    public ProdutoDAO() {
        this.conexaoProduto = new ConexaoFactory().conectaBD();
    }

    public void inserirProduto(Produto produto) {
        String sql = "INSERT INTO produto (nome, caracteristicas, quantidade, descartavel, imagem, anexos, classificacao_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
        ProdutoLocalizacaoDAO produtoLocalizacaoDAO = new ProdutoLocalizacaoDAO();
        try (PreparedStatement statement = conexaoProduto.prepareStatement(sql)) {

            statement.setString(1, produto.getNomeProduto());
            statement.setString(2, produto.getCaracteristicasProduto());
            statement.setInt(3, produto.getQuantidadeProduto());
            statement.setBoolean(4, produto.isProdutoDescartavel());
            statement.setByte(5, produto.getImagemProduto());
            statement.setString(6, produto.getAnexosProduto());
            statement.setInt(7, produto.getClassificacaoProduto().getCodigoClassificacao());

            try {
                System.out.println(statement.execute());
            } catch (Exception e) {
                throw new RuntimeException("Erro na execução do comando SQL!");
            }

//            try {
//                produtoLocalizacaoDAO.inserirProdutoLocalizacao();
//            }

        } catch (Exception e) {
            throw new RuntimeException("Erro na preparação do comando SQL!");
        }
    }

    public Collection<Produto> buscarProdutos(Integer indexInicial) {
        String sql = "SELECT * FROM produto WHERE id >= ? LIMIT 18";

        try (PreparedStatement statement = conexaoProduto.prepareStatement(sql)) {

            statement.setInt(1, indexInicial);

            try (ResultSet resultSet = statement.executeQuery()) {
                Collection<Produto> listaProdutos = new ArrayList<>();
                while (resultSet.next()) {
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
            LocalizacaoDAO localizacaoDAO = new LocalizacaoDAO();
            ArrayList<Localizacao> localizacoes = localizacaoDAO.buscarLocalizacoesPorProduto(resultSet.getInt("id"));
            ClassificacaoDAO classificacaoDAO = new ClassificacaoDAO();
            Classificacao classificacao = classificacaoDAO.buscarClassificacaoPorProduto(resultSet.getInt("classificacao_id"));

            return new ProdutoFactory().getProduto(
                    resultSet.getInt("id"),
                    resultSet.getInt("quantidade"),
                    resultSet.getString("nome"),
                    resultSet.getString("caracteristicas"),
                    resultSet.getString("anexos"),
                    resultSet.getBoolean("descartavel"),
                    resultSet.getByte("imagem"),
                    localizacoes,

            );
        } catch (Exception e) {
            throw new RuntimeException("Erro ao extrair o objeto!");
        }
    }
}
