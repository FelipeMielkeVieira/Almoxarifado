package br.senai.sc.almoxarifado.model.dao;

import br.senai.sc.almoxarifado.model.entities.Produto;
import br.senai.sc.almoxarifado.model.factory.ConexaoFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;

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




}
